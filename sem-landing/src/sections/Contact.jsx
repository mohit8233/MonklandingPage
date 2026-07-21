import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Button from "../components/ui/Button";

function Contact() {

    const form = useRef();

    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                "service_ct3tgk2",
                "template_uts4b4n",
                form.current,
                "RJZAjPIN6Mw_xKrte"
            )

            .then(() => {

                toast.success("Message sent successfully! 🎉");

                form.current.reset();

                setLoading(false);

            })

            .catch((error) => {

                console.log(error);

                toast.error("Failed to send message. Please try again.");

                setLoading(false);

            });


    };

    return (

        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-b from-[#F4F8F6] via-white to-[#F4F8F6] py-16 md:py-20 lg:py-24"
        >
            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#BCD0C5]/40 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
                >

                    <span className="inline-flex items-center rounded-full bg-[#EAF5EF] px-5 py-2 text-sm font-semibold tracking-wide text-[#3D3B3B]">
                        CONTACT US
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-[#3D3B3B] sm:text-4xl lg:text-5xl">
                        Let's Start Your
                        <span className="block">
                            Next Project
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        Ready to grow your business? Fill out the form and our experts
                        will contact you shortly.
                    </p>

                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-[#555555] p-6 text-white sm:p-8 lg:p-10"
                    >

                        <h3 className="text-2xl font-bold sm:text-3xl">
                            Contact Information
                        </h3>

                        <p className="mt-4 leading-7 text-gray-300">
                            We'd love to hear about your project.
                            Reach out through any of the methods below.
                        </p>

                        <div className="mt-8 space-y-6">

                            <div className="flex items-start gap-4">

                                <div className="rounded-xl bg-white/10 p-3">
                                    <FaEnvelope size={20} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="break-all text-gray-300">
                                        hello@searchenginemonks.com
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="rounded-xl bg-white/10 p-3">
                                    <FaPhoneAlt size={20} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p className="text-gray-300">
                                        +91 98765 43210
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="rounded-xl bg-white/10 p-3">
                                    <FaMapMarkerAlt size={20} />
                                </div>

                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-gray-300">
                                        Ahmedabad, Gujarat, India
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:p-10"
                    >

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#65C18C]"
                            />

                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email Address"
                                required
                                className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#65C18C]"
                            />

                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="mt-5 w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#65C18C]"
                        />

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Your Message"
                            required
                            className="mt-5 w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#65C18C]"
                        />

                        <Button
                            type="submit"
                            disabled={loading}
                            showArrow={false}
                            className="mt-6 w-full bg-[#BCD0C5] text-[#555555] hover:bg-[#a9c3b4]"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </Button>

                    </motion.form>

                </div>

            </div>

        </section>

    );
}

export default Contact;