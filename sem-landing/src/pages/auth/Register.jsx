import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
} from "lucide-react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { toast } from "react-hot-toast";
import { auth } from "../../firebase/firebase";
import AuthLayout from "../../components/auth/AuthLayout";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

      await updateProfile(userCredential.user, {
        displayName: formData.fullName,
      });

      toast.success("Account Created Successfully");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      toast.success("Google Sign Up Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Join Search Engine Monks and manage your projects from one place."
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="space-y-5"
      >
                {/* Full Name */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">

            <User
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>

          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">

            <Phone
              size={18}
              className="text-slate-400"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">

            <Mail
              size={18}
              className="text-slate-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">

            <Lock
              size={18}
              className="text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff
                  size={18}
                  className="text-slate-400"
                />
              ) : (
                <Eye
                  size={18}
                  className="text-slate-400"
                />
              )}
            </button>

          </div>

        </div>
                {/* Confirm Password */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Confirm Password
          </label>

          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">

            <Lock
              size={18}
              className="text-slate-400"
            />

            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full bg-transparent px-3 py-4 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
                <EyeOff
                  size={18}
                  className="text-slate-400"
                />
              ) : (
                <Eye
                  size={18}
                  className="text-slate-400"
                />
              )}
            </button>

          </div>

        </div>

        {/* Password Strength */}

        <div>

          <div className="mb-2 flex items-center justify-between text-sm">

            <span className="text-slate-500">
              Password Strength
            </span>

            <span className="font-medium text-[#2F855A]">
              {formData.password.length >= 8
                ? "Strong"
                : formData.password.length >= 6
                ? "Medium"
                : "Weak"}
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">

            <div
              className={`h-full rounded-full transition-all duration-500 ${
                formData.password.length >= 8
                  ? "w-full bg-green-500"
                  : formData.password.length >= 6
                  ? "w-2/3 bg-yellow-500"
                  : "w-1/3 bg-red-500"
              }`}
            />

          </div>

        </div>

        {/* Terms */}

        <label className="flex items-start gap-3 text-sm text-slate-600">

          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 accent-[#2F855A]"
          />

          <span>
            I agree to the{" "}

            <span className="cursor-pointer font-semibold text-[#2F855A] hover:underline">
              Terms & Conditions
            </span>

          </span>

        </label>

        {/* Register Button */}

        <button
          type="submit"
          disabled={loading}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#2F855A] to-[#3DA96D] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >

          {loading ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />

              Creating Account...
            </>
          ) : (
            <>
              Create Account

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </>
          )}

        </button>

        {/* Divider */}

        <div className="relative py-2">

          <div className="absolute inset-0 flex items-center">

            <div className="w-full border-t border-slate-200" />

          </div>

          <div className="relative flex justify-center">

            <span className="bg-white px-4 text-sm text-slate-500">
              OR
            </span>

          </div>

        </div>

        {/* Google Register */}

        <button
          type="button"
          onClick={handleGoogleRegister}
          disabled={loading}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-medium transition-all duration-300 hover:border-[#2F855A] hover:bg-[#F7FCF9]"
        >

          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />

          Continue with Google

        </button>

        {/* Login */}

        <div className="pt-2 text-center">

          <p className="text-sm text-slate-500">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 font-semibold text-[#2F855A] hover:text-[#256B48]"
            >
              Login
            </Link>

          </p>

        </div>
              </motion.form>
    </AuthLayout>
  );
}