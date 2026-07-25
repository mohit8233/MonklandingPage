import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import { auth } from "../../firebase/firebase";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { toast } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // ============================
  // Email Login
  // ============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      toast.success(
        `Welcome ${userCredential.user.email}`
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // Google Login
  // ============================

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      toast.success("Google Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to manage your projects and client dashboard."
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .5,
        }}
        className="space-y-6"
      >
        <div>

  <label className="mb-2 block text-sm font-medium">

    Email Address

  </label>

  <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">

    <Mail
      size={18}
      className="text-slate-400"
    />

    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className="w-full bg-transparent px-3 py-4 outline-none"
    />

  </div>

</div>
<div>

<label className="mb-2 block text-sm font-medium">

Password

</label>

<div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F855A] focus-within:ring-2 focus-within:ring-[#65C18C]/30">

<Lock
size={18}
className="text-slate-400"
/>

<input
type={showPassword ? "text":"password"}
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full bg-transparent px-3 py-4 outline-none"
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
>

{showPassword ? (
<EyeOff size={18}/>
):(
<Eye size={18}/>
)}

</button>

</div>

</div>
        {/* Remember + Forgot */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-slate-600">

            <input
              type="checkbox"
              className="h-4 w-4 rounded accent-[#2F855A]"
            />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-[#2F855A] transition hover:text-[#256B48]"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login Button */}

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

              Signing In...

            </>
          ) : (
            <>
              Login

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

        {/* Google Login */}

        <button
          type="button"
          onClick={handleGoogleLogin}
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

        {/* Register */}

        <div className="pt-2 text-center">

          <p className="text-sm text-slate-500">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 font-semibold text-[#2F855A] transition hover:text-[#256B48]"
            >
              Create Account
            </Link>

          </p>

        </div>

      </motion.form>

    </AuthLayout>

  );

}