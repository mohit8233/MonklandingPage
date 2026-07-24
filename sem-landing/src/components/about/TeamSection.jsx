import { motion } from "framer-motion";
import {
 
  Mail,
  Globe,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    about:
      "Driving business growth through innovation and digital transformation.",
  },
  {
    name: "Emma Wilson",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    about:
      "Creating premium brand experiences with modern UI & UX.",
  },
  {
    name: "Daniel Carter",
    role: "SEO Strategist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    about:
      "Helping brands dominate search engines with data-driven SEO.",
  },
  {
    name: "Sophia Taylor",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    about:
      "Building scalable, high-performance websites and applications.",
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFA] py-20 sm:py-24 lg:py-32">

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#2F855A]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 min-[270px]:px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-[#65C18C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2F855A]">

            Our Team

          </span>

          <h2 className="mt-6 text-3xl font-bold text-[#1F2937] min-[270px]:text-[30px] sm:text-4xl lg:text-5xl">

            Meet The People Behind
            <span className="text-[#2F855A]">

              {" "}Search Engine Monks

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">

            Passionate designers, developers, marketers and strategists
            working together to deliver exceptional digital experiences.

          </p>

        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 min-[520px]:grid-cols-2 xl:grid-cols-4">
                      {team.slice(0, 2).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[30px] border border-[#65C18C]/20 bg-white p-6 shadow-lg transition-all duration-500 hover:border-[#65C18C] hover:shadow-2xl"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#65C18C]/0 via-[#65C18C]/0 to-[#65C18C]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Image */}

              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-[#65C18C]/20">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Name */}

              <h3 className="mt-6 text-center text-2xl font-bold text-[#1F2937]">

                {member.name}

              </h3>

              {/* Role */}

              <p className="mt-2 text-center font-medium text-[#2F855A]">

                {member.role}

              </p>

              {/* Bio */}

              <p className="mx-auto mt-4 max-w-xs text-center text-sm leading-7 text-gray-600">

                {member.about}

              </p>

              {/* Social */}

              <div className="mt-6 flex justify-center gap-4">

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#65C18C]/10 text-[#2F855A] transition duration-300 hover:bg-[#2F855A] hover:text-white"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#65C18C]/10 text-[#2F855A] transition duration-300 hover:bg-[#2F855A] hover:text-white"
                >
                  <Mail size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#65C18C]/10 text-[#2F855A] transition duration-300 hover:bg-[#2F855A] hover:text-white"
                >
                  <Globe size={18} />
                </a>

              </div>

              {/* Bottom Accent */}

              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#65C18C] transition-all duration-500 group-hover:w-28" />

              {/* Decorative Blur */}

              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#65C18C]/10 blur-3xl transition duration-500 group-hover:scale-125" />

            </motion.div>
          ))}
                    {team.slice(2, 4).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index + 2) * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-[#65C18C]/20 bg-white p-6 shadow-lg transition-all duration-500 hover:border-[#65C18C] hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#65C18C]/0 via-[#65C18C]/0 to-[#65C18C]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Image */}

              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-[#65C18C]/20">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Name */}

              <h3 className="mt-6 text-center text-2xl font-bold text-[#1F2937]">

                {member.name}

              </h3>

              {/* Role */}

              <p className="mt-2 text-center font-medium text-[#2F855A]">

                {member.role}

              </p>

              {/* Bio */}

              <p className="mx-auto mt-4 max-w-xs text-center text-sm leading-7 text-gray-600">

                {member.about}

              </p>

              {/* Social Icons */}

              <div className="mt-6 flex justify-center gap-4">

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#65C18C]/10 text-[#2F855A] transition-all duration-300 hover:bg-[#2F855A] hover:text-white"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#65C18C]/10 text-[#2F855A] transition-all duration-300 hover:bg-[#2F855A] hover:text-white"
                >
                  <Mail size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#65C18C]/10 text-[#2F855A] transition-all duration-300 hover:bg-[#2F855A] hover:text-white"
                >
                  <Globe size={18} />
                </a>

              </div>

              {/* Accent */}

              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#65C18C] transition-all duration-500 group-hover:w-28" />

              {/* Blur */}

              <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-[#65C18C]/10 blur-3xl transition duration-500 group-hover:scale-125" />

            </motion.div>
          ))}
                  </div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-[#65C18C]/20 bg-white p-8 shadow-xl">

            {/* Glow */}
            <div className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#65C18C]/10 blur-3xl"></div>

            <div className="absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#2F855A]/10 blur-3xl"></div>

            <div className="relative text-center">

              <h3 className="text-2xl font-bold text-[#1F2937] sm:text-3xl">

                Together We Build Digital Success

              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">

                Our team combines creativity, strategy, technology, and
                innovation to help businesses grow faster with measurable
                digital results.

              </p>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Decorative Elements */}

      <div className="pointer-events-none absolute left-10 top-32 hidden h-4 w-4 rounded-full bg-[#65C18C]/30 lg:block"></div>

      <div className="pointer-events-none absolute right-12 bottom-20 hidden h-5 w-5 rounded-full bg-[#2F855A]/20 lg:block"></div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#65C18C]/10 blur-[100px]"></div>

      <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-[#2F855A]/5 blur-[120px]"></div>

    </section>
  );
}

