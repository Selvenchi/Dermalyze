import Face1 from "../assets/face1.png";
import Face2 from "../assets/face2.avif";
import { Link, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function About() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="w-full max-w-[1100px] mx-auto px-6 py-16">
        {/* HERO */}
        <div className="text-center mb-20">
          <p className="text-red-600 font-semibold mb-2">ABOUT</p>
          <h1 className="text-3xl sm:text-5xl font-semibold mb-6">
            What is Dermalyze?
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Dermalyze is a skin analysis platform designed to help you
            understand your skin clearly, without confusion or guesswork.
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img src={Face1} className="w-full rounded-[24px] object-cover" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Scan your skin instantly
            </h2>

            <p className="text-gray-500 mb-4">
              Upload a photo and let Dermalyze analyze your skin using advanced
              AI. It detects visible concerns such as acne, texture, and
              pigmentation in seconds.
            </p>

            <p className="text-gray-500">
              No complicated steps. Just a clear understanding of what’s going
              on with your skin.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">
              Get meaningful insights
            </h2>

            <p className="text-gray-500 mb-4">
              Dermalyze doesn’t just show results — it explains them. You’ll get
              insights about your skin type, main concerns, and overall
              condition.
            </p>

            <p className="text-gray-500">
              Everything is designed to be simple, clear, and useful for
              everyday skincare decisions.
            </p>
          </div>

          <img
            src={Face2}
            className="w-full rounded-[24px] object-cover order-1 md:order-2"
          />
        </div>

        {/* SECTION 3 */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Built on trust and simplicity
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">
            Dermalyze was created with the belief that everyone deserves to
            understand their skin. We focus on transparency, accuracy, and
            education — helping you make better skincare decisions with
            confidence.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Ready to understand your skin?
          </h3>

          <button
            onClick={() => {
              navigate("/scanpage");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:scale-105 transition cursor-pointer"
          >
            Start Anaylsis
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

export default About;
