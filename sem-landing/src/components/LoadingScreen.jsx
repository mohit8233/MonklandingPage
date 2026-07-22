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
            className="fixed inset-0 z-[99999] overflow-hidden bg-[#050505] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
            }}
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
                className="absolute w-[1100px] h-[1100px] rounded-full bg-[#65C18C]/15 blur-[180px]"
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
                className="absolute w-[900px] h-[900px] rounded-full bg-emerald-400/10 blur-[160px]"
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
                className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#65C18C]/20 blur-[160px]"
            />

            {/* Grid */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Floating Glow */}
            <motion.div
                animate={{
                    y: [-40, 40, -40],
                    x: [-20, 20, -20],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
                className="absolute w-[600px] h-[600px] rounded-full bg-[#65C18C]/20 blur-[120px]"
            />

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center">

                {/* Small Text */}
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
                    className="mb-8 text-xs md:text-sm tracking-[12px] uppercase text-[#65C18C]"
                >
                    Search Engine Monks
                </motion.p>

                {/* Main Heading */}
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
                    className="relative text-center text-6xl md:text-[140px] font-black uppercase text-white leading-none tracking-tight"
                >
                    GROW

                    <br />

                    YOUR BUSINESS

                    {/* Light Sweep */}
                    <motion.div
                        animate={{
                            x: [-600, 600],
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
                    animate={{ width: "320px" }}
                    transition={{
                        delay: 0.8,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    className="mt-8 h-[4px] rounded-full bg-gradient-to-r from-[#65C18C] via-white to-[#65C18C] shadow-[0_0_35px_rgba(101,193,140,0.8)]"
                />

                {/* Services */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1,
                        duration: 1,
                    }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm md:text-base uppercase tracking-[6px] text-zinc-400"
                >
                    <span>SEO</span>

                    <span className="text-[#65C18C]">•</span>

                    <span>WEB</span>

                    <span className="text-[#65C18C]">•</span>

                    <span>AI</span>

                    <span className="text-[#65C18C]">•</span>

                    <span>MARKETING</span>
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
                    className="mt-14 flex items-center gap-4 text-[#d4d4d4] tracking-[5px] uppercase"
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
                        className="h-5 w-5 rounded-full border-2 border-[#65C18C] border-t-transparent"
                    />

                    <span>Initializing Experience...</span>
                </motion.div>
            </div>

            {/* Bottom Marquee */}
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                }}
                className="absolute bottom-8 whitespace-nowrap text-[40px] md:text-[70px] font-black uppercase text-white/5"
            >
                SEO • WEB DEVELOPMENT • AI SOLUTIONS • BRANDING • GOOGLE ADS • META ADS •
                SEO • WEB DEVELOPMENT • AI SOLUTIONS • BRANDING • GOOGLE ADS • META ADS •
            </motion.div>

            {/* Corner Glow */}
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#65C18C]/20 blur-[100px]" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#65C18C]/20 blur-[120px]" />
        </motion.div>
    );
}