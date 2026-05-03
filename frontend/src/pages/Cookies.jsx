import FAQ from "../components/FAQ";
import PageWrapper from "../components/PageWrapper";

function Cookies() {
  return (
    <PageWrapper>
      <section className="w-full max-w-[900px] mx-auto px-6 py-16">
        {/* TITLE */}
        <h1 className="text-center text-red-600 text-3xl sm:text-4xl font-semibold mb-12">
          Cookie Policy
        </h1>

        <div className="space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Dermalyze uses cookies and similar
              technologies when you visit or use our website and AI-powered skin
              analysis services. By continuing to use Dermalyze, you consent to
              the use of cookies as described in this policy.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">2. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help websites function properly, remember user
              preferences, and collect information about how the site is used.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              3. Types of Cookies We Use
            </h2>

            <div className="space-y-4 mt-3">
              <div>
                <p className="font-medium">Essential Cookies</p>
                <p>
                  These cookies are necessary for the website to function
                  correctly, including enabling core features such as page
                  navigation, session management, and secure access to the
                  service.
                </p>
              </div>

              <div>
                <p className="font-medium">Analytics Cookies</p>
                <p>
                  These cookies help us understand how users interact with the
                  Dermalyze website by collecting anonymized usage data. This
                  information is used to improve website performance and user
                  experience.
                </p>
              </div>

              <div>
                <p className="font-medium">Affiliate Cookies</p>
                <p>
                  Dermalyze may use affiliate cookies to track referrals when
                  users click on recommended skincare product links. These
                  cookies allow us to receive a commission if a purchase is made
                  through such links and do not affect the analysis results or
                  product pricing.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              4. How We Use Cookie Information
            </h2>
            <p>
              Information collected through cookies is used to operate and
              improve our services, analyze website traffic, enhance
              functionality, and support product recommendation features.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              5. Third-Party Cookies
            </h2>
            <p>
              Some cookies may be placed by third-party service providers that
              support analytics, hosting, or affiliate tracking. These third
              parties process data in accordance with their own privacy
              policies.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">6. Managing Cookies</h2>
            <p>
              You can control or disable cookies through your browser settings.
              Please note that disabling certain cookies may affect the
              functionality and performance of the Dermalyze website.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              7. Changes to This Cookie Policy
            </h2>
            <p>
              Dermalyze may update this Cookie Policy from time to time. Any
              changes will be posted on this page with an updated effective
              date.
            </p>
          </div>
        </div>

        {/* OPTIONAL LEGIT TOUCH */}
        <p className="text-xs text-gray-400 mt-10 text-center">
          Last updated: April 2026
        </p>
      </section>

      <FAQ />
    </PageWrapper>
  );
}

export default Cookies;
