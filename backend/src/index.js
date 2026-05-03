import "dotenv/config";
import express from "express";
import { ai } from "./openrouter.js";
import { prompt } from "./prompt.js";
import cors from "cors";
const PORT = 8000;
const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "API running" });
});

app.post("/generate", async (request, response) => {
  try {
    const { imageInput, password } = request.body;

    if (process.env.password !== password) {
      return response.status(400).json({ error: "Not allowed" });
    }

    if (!imageInput) {
      return response.status(400).json({ error: "No image provided" });
    }

    // split base64 + mime
    const [header, data] = imageInput.split(",");
    const mimeType = header.match(/data:(.*);base64/)[1];

    /* ---------- CALL GEMINI ---------- */
    const modelResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: mimeType,
                data: data,
              },
            },
          ],
        },
      ],
    });

    const raw = modelResponse.text;
    // const raw = `
    // {
    //   "skinType": "Combination",
    //   "skinUndertone": "Warm",
    //   "perceivedAge": 24,
    //   "eyeAge": 23,
    //   "scores": {
    //     "acne": 95,
    //     "redness": 94,
    //     "pores": 88,
    //     "wrinkles": 97,
    //     "moisture": 85,
    //     "darkCircle": 80
    //   }
    // }
    // `;
    console.log("RAW AI:", raw);

    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.log("JSON parse error:", raw);
      return response.status(500).json({
        error: "Invalid AI response",
      });
    }

    response.json(parsed);
  } catch (err) {
    console.log("SERVER ERROR:", err);
    response.status(500).json({ error: "Server error" });
  }
});

export default app;
