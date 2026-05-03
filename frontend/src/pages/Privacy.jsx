import FAQ from "../components/FAQ";
import PageWrapper from "../components/PageWrapper";

function Privacy() {
  return (
    <PageWrapper>
      <section className="w-full max-w-[900px] mx-auto px-6 py-16">
        {/* TITLE */}
        <h1 className="text-center text-red-600 text-3xl sm:text-4xl font-semibold mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
            <p>
              Dermalyze respects your privacy and is committed to protecting
              your personal information. This Privacy Notice explains how we
              collect, use, and safeguard your data when you access or use the
              Dermalyze website and its AI-powered skin analysis services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              2. Information We Collect
            </h2>
            <p>
              Dermalyze may collect limited personal information, including
              facial photos uploaded for analysis, basic account information
              such as email address if provided, and technical data such as
              device type, browser information, and usage data. We only collect
              information that is necessary to operate and improve the service.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              3. Use of Uploaded Photos
            </h2>
            <p>
              Uploaded photos are used solely for the purpose of performing
              AI-based skin analysis. Photos are processed temporarily and are
              not stored after the analysis is completed.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              4. How We Use Your Information
            </h2>
            <p>
              We use collected information to provide skin analysis results,
              improve service accuracy and performance, ensure platform
              security, and display relevant skincare product recommendations.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              5. Product Recommendations and Affiliate Links
            </h2>
            <p>
              Dermalyze may display skincare product recommendations based on
              analysis results. Some recommendations may include affiliate
              links, meaning Dermalyze may receive a commission if a purchase is
              made through such links. This does not influence the analysis
              results.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">6. Data Sharing</h2>
            <p>
              Dermalyze does not sell, rent, or trade your personal data.
              Information may be shared with trusted third-party service
              providers solely for hosting, analytics, or technical support
              purposes and only to the extent necessary to operate the service.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">7. Age Requirement</h2>
            <p>
              Dermalyze is intended for users aged 13 years or older. Users
              under the age of 18 must obtain consent from a parent or legal
              guardian before using the service.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">8. Data Security</h2>
            <p>
              Dermalyze implements reasonable technical and organizational
              measures to protect personal data against unauthorized access,
              misuse, or disclosure.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">9. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting Dermalyze through the contact
              details provided on the website.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              10. Changes to This Privacy Notice
            </h2>
            <p>
              Dermalyze may update this Privacy Notice from time to time. Any
              changes will be posted on this page with an updated effective
              date.
            </p>
          </div>
        </div>
      </section>

      <p className="text-s text-gray-400 mt-10 text-center">
        Last updated: April 2026
      </p>

      <FAQ />
    </PageWrapper>
  );
}

export default Privacy;
