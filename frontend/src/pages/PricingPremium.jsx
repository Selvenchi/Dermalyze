import PlanDetailCard from "../components/PlanDetailCard";

const premiumPlan = {
  id: "premium",
  title: "Premium Plan",
  price: "Rp129.000 / month",
  description:
    "Complete skin intelligence with routines, tracking, and advanced insights.",
  cta: "Start Premium Plan",

  mainFeatures: [
    "Unlimited skin analysis",
    "AI skincare routine",
    "Progress tracking",
    "Advanced skin scoring",
    "Personalized recommendations",
  ],

  targetUsers: [
    "Users serious about improving skin condition",
    "People tracking long-term progress",
    "Users who want full personalized routines",
  ],

  breakdown: [
    {
      title: "Skin Analysis",
      items: [
        "Unlimited scans",
        "Deep texture detection",
        "Acne severity grading",
      ],
    },
    {
      title: "AI & Tracking",
      items: [
        "Daily routine generator",
        "Weekly progress reports",
        "Skin score evolution",
      ],
    },
  ],

  highlightColumn: "Premium",

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

function PricingPremium() {
  return <PlanDetailCard plan={premiumPlan} />;
}

export default PricingPremium;
