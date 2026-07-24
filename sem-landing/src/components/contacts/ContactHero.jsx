import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  User,
  Mail,
  Phone,
  Building2,
  ClipboardPen,
  ShieldCheck,
  Zap,
  Headphones,
  ChevronDown,
} from "lucide-react";

import Button from "../ui/Button";

const services = [
  "SEO Services",
  "Web Development",
  "AI Solutions",
  "Google Ads",
  "Social Media Marketing",
  "Branding",
  "Other",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactHero() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

        try {
      setLoading(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      setFormData(initialState);
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FCF8] to-white py-16 min-[350px]:py-20 lg:py-28">

      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-[120px]" />

      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-green-200/30 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-3 min-[350px]:px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 min-[350px]:text-sm">

              LET'S CONNECT

            </span>

            <h1 className="mt-6 text-3xl font-black leading-tight text-slate-900 min-[350px]:text-4xl sm:text-5xl lg:text-6xl">

              Let's Build Something

              <span className="block text-emerald-600">

                Amazing Together

              </span>

            </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">

              Whether you need SEO, Website Development, Branding,
              AI Solutions or Digital Marketing, our experts are
              ready to help you achieve measurable business growth.

            </p>

            {/* Features */}

            <div className="mt-10 space-y-4">

              {[
                {
                  icon: Zap,
                  title: "Quick Response",
                  desc: "Average response time under 24 hours.",
                },
                {
                  icon: ShieldCheck,
                  title: "100% Confidential",
                  desc: "Your business information stays secure.",
                },
                {
                  icon: Headphones,
                  title: "Dedicated Support",
                  desc: "Talk directly with our experienced team.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: .6,
                    }}
                    className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">

                      <Icon size={24} />

                    </div>

                    <div>

                      <h3 className="font-bold text-slate-900">

                        {item.title}

                      </h3>

                      <p className="mt-1 text-sm text-slate-500">

                        {item.desc}

                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_25px_80px_rgba(16,185,129,.08)] min-[350px]:p-6 lg:p-8"
          >

            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">

              Send us a Message

            </h2>

            <div className="mt-2 h-1 w-16 rounded-full bg-emerald-600" />

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
                              {/* Name & Email */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="relative">

                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />

                </div>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />

                </div>

              </div>

              {/* Phone & Company */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="relative">

                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />

                </div>

                <div className="relative">

                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />

                </div>

              </div>

              {/* Service */}

              <div className="relative">

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-5 pr-12 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >

                  <option value="">Select Service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}

                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
                />

              </div>

              {/* Message */}

              <div className="relative">

                <ClipboardPen
                  size={18}
                  className="absolute left-4 top-5 text-slate-400"
                />

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />

              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full justify-center"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

            </form>

          </motion.div>

        </div>

      </div>

      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-green-200/20 blur-[140px]" />

    </section>
  );
}