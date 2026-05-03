import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Face1 from "../assets/face1.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PageWrapper from "../components/PageWrapper";

function Analysis() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const image = state?.image;

  // sama dummy
  // const result = state?.result || {
  //   skinType: "Normal",
  //   skinUndertone: "Neutral",
  //   perceivedAge: 18,
  //   eyeAge: 18,
  //   scores: {
  //     acne: 70,
  //     redness: 60,
  //     pores: 75,
  //     wrinkles: 80,
  //     moisture: 65,
  //     darkCircle: 50,
  //   },
  // };

  const result = state?.result;

  if (!result) {
    return (
      <div className="text-center mt-20">
        <p>No analysis data found.</p>
        <button
          onClick={() => navigate("/scanpage")}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const metrics = [
    "acne",
    "redness",
    "pores",
    "wrinkles",
    "moisture",
    "darkCircle",
  ];

  return (
    <PageWrapper>
      <div className="w-full max-w-[1200px] mx-auto px-6 py-10 flex flex-col justify-center gap-8 mt-8">
        {/* HEADER */}
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row sm:justify-between items-center mb-8">
          <h1 className="text-5xl text-red-600 text-center sm:text-left">
            Your Skin Analysis
          </h1>

          <button
            onClick={() => {
              navigate("/scanpage");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-red-600 text-white cursor-pointer px-5 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition"
          >
            <i className="fas fa-rotate-left"></i>
            Retake
          </button>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src={image}
            className="w-[220px] h-[220px] md:w-[30rem] md:h-[30rem] object-cover rounded-2xl shadow"
          />
        </div>

        {/* TOP STATS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <StatCard icon="✧" title={result.skinType} subtitle="Skin type" />
          <StatCard
            title={result.skinUndertone}
            subtitle="Undertone"
            circle
            color={getUndertoneColor(result.skinUndertone)}
          />
          <StatCard
            title={`${result.perceivedAge} years`}
            subtitle="Perceived age"
          />
          <StatCard title={`${result.eyeAge} years`} subtitle="Eye age" />
        </div>

        {/* SCROLL CARDS */}
        <div className="flex gap-6 overflow-x-auto pb-6">
          {metrics.map((key) => {
            const value = result.scores?.[key] ?? 0;

            return (
              <AnalysisCard
                key={key}
                title={formatTitle(key)}
                desc={getLabel(value, key)}
                score={value}
                image={image}
              />
            );
          })}
        </div>

        {/* RECOMMENDATIONS */}
        {/* <h2 className="text-3xl text-red-600 text-center mt-3">
          Recommendations for you
        </h2>

        <div>
          <div className="bg-gray-100 rounded-3xl p-6 mb-10">
            <h3 className="text-red-600 font-semibold mb-2">
              Step 1 : Make up remover
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Gently removes makeup, sunscreen, and surface impurities,
              preparing skin for cleansing
            </p>

            <ProductCard />
          </div>

          <div className="bg-red-100 rounded-3xl p-6 mb-12">
            <div className="flex items-center gap-3 mb-6 text-red-600 font-semibold">
              <i className="fas fa-fire"></i>
              This week’s featured offer
            </div>

            <ProductCard />
          </div>
        </div> */}

        {/* CTA */}
        <div className="bg-gray-100 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg mb-4">
              Integrate AI-powered skin analysis by{" "}
              <span className="font-semibold">Dermalyze</span> into your
              platform.
            </p>

            <button
              onClick={() => {
                navigate("/premium");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-2 rounded-full bg-white shadow hover:scale-105 transition cursor-pointer"
            >
              See plans
            </button>
          </div>

          <img
            src={Face1}
            className="w-[220px] h-[160px] object-cover rounded-2xl"
          />
        </div>

        {/* FOOTNOTE */}
        <p className="text-xs text-gray-400 mt-10 text-center">
          AI Skin Analysis results are not medical advice. For any concerns
          about your skin health or appearance, please consult a qualified
          dermatologist or healthcare professional.
        </p>
      </div>
    </PageWrapper>
  );
}

export default Analysis;

/* ---------- COMPONENTS ---------- */

function getScoreColor(score) {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-yellow-500";
  if (score >= 40) return "bg-orange-500";
  return "bg-red-500";
}

function getUndertoneColor(tone) {
  if (tone === "Warm") return "bg-yellow-400";
  if (tone === "Cool") return "bg-blue-400";
  return "bg-gray-400";
}

function formatTitle(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

function getLabel(score) {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Good";
  if (score >= 40) return "Average";
  if (score >= 20) return "Poor";
  return "Severe";
}

function StatCard({ title, subtitle, icon, circle, color }) {
  return (
    <div className="bg-gray-100 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
      {circle ? (
        <div className={`w-6 h-6 rounded-full ${color}`}></div>
      ) : (
        <div className="text-red-500 text-lg">{icon}</div>
      )}

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

function AnalysisCard({ title, desc, score, image }) {
  return (
    <div className="min-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={image || Face1} className="w-full h-[220px] object-cover" />

      <div className="p-4">
        {/* TITLE & SCORE */}
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold">{title}</p>
          {score !== undefined && (
            <p className="text-sm font-medium">{score}/100</p>
          )}
        </div>

        {/* LABEL */}
        <p className="text-sm text-gray-500 mb-3">{desc}</p>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${getScoreColor(score)}`}
            style={{ width: `${score || 0}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-6 shadow">
      <div className="w-[100px] h-[100px] bg-gray-300 rounded-2xl"></div>

      <div>
        <p className="font-semibold mb-2">Product Name</p>
        <p className="mb-3">Rp100.000</p>

        <button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition">
          Visit Product
        </button>
      </div>
    </div>
  );
}
