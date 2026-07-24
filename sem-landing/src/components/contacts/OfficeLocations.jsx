import { motion } from "framer-motion";
import {
    MapPin,
    ArrowUpRight,
    Building2,
} from "lucide-react";
import Button from "../ui/Button";
const offices = [
    {
        id: 1,
        country: "Canada",
        city: "Edmonton",
        title: "Canada Office",
        address:
            "655 Tamarack Road, North West, Edmonton, Alberta, Canada.",
        map:
            "https://maps.google.com/?q=655+Tamarack+Road+North+West+Edmonton+Alberta+Canada",
        iframe:
            "https://www.google.com/maps?q=655+Tamarack+Road+North+West+Edmonton+Alberta+Canada&output=embed",
        color: "from-emerald-500 to-green-600",
    },
    {
        id: 2,
        country: "India",
        city: "Ahmedabad",
        title: "India Office",
        address:
            "C-254, South Bopal Center, Bopal, Ambli Road, Ahmedabad, India.",
        map:
            "https://maps.google.com/?q=C-254+South+Bopal+Center+Bopal+Ambli+Road+Ahmedabad+India",
        iframe:
            "https://www.google.com/maps?q=C-254+South+Bopal+Center+Bopal+Ambli+Road+Ahmedabad+India&output=embed",
        color: "from-sky-500 to-cyan-500",
    },
];

export default function OfficeLocations() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">

            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-[140px]" />

            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                        Our Offices
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">

                        Visit Our

                        <span className="block text-emerald-600">
                            Global Locations
                        </span>

                    </h2>

                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">

                        Meet our team at our offices in Canada and India.
                        We're always available to discuss your business,
                        digital marketing strategy, or your next web project.

                    </p>

                </motion.div>

                {/* Office Cards */}

                <div className="space-y-12">

                    {offices.map((office, index) => (

                        <motion.div
                            key={office.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .6,
                                delay: index * .15,
                            }}
                            className="grid overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl lg:grid-cols-2"
                        >

                            {/* Left */}

                            <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                                <div
                                    className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${office.color} text-white shadow-xl`}
                                >

                                    <Building2 size={38} />

                                </div>

                                <span className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">

                                    {office.country}

                                </span>

                              <h3 className="mt-5 text-2xl lg:text-3xl font-black text-slate-900">
  {office.title}
</h3>

                                <div className="mt-8 flex items-start gap-4">

                                    <MapPin
                                        size={22}
                                        className="mt-1 shrink-0 text-emerald-600"
                                    />

                                    <p className="leading-8 text-slate-600">

                                        {office.address}

                                    </p>

                                </div>
                                {/* Action Buttons */}

                               <div className="mt-10 flex flex-col items-start gap-4">

  {/* Google Maps Button */}
  <a
    href={office.map}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl sm:w-auto"
  >
    View Maps

    <ArrowUpRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </a>

  {/* Office Timing */}
  <div className="inline-flex w-full items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-center text-sm font-medium text-emerald-700 sm:w-auto">
    Monday – Saturday
  </div>

</div>

                            </div>

                            {/* Right Side - Map */}

                            <div className="relative min-h-[320px] overflow-hidden bg-slate-100 lg:min-h-full">

                                <iframe
                                    src={office.iframe}
                                    title={office.title}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 h-full w-full border-0 transition duration-500 hover:scale-[1.02]"
                                    allowFullScreen
                                />

                                {/* Gradient Overlay */}

                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

                                {/* Floating Label */}

                                <div className="absolute left-6 top-6 rounded-2xl border border-white/30 bg-white/90 px-5 py-3 shadow-xl backdrop-blur">

                                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">

                                        {office.city}

                                    </p>

                                    <h4 className="mt-1 text-lg font-bold text-slate-900">

                                        {office.country}

                                    </h4>

                                </div>

                            </div>

                        </motion.div>

                    ))}
                </div>

                {/* Bottom CTA */}

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20"
                >
                    <div className="relative overflow-hidden rounded-[40px] border border-emerald-100 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 px-8 py-12 text-white shadow-[0_30px_80px_rgba(16,185,129,.25)] sm:px-12 lg:px-16">

                        {/* Background Glow */}

                        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

                            <div className="max-w-2xl text-center lg:text-left">

                                <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur">
                                    Let's Build Together
                                </span>

                                <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                                    Visit Our Office or Let's Connect Online
                                </h3>

                                <p className="mt-5 text-base leading-8 text-emerald-50">
                                    Whether you're in Canada or India, our team is always
                                    ready to help you with SEO, Web Development, Branding,
                                    AI Solutions, and Digital Marketing.
                                </p>

                            </div>

                            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center">

                                <Button
                                    variant="white"
                                    onClick={() => {
                                        document
                                            .getElementById("contact")
                                            ?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="w-full sm:w-auto rounded-full px-8 py-4"
                                >
                                    Get Free Consultation
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        window.location.href = "mailto:hello@searchenginemonks.com";
                                    }}
                                    className="w-full rounded-full border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-emerald-700 sm:w-auto"
                                >
                                    Email Our Team
                                </Button>

                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
