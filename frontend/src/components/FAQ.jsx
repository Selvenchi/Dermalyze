import { useState } from "react";

function FAQ() {
  return (
    <section className="w-full max-w-[900px] mx-auto mt-6 px-6">
      <h2 className="text-center text-red-600 text-4xl lg:text-5xl mb-10">
        Skin Analysis FAQ
      </h2>

      <div>
        <FAQItem
          question="What is skin analysis, and what does a skin analyzer do?"
          answer="Skin analysis identifies your skin type and concerns. Dermalyze uses AI to scan your face and provide personalized insights."
        />
        <FAQItem
          question="How does Dermalyze work?"
          answer="Upload a clear selfie, and our AI analyzes visible skin features to generate your results instantly."
        />
        <FAQItem
          question="Is the analysis accurate?"
          answer="It’s data-driven and reliable for insights, but it does not replace professional medical advice."
        />
        <FAQItem
          question="Why did my analysis fail?"
          answer="This usually happens due to poor lighting, blurry images, or when your face is not fully visible."
        />
        <FAQItem
          question="Is my data safe?"
          answer="Yes. Your data is handled securely and never shared without your consent."
        />
      </div>
    </section>
  );

  function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="border-b border-gray-300">
        <button
          onClick={() => setOpen(!open)}
          className={`w-full flex justify-between items-center py-5 px-8 text-left transition cursor-pointer ${
            open ? "bg-[#fff4f4]" : "bg-white"
          }`}
        >
          <p className="text-sm sm:text-base font-medium text-gray-800 ">
            {question}
          </p>

          <i
            className={`fas fa-chevron-down text-gray-500 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          ></i>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 pb-5" : "max-h-0"
          }`}
        >
          <p className="text-gray-500 text-sm leading-relaxed pr-6 ml-8 mt-4">
            {answer}
          </p>
        </div>
      </div>
    );
  }
}

export default FAQ;
