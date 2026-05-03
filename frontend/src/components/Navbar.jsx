import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "./Button";
import NavItem from "./NavItem";

import Logo from "../assets/logoDermalyze.webp";
import Sparkle from "../assets/sparkle.svg";
import User from "../assets/user.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-8 md:py-6">
        {/* LOGO */}

        <img
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          src={Logo}
          className="w-28 sm:w-32 md:w-36 cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6">
          <NavItem
            className="block transition"
            onClick={() => {
              navigate("/about");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            About
          </NavItem>
          <NavItem
            className="block transition"
            onClick={() => {
              navigate("/skincare");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Tips
          </NavItem>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">
          <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-md">
            <img
              onClick={() => {
                navigate("/login");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              src={User}
              className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
            />
          </button>

          <Button
            icon={Sparkle}
            onClick={() => {
              navigate("/scanpage");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-5 py-2 flex items-center justify-center transition"
          >
            Start Analysis
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl cursor-pointer"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t pt-6">
          <NavItem>
            <Link to="/about" className="block transition">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/skincare" className="block transition">
              Tips
            </Link>
          </NavItem>

          <div className="flex items-center gap-4 mt-2">
            <button className="w-12 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-md">
              <img src={User} className="w-5 h-5" />
            </button>

            <Button icon={Sparkle} className="w-full">
              Start Analysis
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
