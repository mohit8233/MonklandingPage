import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaArrowUp,
} from "react-icons/fa";
import logo from '../../assets/logo/logo.svg'
function Footer() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#3D3B3B] text-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company */}
                    <div>
                        <a href="#home" className="inline-block">
                            <img
                                src={logo}
                                alt="Search Engine Monks"
                                className="h-14 md:h-16 w-auto object-contain "
                            />
                        </a>

                        <p className="mt-6 leading-8 text-gray-300">
                            We help businesses grow through SEO, Web Development,
                            Branding, AI Solutions and Digital Marketing.
                        </p>

                        <div className="mt-8 flex gap-4">
                            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                                (Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4B4B4B] text-white transition hover:bg-[#2F855A]"
                                    >
                                        <Icon />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-2xl font-bold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <a href="#home" className="hover:text-[#65C18C]">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#services" className="hover:text-[#65C18C]">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#portfolio" className="hover:text-[#65C18C]">
                                    Portfolio
                                </a>
                            </li>

                            <li>
                                <a href="#about" className="hover:text-[#65C18C]">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="hover:text-[#65C18C]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-2xl font-bold text-white">
                            Services
                        </h3>

                        <ul className="space-y-4 text-gray-300">
                            <li>SEO Optimization</li>
                            <li>Web Development</li>
                            <li>Branding</li>
                            <li>Digital Marketing</li>
                            <li>AI Automation</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-6 text-2xl font-bold text-white">
                            Newsletter
                        </h3>

                        <p className="mb-6 text-gray-300">
                            Subscribe to receive the latest updates and marketing tips.
                        </p>

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded-xl border border-gray-500 bg-[#4B4B4B] px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:border-[#65C18C]"
                        />

                        <button className="mt-4 w-full rounded-xl bg-[#2F855A] py-3 font-semibold text-white transition hover:bg-[#276749]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}

            <div className="border-t border-gray-600">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-gray-400 md:flex-row">
                    <p>© 2026 Search Engine Monks. All Rights Reserved.</p>

                    <button
                        onClick={scrollTop}
                        className="rounded-full bg-[#2F855A] p-4 text-white transition hover:scale-110"
                    >
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;