import { motion } from "framer-motion";
import { useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050505]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {/* Background */}

      <div className="absolute inset-0 bg-black" />

      {/* Aurora 1 */}

      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[420px] w-[420px] rounded-full bg-[#65C18C]/15 blur-[90px]
                   sm:h-[650px] sm:w-[650px] sm:blur-[120px]
                   lg:h-[900px] lg:w-[900px] lg:blur-[160px]
                   xl:h-[1100px] xl:w-[1100px] xl:blur-[180px]"
      />

      {/* Aurora 2 */}

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full bg-emerald-400/10 blur-[80px]
                   sm:h-[520px] sm:w-[520px] sm:blur-[110px]
                   lg:h-[720px] lg:w-[720px] lg:blur-[140px]
                   xl:h-[900px] xl:w-[900px] xl:blur-[160px]"
      />

      {/* Spotlight */}

      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-1/2 top-[-70px] h-[170px] w-[320px] -translate-x-1/2 bg-[#65C18C]/20 blur-[70px]
                   sm:top-[-90px] sm:h-[240px] sm:w-[450px]
                   lg:top-[-120px] lg:h-[320px] lg:w-[650px]
                   xl:h-[350px] xl:w-[700px]"
      />

      {/* Grid */}

      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:35px_35px] sm:bg-[size:45px_45px] lg:bg-[size:60px_60px]" />

      {/* Floating Glow */}

      <motion.div
        animate={{
          y: [-25, 25, -25],
          x: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute h-[260px] w-[260px] rounded-full bg-[#65C18C]/20 blur-[70px]
                   sm:h-[420px] sm:w-[420px] sm:blur-[90px]
                   lg:h-[520px] lg:w-[520px] lg:blur-[110px]
                   xl:h-[600px] xl:w-[600px] xl:blur-[120px]"
      />

      {/* Main Content */}

<div className="relative z-20 flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:py-24">
        {/* Brand */}

        <motion.p
          initial={{
            opacity: 0,
            y: -25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="mb-6 mt-8 text-[9px] uppercase tracking-[5px] text-[#65C18C]
           min-[320px]:mt-10 min-[320px]:text-[10px]
           sm:mb-8 sm:mt-12 sm:text-xs sm:tracking-[8px]
           lg:mb-8 lg:mt-10 lg:text-sm lg:tracking-[12px]"
        >
          Search Engine Monks
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.8,
            filter: "blur(25px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="relative text-center font-black uppercase leading-[0.95] tracking-tight text-white
                     text-[34px]
                     min-[320px]:text-[42px]
                     sm:text-6xl
                     md:text-7xl
                     lg:text-[100px]
                     xl:text-[140px]"
        >
          GROW

          <br />

          YOUR BUSINESS

          {/* Light Sweep */}

          <motion.div
            animate={{
              x: [-500, 500],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl"
          />
        </motion.h1>
                {/* Animated Line */}

        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: "100%",
          }}
          transition={{
            delay: 0.8,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="mt-6 h-[3px] w-full max-w-[180px] rounded-full bg-gradient-to-r from-[#65C18C] via-white to-[#65C18C] shadow-[0_0_25px_rgba(101,193,140,0.8)]
                     min-[320px]:max-w-[220px]
                     sm:mt-8 sm:h-[4px] sm:max-w-[280px]
                     md:max-w-[320px]
                     lg:mt-10 lg:max-w-[380px]"
        />

        {/* Services */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 uppercase text-zinc-400
                     text-[10px] tracking-[2px]
                     min-[320px]:text-[11px]
                     sm:mt-8 sm:gap-x-4 sm:text-xs sm:tracking-[4px]
                     md:text-sm
                     lg:mt-10 lg:gap-x-5 lg:text-base lg:tracking-[6px]"
        >
          <span>SEO</span>

          <span className="text-[#65C18C]">•</span>

          <span>WEB DEVELOPMENT</span>

          <span className="text-[#65C18C]">•</span>

          <span>AI SOLUTIONS</span>

          <span className="text-[#65C18C]">•</span>

          <span>DIGITAL MARKETING</span>
        </motion.div>

        {/* Loading */}

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center uppercase
                     text-[10px] tracking-[2px] text-[#d4d4d4]
                     min-[320px]:text-[11px]
                     sm:mt-12 sm:gap-4 sm:text-xs sm:tracking-[3px]
                     md:text-sm
                     lg:mt-14 lg:text-base lg:tracking-[5px]"
        >

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center uppercase
           text-[10px] tracking-[2px] text-[#d4d4d4]
           min-[320px]:text-[11px]
           sm:mt-8 sm:gap-4 sm:text-xs sm:tracking-[3px]
           md:mt-9 md:text-sm
           lg:mt-10 lg:text-base lg:tracking-[5px]
           xl:mt-12"
          />

          <span className="leading-relaxed">
            Initializing Experience...
          </span>

        </motion.div>

      </div>
            {/* Bottom Marquee */}

      <div className="pointer-events-none absolute bottom-4 left-0 w-full overflow-hidden sm:bottom-6 lg:bottom-8">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className="whitespace-nowrap font-black uppercase text-white/5
                     text-xl
                     min-[320px]:text-2xl
                     sm:text-4xl
                     md:text-5xl
                     lg:text-6xl
                     xl:text-[70px]"
        >
          SEO • WEB DEVELOPMENT • AI SOLUTIONS • BRANDING •
          GOOGLE ADS • META ADS • SEO • WEB DEVELOPMENT •
          AI SOLUTIONS • BRANDING • GOOGLE ADS • META ADS •
        </motion.div>

      </div>

      {/* Corner Glow */}

      <div
        className="absolute left-0 top-0
                   h-24 w-24
                   rounded-full
                   bg-[#65C18C]/20
                   blur-[60px]
                   sm:h-32 sm:w-32 sm:blur-[80px]
                   lg:h-40 lg:w-40 lg:blur-[100px]"
      />

      <div
        className="absolute bottom-0 right-0
                   h-32 w-32
                   rounded-full
                   bg-[#65C18C]/20
                   blur-[70px]
                   sm:h-40 sm:w-40 sm:blur-[90px]
                   lg:h-52 lg:w-52 lg:blur-[120px]"
      />

    </motion.div>
  );
}