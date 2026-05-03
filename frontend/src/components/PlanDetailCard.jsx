import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlanDetailCard({ plan }) {
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 mb-6 cursor-pointer"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-2">{plan.title}</h1>
        <p className="text-2xl font-semibold mb-2">{plan.price}</p>
        <p className="text-gray-500 mb-6">{plan.description}</p>

        <button
          onClick={() => setShowCheckout(true)}
          className="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full shadow-md"
        >
          {plan.cta}
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg border">
          <h2 className="text-xl font-semibold mb-4">What you get</h2>

          <ul className="space-y-3 text-gray-700">
            {plan.mainFeatures.map((f, i) => (
              <li key={i}>✓ {f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* WHO IS THIS FOR */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-xl font-semibold mb-4">Who is this for?</h2>

        <ul className="space-y-3 text-gray-600">
          {plan.targetUsers.map((u, i) => (
            <li key={i}>• {u}</li>
          ))}
        </ul>
      </div>

      {/* FEATURE BREAKDOWN */}
      <div className="max-w-4xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-8">
        {plan.breakdown.map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold mb-3">{section.title}</h3>
            <ul className="text-gray-600 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>- {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* COMPARISON */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-xl font-semibold mb-4">Compare Plans</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border rounded-xl overflow-hidden">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Feature</th>
                {plan.comparison.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`p-3 ${
                      h === plan.highlightColumn ? "bg-red-50" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {plan.comparison.rows.map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{row.feature}</td>
                  {row.values.map((val, idx) => (
                    <td
                      key={idx}
                      className={`p-3 ${
                        plan.comparison.headers[idx] === plan.highlightColumn
                          ? "bg-red-50 font-medium"
                          : ""
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-between items-center">
        <p className="font-semibold">{plan.price}</p>

        <button
          onClick={() => setShowCheckout(true)}
          className="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full shadow-md"
        >
          {plan.cta}
        </button>
      </div>

      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative">
            {/* Close */}
            <button
              onClick={() => setShowCheckout(false)}
              className="cursor-pointer absolute top-3 right-4 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-2">Checkout</h2>
            <p className="text-gray-500 mb-4">{plan.title}</p>

            <div className="border rounded-lg p-4 mb-4">
              <p className="font-medium">{plan.price}</p>
            </div>

            <input
              placeholder="Full Name"
              className="border p-2 w-full mb-3 rounded"
            />

            <input
              type="email"
              required
              placeholder="Email"
              className="border p-2 w-full mb-4 rounded"
            />

            <button
              onClick={() => {
                setShowCheckout(false);
                alert("Payment Successful (DEMO)");
              }}
              className="cursor-pointer w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded-full"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanDetailCard;
