import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#2f2f2f] text-gray-300 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-12 sm:py-16 flex flex-col lg:flex-row gap-12 lg:justify-between">
        {/* LEFT */}
        <div className="max-w-sm text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="text-2xl text-white font-semibold mb-4">Dermalyze</h2>

          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            Dermalyze was created with the belief that everyone deserves to
            understand their skin without confusion or guesswork.
          </p>

          <button
            onClick={() => {
              navigate("/about");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border border-gray-400 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black hover:scale-105 transition cursor-pointer"
          >
            Learn More
          </button>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 text-center sm:text-left">
          <div>
            <h3 className="text-white font-semibold mb-3">Expert Advice</h3>
            <p
              onClick={() => {
                navigate("/skincare");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block text-gray-400 hover:text-white transition cursor-pointer"
            >
              Skincare Tips
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Privacy</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p
                onClick={() => {
                  navigate("/terms");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-white transition cursor-pointer"
              >
                Terms and Conditions
              </p>

              <p
                onClick={() => {
                  navigate("/privacy");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-white transition cursor-pointer"
              >
                Privacy Policy
              </p>

              <p
                onClick={() => {
                  navigate("/cookies");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-white transition cursor-pointer"
              >
                Cookie Policy
              </p>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-row lg:flex-col justify-center items-center gap-4">
          <div
            onClick={() =>
              window.open("https://instagram.com/gisellayusmita", "_blank")
            }
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black cursor-pointer"
          >
            <i className="fab fa-instagram"></i>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://id.linkedin.com/in/joanne-gisella-yusmita-5b5b59382",
                "_blank",
              )
            }
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black cursor-pointer"
          >
            <i className="fab fa-linkedin-in"></i>
          </div>

          <div
            onClick={() =>
              window.open("https://www.youtube.com/@selvenchi", "_blank")
            }
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black cursor-pointer"
          >
            <i className="fab fa-youtube"></i>
          </div>

          {/* <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black cursor-pointer">
            <i className="fab fa-facebook-f"></i>
          </div> */}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-xs sm:text-sm pb-6 px-4">
        2026 © Dermalyze. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
