import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.svg"; 
function LoadingScreen({ onFinish }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        onFinish();
                    }, 300);

                    return 100;
                }

                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7FBF8]"
        >
            <div className="w-full max-w-sm px-8 text-center">
                {/* Logo */}

                <motion.img
                    src={logo}
                    alt="Logo"
                    className="mx-auto w-40 sm:w-48 md:w-56 lg:w-64"
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                />

                {/* Title */}

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-2xl font-bold text-[#3D3B3B]"
                >
                    Search Engine Monks
                </motion.h2>

                <p className="mt-2 text-gray-500">
                    Loading amazing experiences...
                </p>

                {/* Progress Bar */}

                <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#D9E5DE]">
                    <motion.div
                        className="h-full rounded-full bg-[#65C18C]"
                        animate={{
                            width: `${progress}%`,
                        }}
                    />
                </div>

                <p className="mt-3 text-sm font-semibold text-[#65C18C]">
                    {progress}%
                </p>
            </div>
        </motion.div>
    );
}

export default LoadingScreen;