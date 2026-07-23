import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "../../assets/logo/logo.svg";
import Button from "../../components/ui/Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scroll ? "bg-white py-3 shadow-lg" : "bg-white py-4"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Search Engine Monks"
            className="h-12"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${isActive
                ? "text-[#65C18C]"
                : "text-[#3D3B3B] hover:text-[#65C18C]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${isActive
                ? "text-[#65C18C]"
                : "text-[#3D3B3B] hover:text-[#65C18C]"
              }`
            }
          >
            Services
          </NavLink>

          <a
            href="#portfolio"
            className="font-medium text-[#3D3B3B] transition-colors duration-300 hover:text-[#65C18C]"
          >
            Portfolio
          </a>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${isActive
                ? "text-[#65C18C]"
                : "text-[#3D3B3B] hover:text-[#65C18C]"
              }`
            }
          >
            About
          </NavLink>

          <a
            href="#contact"
            className="font-medium text-[#3D3B3B] transition-colors duration-300 hover:text-[#65C18C]"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button>Book Free Consultation</Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col px-5 py-5">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b py-4 ${isActive
                  ? "text-[#65C18C]"
                  : "text-[#3D3B3B]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b py-4 ${isActive
                  ? "text-[#65C18C]"
                  : "text-[#3D3B3B]"
                }`
              }
            >
              Services
            </NavLink>

            <a
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="border-b py-4 text-[#3D3B3B]"
            >
              Portfolio
            </a>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b py-4 ${isActive
                  ? "text-[#65C18C]"
                  : "text-[#3D3B3B]"
                }`
              }
            >
              About
            </NavLink>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="border-b py-4 text-[#3D3B3B]"
            >
              Contact
            </a>

            <Button className="mt-5 w-full">
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;