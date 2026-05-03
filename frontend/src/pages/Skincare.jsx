import { Link, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function Skincare() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="w-full max-w-[1000px] mx-auto px-6 py-16">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold mb-2">GUIDE</p>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
            Basic Skincare Tips
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Build a simple routine that works for your skin. No confusion, no
            guesswork.
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-semibold">1. Know Your Skin Type</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <TipCard
              title="Oily Skin"
              desc="Produces excess oil, often shiny with enlarged pores."
            />
            <TipCard
              title="Dry Skin"
              desc="Feels tight, rough, and may flake easily."
            />
            <TipCard
              title="Combination Skin"
              desc="Oily in T-zone, dry on cheeks."
            />
            <TipCard
              title="Sensitive Skin"
              desc="Easily irritated, prone to redness or reactions."
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-semibold">2. Build a Simple Routine</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <RoutineCard
              title="Morning"
              steps={["Gentle Cleanser", "Moisturizer", "Sunscreen (SPF 30+)"]}
            />

            <RoutineCard
              title="Night"
              steps={["Cleanser", "Treatment (acne/serum)", "Moisturizer"]}
            />
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-semibold">3. Common Mistakes to Avoid</h2>

          <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
            <li>• Overwashing your face</li>
            <li>• Skipping sunscreen</li>
            <li>• Using too many products at once</li>
            <li>• Not being consistent</li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-semibold">4. Keep It Consistent</h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Skincare results take time. Stick to your routine for at least 2–4
            weeks before expecting visible improvements.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-xl font-semibold mb-4">
            Want personalized skincare insights?
          </h3>

          <button
            onClick={() => {
              navigate("/scanpage");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:scale-105 transition cursor-pointer"
          >
            Start Skin Anaylsis
          </button>
        </div>
      </section>
    </PageWrapper>
  );

  function TipCard({ title, desc }) {
    return (
      <div className="bg-white shadow-sm rounded-xl p-5">
        <p className="font-semibold mb-1">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    );
  }

  function RoutineCard({ title, steps }) {
    return (
      <div className="bg-white shadow-md rounded-2xl p-6">
        <p className="font-semibold mb-3">{title}</p>
        <ul className="space-y-2 text-sm text-gray-600">
          {steps.map((step, i) => (
            <li key={i}>• {step}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skincare;
