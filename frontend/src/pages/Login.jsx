import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PageWrapper from "../components/PageWrapper";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // handle auth here
    navigate("/"); // redirect after login
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center px-4 ">
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8">
          {/* TITLE */}
          <h2 className="text-2xl font-semibold text-center mb-2">Sign in</h2>
          <p className="text-center text-gray-400 text-sm mb-6">
            Enter your details to continue
          </p>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* USERNAME */}
            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                placeholder="yourusername"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />

                {/* EYE ICON */}
                <i
                  className={`fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  } absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-medium 
            bg-gradient-to-r from-red-600 to-orange-400 
            hover:scale-[1.02] transition cursor-pointer"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Login;
