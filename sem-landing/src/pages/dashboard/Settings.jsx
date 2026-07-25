import { useEffect, useState } from "react";
import {
  UserCog,
  Lock,
  Bell,
  ShieldCheck,
  Save,
  Mail,
  Phone,
  Building2,
  MapPin,
  FileText,
  KeyRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export default function Settings() {
  const {
    currentUser,
    userData,
    updateUserProfile,
    changePassword,
    forgotPassword,
  } = useAuth();

  /* ---------------- Profile ---------------- */

  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    company: "",
    address: "",
    bio: "",
  });

  /* ---------------- Password ---------------- */

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* ---------------- Loading ---------------- */

  const [savingProfile, setSavingProfile] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  /* ---------------- Notification ---------------- */

  const [emailNotification, setEmailNotification] = useState(true);
  const [marketingNotification, setMarketingNotification] = useState(false);

  /* ---------------- Load User ---------------- */

  useEffect(() => {
    if (!userData) return;

    setProfile({
      name: userData.name || "",
      phone: userData.phone || "",
      company: userData.company || "",
      address: userData.address || "",
      bio: userData.bio || "",
    });
  }, [userData]);

  /* ---------------- Profile Change ---------------- */

  const handleProfileChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ---------------- Save Profile ---------------- */

  const handleSaveProfile = async () => {
    try {
      setSavingProfile(true);

      await updateUserProfile(profile);

      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSavingProfile(false);
    }
  };

  /* ---------------- Change Password ---------------- */

  const handlePasswordUpdate = async () => {
    if (!currentPassword)
      return toast.error("Current password required.");

    if (newPassword.length < 6)
      return toast.error("Password must be at least 6 characters.");

    if (newPassword !== confirmPassword)
      return toast.error("Passwords do not match.");

    try {
      setChangingPassword(true);

      await changePassword(currentPassword, newPassword);

      toast.success("Password updated successfully.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setChangingPassword(false);
    }
  };

  /* ---------------- Forgot Password ---------------- */

  const handleForgotPassword = async () => {
    try {
      await forgotPassword(currentUser.email);

      toast.success("Password reset link sent.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-4 p-2 sm:space-y-6 sm:p-4 lg:space-y-8 lg:p-6">

      {/* Page Heading */}

      <div className="space-y-2">

        <h1 className="break-words text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">
          Account Settings
        </h1>

        <p className="text-sm leading-6 text-slate-500 sm:text-base">
          Manage your personal information, password and notification
          preferences.
        </p>

      </div>
            {/* ===================================================== */}
      {/* Profile Information */}
      {/* ===================================================== */}

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5 lg:p-8">

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
            <UserCog className="h-7 w-7 text-emerald-600" />
          </div>

          <div className="min-w-0">
            <h2 className="break-words text-lg font-bold text-slate-800 sm:text-xl lg:text-2xl">
              Profile Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your personal information.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* Full Name */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <UserCog size={18} />
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Enter full name"
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Mail size={18} />
              Email
            </label>

            <input
              type="email"
              value={currentUser?.email || ""}
              readOnly
              className="w-full cursor-not-allowed rounded-xl bg-slate-100 px-3 py-3 text-sm"
            />

          </div>

          {/* Phone */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Phone size={18} />
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              placeholder="Phone number"
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

          {/* Company */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Building2 size={18} />
              Company
            </label>

            <input
              type="text"
              name="company"
              value={profile.company}
              onChange={handleProfileChange}
              placeholder="Company name"
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

          {/* Address */}

          <div className="lg:col-span-2">

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MapPin size={18} />
              Address
            </label>

            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleProfileChange}
              placeholder="Address"
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

          {/* Bio */}

          <div className="lg:col-span-2">

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FileText size={18} />
              Bio
            </label>

            <textarea
              rows={5}
              name="bio"
              value={profile.bio}
              onChange={handleProfileChange}
              placeholder="Tell us about yourself..."
              className="w-full resize-none rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

        </div>

        <div className="mt-6">

          <button
            onClick={handleSaveProfile}
            disabled={savingProfile}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <Save size={18} />

            {savingProfile ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </section>

      {/* ===================================================== */}
      {/* Security */}
      {/* ===================================================== */}

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5 lg:p-8">

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
            <Lock className="h-7 w-7 text-emerald-600" />
          </div>

          <div className="min-w-0">

            <h2 className="text-lg font-bold text-slate-800 sm:text-xl lg:text-2xl">
              Security
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your account password securely.
            </p>

          </div>

        </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* Current Password */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <KeyRound size={18} />
              Current Password
            </label>

            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current password"
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

          {/* New Password */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Lock size={18} />
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

          {/* Confirm Password */}

          <div className="lg:col-span-2">

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Lock size={18} />
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none transition focus:border-emerald-500"
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">

          <button
            onClick={handlePasswordUpdate}
            disabled={changingPassword}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <Lock size={18} />

            {changingPassword
              ? "Updating..."
              : "Update Password"}
          </button>

          <button
            onClick={handleForgotPassword}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-600 px-5 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 sm:w-auto"
          >
            <Mail size={18} />
            Send Reset Email
          </button>

        </div>

        {/* Security Info */}

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">

          <h4 className="mb-2 text-sm font-semibold text-amber-700">
            Password Tips
          </h4>

          <ul className="list-disc space-y-1 pl-5 text-xs leading-6 text-amber-700 sm:text-sm">
            <li>Use at least 8 characters.</li>
            <li>Include uppercase & lowercase letters.</li>
            <li>Add numbers and special characters.</li>
            <li>Don't reuse old passwords.</li>
          </ul>

        </div>

      </section>
            {/* ===================================================== */}
      {/* Notification Preferences */}
      {/* ===================================================== */}

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5 lg:p-8">

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
            <Bell className="h-7 w-7 text-emerald-600" />
          </div>

          <div className="min-w-0">

            <h2 className="text-lg font-bold text-slate-800 sm:text-xl lg:text-2xl">
              Notification Preferences
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage how you receive notifications.
            </p>

          </div>

        </div>

        <div className="space-y-4">

          <label className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="font-semibold text-slate-800">
                Email Notifications
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Receive updates about requests, quotes and consultations.
              </p>

            </div>

            <input
              type="checkbox"
              checked={emailNotification}
              onChange={() =>
                setEmailNotification(!emailNotification)
              }
              className="h-5 w-5 accent-emerald-600"
            />

          </label>

          <label className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="font-semibold text-slate-800">
                Marketing Emails
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Receive newsletters and promotional offers.
              </p>

            </div>

            <input
              type="checkbox"
              checked={marketingNotification}
              onChange={() =>
                setMarketingNotification(!marketingNotification)
              }
              className="h-5 w-5 accent-emerald-600"
            />

          </label>

        </div>

      </section>

      {/* ===================================================== */}
      {/* Privacy */}
      {/* ===================================================== */}

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5 lg:p-8">

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
            <ShieldCheck className="h-7 w-7 text-emerald-600" />
          </div>

          <div>

            <h2 className="text-lg font-bold text-slate-800 sm:text-xl lg:text-2xl">
              Privacy & Account
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your account information is protected securely.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">Email</p>
            <p className="mt-2 break-all text-sm font-semibold">
              {currentUser?.email}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">Account Type</p>
            <p className="mt-2 text-sm font-semibold capitalize">
              {userData?.role || "Client"}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">User ID</p>
            <p className="mt-2 break-all text-xs font-medium sm:text-sm">
              {currentUser?.uid}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">Password Recovery</p>

            <Link
              to="/forgot-password"
              className="mt-2 inline-block text-sm font-semibold text-emerald-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* Footer */}
      {/* ===================================================== */}

      <section className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 text-white sm:p-6 lg:p-8">

        <h3 className="break-words text-xl font-bold sm:text-2xl">
          Search Engine Monks
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-100">
          Keep your profile updated to receive accurate project updates,
          consultation details, quotations and important notifications.
        </p>

      </section>

    </div>
  );
}