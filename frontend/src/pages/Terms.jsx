import FAQ from "../components/FAQ";
import PageWrapper from "../components/PageWrapper";

function Terms() {
  return (
    <PageWrapper>
      <section className="w-full max-w-[900px] mx-auto px-6 py-16">
        {/* TITLE */}
        <h1 className="text-center text-red-600 text-3xl sm:text-4xl font-semibold mb-12">
          Terms & Conditions
        </h1>

        <div className="space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">1. General</h2>
            <p>
              Dermalyze is an AI-powered skin analysis service provided for
              informational and educational purposes only. The service analyzes
              uploaded photos using artificial intelligence and generates
              automated results that may vary depending on image quality,
              lighting, and other factors. Dermalyze does not provide medical
              advice, diagnosis, or treatment and should not be used as a
              substitute for professional medical consultation.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">2. Eligibility</h2>
            <p>
              The service may be used by individuals aged 13 years or older.
              Users under the age of 18 must obtain consent from a parent or
              legal guardian before using Dermalyze. By accessing or using the
              service, you confirm that you meet these eligibility requirements.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">3. Use of Photos</h2>
            <p>
              Photos uploaded to Dermalyze are used solely for the purpose of
              performing skin analysis. Uploaded photos are processed
              temporarily and are not stored after the analysis is completed,
              unless otherwise stated in the Privacy Policy.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              4. Accuracy and Limitations
            </h2>
            <p>
              The analysis results provided by Dermalyze are generated
              automatically by AI and are not guaranteed to be accurate,
              complete, or suitable for all users. Results may differ based on
              photo conditions and individual skin characteristics.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              5. User Responsibilities
            </h2>
            <p>
              Users agree to upload only their own photos or photos for which
              they have obtained proper permission. Users must not misuse the
              service, attempt to disrupt its functionality, or use the results
              for medical decision-making.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              6. Intellectual Property
            </h2>
            <p>
              All content, systems, and technology used in Dermalyze, including
              but not limited to software, design, and analysis models, are the
              intellectual property of Dermalyze and may not be copied or reused
              without permission.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              Dermalyze shall not be held liable for any direct or indirect
              damages arising from the use of the service or reliance on the
              analysis results.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">8. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and interpreted in
              accordance with the laws of the Republic of Indonesia.
            </p>
          </div>
        </div>
      </section>
      <FAQ />
    </PageWrapper>
  );
}

export default Terms;
