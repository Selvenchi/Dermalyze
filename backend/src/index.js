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

app.get("/", async (request, response) => {
  const modelResponse = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "hi",
  });
  response.send({
    message: modelResponse.text,
  });

  // response.send({ message: "welcome to API :D" });
});

app.post("/generate", async (request, response) => {
  console.log(request.body);

  response.send({ message: "I WAS TESTING" });
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PROT ${PORT}`);
});
