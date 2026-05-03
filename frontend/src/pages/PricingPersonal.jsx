import PlanDetailCard from "../components/PlanDetailCard";

const personalPlan = {
  id: "personal",
  title: "Personal Plan",
  price: "Rp59.000 / month",
  description:
    "Smarter daily skin insights to help you understand and improve your skin consistently.",
  cta: "Start Personal Plan",

  mainFeatures: [
    "20 skin analyses per day",
    "Detailed skin insights (texture, acne, pigmentation)",
    "Product matching based on your condition",
    "Improved skin scoring system",
    "Personalized recommendations",
  ],

  targetUsers: [
    "Users who want more than basic skin results",
    "People building a consistent skincare habit",
    "Users exploring products that match their skin",
  ],

  breakdown: [
    {
      title: "Skin Analysis",
      items: [
        "20 scans per day",
        "Texture & pore detection",
        "Acne & pigmentation insights",
      ],
    },
    {
      title: "AI Insights",
      items: [
        "Detailed condition breakdown",
        "Product recommendations",
        "Smart skin scoring",
      ],
    },
  ],

  highlightColumn: "Personal",

  comparison: {
    headers: ["Free", "Personal", "Premium"],
    rows: [
      {
        feature: "Scans/day",
        values: ["3", "20", "Unlimited"],
      },
      {
        feature: "Insights",
        values: ["Basic", "Detailed", "Advanced"],
      },
      {
        feature: "Tracking",
        values: ["✗", "✗", "✓"],
      },
      {
        feature: "Routine",
        values: ["✗", "✗", "✓"],
      },
    ],
  },
};

function PricingPersonal() {
  return <PlanDetailCard plan={personalPlan} />;
}

export default PricingPersonal;
