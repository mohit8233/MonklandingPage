import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { toast } from "react-toastify";

import AuthLayout from "../../components/auth/AuthLayout";
import { useAuth } from "../../context/AuthContext";

export default function ForgotPassword() {
  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter your email.");
    }

    try {
      setLoading(true);

      await forgotPassword(email);

      toast.success(
        "Password reset link has been sent to your email."
      );

      setEmail("");
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "auth/user-not-found":
          toast.error("No account found with this email.");
          break;

        case "auth/invalid-email":
          toast.error("Please enter a valid email.");
          break;

        case "auth/too-many-requests":
          toast.error("Too many requests. Please try again later.");
          break;

        default:
          toast.error("Failed to send reset email.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email address and we'll send you a password reset link."
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <div className="flex items-center rounded-xl border border-slate-200 px-4 focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">
            <Mail
              size={18}
              className="text-slate-400"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />
          </div>
        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F855A] py-4 font-semibold text-white transition hover:bg-[#256B48] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Reset Link"}

          <Send
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </button>

        {/* Back */}

        <Link
          to="/login"
          className="flex items-center justify-center gap-2 text-sm font-medium text-[#2F855A] hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </motion.form>
    </AuthLayout>
  );
}