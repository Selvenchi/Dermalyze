import imageCompression from "browser-image-compression";
import { useNavigate } from "react-router-dom";

import React from "react";
import FAQ from "../components/FAQ";

import Glasses from "../assets/icons/glasses.svg";
import Light from "../assets/icons/light.svg";
import Makeup from "../assets/icons/makeup.svg";
import Face from "../assets/icons/face.svg";
import UploadIcon from "../assets/icons/Upload.svg";
import PageWrapper from "../components/PageWrapper";
import axios from "axios";

import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function ScanPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isConvertingImagetoBase64, setIsConvertingImagetoBase64] =
    useState(false);
  const [image, setImage] = useState();

  // const dummyResult = {
  //   skinType: "Normal",
  //   skinUndertone: "Neutral",
  //   perceivedAge: 17,
  //   eyeAge: 16,
  //   scores: {
  //     acne: 92,
  //     redness: 88,
  //     pores: 85,
  //     wrinkles: 98,
  //     moisture: 80,
  //     darkCircle: 82,
  //   },
  // };

  return (
    <PageWrapper>
      <section className="w-full max-w-[1200px] mx-auto px-6 py-16">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-red-600 text-4xl sm:text-6xl mb-8">
            Smart Facial Skin Analysis
          </h1>
          <p className="text-gray-600">Uncover your true facial harmony.</p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT - INSTRUCTIONS */}
          <div className="border border-gray-300 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-6">INSTRUCTIONS</h2>

              <div className="space-y-5">
                <InstructionItem
                  icon={Glasses}
                  text="Take off your glasses and make sure bangs are not covering your forehead"
                />
                <InstructionItem
                  icon={Light}
                  text="Make sure that you're in a well-lit environment"
                />
                <InstructionItem
                  icon={Makeup}
                  text="Remove makeup to get more accurate results"
                />
                <InstructionItem
                  icon={Face}
                  text="Look straight into the camera"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={async () => {
                if (!image) {
                  alert("Please upload an image first!");
                  return;
                }

                try {
                  setIsLoading(true);
                  const response = await axios.post(
                    "http://localhost:8000/generate",
                    {
                      imageInput: image,
                      password: prompt("Enter Password"),
                    },
                  );

                  navigate("/analysis", {
                    state: {
                      image,
                      result: response.data,
                    },
                  });
                } catch (err) {
                  console.log(err);
                } finally {
                  setIsLoading(false);
                }
              }}
              className={`disabled:opacity-30 flex items-center justify-center gap-2 mt-8 bg-red-600 text-white py-3 rounded-full hover:scale-105 transition cursor-pointer ${isLoading && "pointer-events-none"}`}
              disabled={isLoading || isConvertingImagetoBase64}
            >
              {isLoading && <LoadingSpinner />}
              <p>Start Now</p>
            </button>
          </div>

          {/* UPLOAD */}
          <div className="border-3 border-dashed border-red-600 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            {/* UPLOAD ICON */}
            {!image ? (
              <>
                <img src={UploadIcon} className="w-16 h-16 mb-6 opacity-70" />
                <p className="text-gray-700 mb-4">Drag and drop image here</p>
              </>
            ) : (
              <img
                src={image}
                className="max-h-[300px] object-contain rounded-lg mb-5"
              />
            )}

            <input
              type="file"
              className="input__invisible fixed opacity-0 invisible"
              onChange={async (e) => {
                const file = e.target.files[0];

                if (!file) return;

                const options = {
                  maxSizeMB: 0.3, // targetny 300kb
                  maxWidthOrHeight: 720, // resize
                  useWebWorker: true,
                  initialQuality: 0.7,
                };

                try {
                  setIsConvertingImagetoBase64(true);
                  const compressedFile = await imageCompression(file, options);

                  const reader = new FileReader();

                  reader.onloadend = () => {
                    setImage(reader.result);
                  };
                  reader.readAsDataURL(compressedFile);
                  console.log(compressedFile);
                } catch (err) {
                  console.log(err);
                } finally {
                  setIsConvertingImagetoBase64(false);
                }
              }}
            />

            <button
              onClick={() => {
                const invisibleFileInput =
                  document.querySelector(".input__invisible");
                invisibleFileInput.click();
              }}
              className={`disabled:opacity-30 flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full hover:scale-105 transition cursor-pointer ${isConvertingImagetoBase64 && "pointer-events-none"}`}
              disabled={isConvertingImagetoBase64}
            >
              {isConvertingImagetoBase64 && <LoadingSpinner />}
              <p>Upload Image</p>
            </button>

            <p className="text-sm text-gray-500 mt-6">
              <span className="text-red-500">1</span> Time Left Today
            </p>
          </div>
        </div>
      </section>
      <FAQ />
    </PageWrapper>
  );

  function InstructionItem({ icon, text }) {
    return (
      <div className="flex items-start gap-4">
        <img src={icon} className="w-6 h-6 mt-1 opacity-70" />
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    );
  }
}

export default ScanPage;
