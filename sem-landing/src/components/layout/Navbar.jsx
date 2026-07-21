import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../../assets/logo/Logo.svg'
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scroll
          ? "bg-white shadow-lg py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-2">

          <img
            src={Logo}
            alt="Search Engine Monks"
            className="h-12"
          />

        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-[#555555]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-green-200 px-7 py-3 font-semibold text-black transition hover:bg-[#276749]"
          >
            Book Free Consultation
          </a>
        </div>

        {/* Mobile */}

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

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-gray-700"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-5 rounded-full bg-[#555555] py-3 text-center font-semibold text-black"
            >
            Book Free Consultation
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;