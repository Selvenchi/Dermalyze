import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

import Hero from "../assets/hero.mp4";
import Face1 from "../assets/face1.png";
import Face2 from "../assets/face2.avif";
import "../App.css";
import PageWrapper from "../components/PageWrapper";

function Home() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center text-center mt-16 px-6">
        <p className="text-4xl sm:text-[3.5rem] max-w-3xl leading-tight mb-10">
          <span className="text-red-600">Science</span>-backed AI Dermatologist
          you can trust.
        </p>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-h-[800px] object-cover rounded-[32px]"
        >
          <source src={Hero} type="video/mp4" />
        </video>
      </section>

      <section className="w-full max-w-[1200px] mx-auto mt-24 px-6">
        <h2 className="text-center text-4xl lg:text-5xl mb-16">
          Scan Your Face & Get Results
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* LEFT - SKIN INSIGHTS */}
          <div className="space-y-6 mx-12 md:mx-0">
            <InsightItem
              title="Skin Texture"
              desc="Analyze smoothness, pores, and overall surface condition of your skin."
            />
            <InsightItem
              title="Acne & Breakouts"
              desc="Detect visible acne and areas prone to inflammation."
            />
            <InsightItem
              title="Pigmentation"
              desc="Identify dark spots, uneven tone, and discoloration."
            />

            <button
              onClick={() => {
                navigate("/skincare");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block mt-4 border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              View Full Guideline
            </button>
          </div>

          {/* CENTER - FACE */}
          <div className="relative flex justify-center">
            <div className="relative p-2 rounded-[32px] border-2 border-red-500">
              <img
                src={Face1}
                className="w-[300px] h-[420px] object-cover rounded-[24px]"
              />
            </div>

            <button
              onClick={() => {
                navigate("/scanpage");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-[rgba(197,10,8,1)] rounded-full shadow-md text-white absolute bottom-6 px-6 py-2 block transition cursor-pointer"
            >
              Start Analysis
            </button>
          </div>

          {/* RIGHT - RESULTS */}
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
            <p className="text-sm text-gray-600">
              Based on your scan, here are insights for your skin:
            </p>

            <ResultItem label="Skin Type" value="Oily" />
            <ResultItem label="Main Concern" value="Acne" />
            <ResultItem label="Hydration" value="Low" />

            <div>
              <p className="text-sm font-medium mb-2">Recommended Routine</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Gentle cleanser</li>
                <li>• Oil-control moisturizer</li>
                <li>• SPF 30+ sunscreen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full mt-16 sm:mt-20 px-4 sm:px-6 max-w-[1440px] mx-auto ">
        {/* IMAGE */}
        <div className="w-full sm:flex sm:justify-center sm:gap-12">
          <img
            src={Face2}
            className="w-full mb-10 max-w-[3800px] sm:max-w-[480px] md:max-w-[420px] lg:max-w-[700px] object-cover rounded-[24px] sm:rounded-[32px]"
          />

          {/* TEXT */}
          <div className="max-w-xl text-center md:text-left flex flex-col justify-center items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              AI Skin Analysis
            </h2>

            <p className="text-gray-500 max-w-80 text-center text-sm sm:text-base mb-6 mt-2">
              Delivering personalized skincare experiences that deeply resonate
              with consumers.
            </p>

            <div className="space-y-3 sm:space-y-4 max-w-[400px]">
              <FeatureItem>
                Analyze 20+ skin health and beauty metrics with clinical
                precision
              </FeatureItem>

              <FeatureItem>
                Guide users through a customer journey that boosts engagement
              </FeatureItem>

              <FeatureItem>
                Trained on 3M+ data points to ensure 98% diagnostic accuracy
              </FeatureItem>
            </div>

            <button
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-[rgba(197,10,8,1)] rounded-full shadow-md text-white block mt-6 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base hover:scale-105 transition cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <section className="w-full max-w-[1200px] mx-auto mt-24 mb-24 px-6 text-center ">
        <p className="text-center text-red-600 text-xl font-semibold mb-3">
          PRICING
        </p>
        <h2 className="text-center text-black text-4xl lg:text-5xl mb-16">
          Choose Your Best Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* FREE */}
          <div className="rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg bg-gradient-to-br from-red-600 to-orange-400">
            <div>
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <p className="text-5xl font-bold mb-6">Rp0</p>

              <ul className="space-y-3 text-center text-sm md:text-left">
                <li>✔ 3 skin analysis / day</li>
                <li>✔ Basic results</li>
                <li>✔ Basic insight</li>
              </ul>
            </div>

            <button
              onClick={() => {
                navigate("/scanpage");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-8 bg-white text-black py-2 rounded-full hover:scale-105 transition cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* PLUS (MOST POPULAR) */}
          <div className="relative rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-200 bg-white scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-5 py-2 rounded-full">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-4">Personal</h3>
            <p className="text-4xl md:text-2xl lg:text-4xl font-bold mb-6">
              Rp59.000<span className="text-sm">/mo</span>
            </p>

            <ul className="space-y-3 text-sm text-gray-700 md:text-left">
              <li>✔ 20 skin analysis / day</li>
              <li>✔ Detailed insights</li>
              <li>✔ Product matching</li>
            </ul>

            <button
              onClick={() => {
                navigate("/personal");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-8 w-full bg-red-600 text-white py-2 rounded-full hover:scale-105 transition cursor-pointer"
            >
              Upgrade
            </button>
          </div>

          {/* PREMIUM */}
          <div className="rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-200 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-4xl md:text-2xl lg:text-4xl font-bold mb-6">
                Rp129.000<span className="text-sm">/mo</span>
              </p>

              <ul className="space-y-3 text-gray-700 text-sm md:text-left">
                <li>✔ Unlimited analyses</li>
                <li>✔ AI skincare routine</li>
                <li>✔ Progress Tracking</li>
              </ul>
            </div>

            <button
              onClick={() => {
                navigate("/premium");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-8 bg-red-600 text-white py-2 rounded-full hover:scale-105 transition cursor-pointer"
            >
              Upgrade
            </button>
          </div>
        </div>
      </section>

      <FAQ />
    </PageWrapper>
  );
}

function Button({ children, icon, className = "" }) {
  return (
    <button
      className={`px-5 py-2 flex items-center justify-center bg-[rgba(197,10,8,1)] rounded-full gap-2 cursor-pointer shadow-md text-white ${className}`}
    >
      {icon && <img src={icon} />}
      <p>{children}</p>
    </button>
  );
}

function FeatureItem({ children }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl px-4 py-3 shadow-sm">
      <div className="text-red-500 text-xl mt-1">✦</div>
      <p className="text-gray-700 text-sm">{children}</p>
    </div>
  );
}

function InsightItem({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function ResultItem({ label, value }) {
  return (
    <div className="flex justify-between text-sm border-b pb-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export default Home;
