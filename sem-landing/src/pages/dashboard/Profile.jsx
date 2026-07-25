import { useState } from "react";
import { Camera, Save, Mail, Phone, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { currentUser, userData } = useAuth();

  const [formData] = useState({
    name: userData?.name || currentUser?.displayName || "",
    email: currentUser?.email || "",
    phone: userData?.phone || "",
    bio: userData?.bio || "",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-emerald-100">
          Manage your personal information.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-600 text-4xl font-bold text-white">
                {(formData.name || "U").charAt(0).toUpperCase()}
              </div>

              <button className="absolute bottom-0 right-0 rounded-full bg-white p-2 shadow-lg hover:bg-slate-100">
                <Camera size={18} />
              </button>
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-800">
              {formData.name}
            </h2>

            <p className="text-slate-500">{formData.email}</p>

            <span className="mt-4 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
              Client
            </span>
          </div>
        </div>

        {/* Right Card */}
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-slate-800">
            Personal Information
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-3 text-slate-400"
                />

                <input
                  value={formData.name}
                  readOnly
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-3 text-slate-400"
                />

                <input
                  value={formData.email}
                  readOnly
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Phone
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-3 top-3 text-slate-400"
                />

                <input
                  value={formData.phone}
                  readOnly
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                UID
              </label>

              <input
                value={currentUser?.uid || ""}
                readOnly
                className="w-full rounded-xl border border-slate-200 py-3 px-4 outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Bio
            </label>

            <textarea
              rows={5}
              value={formData.bio}
              readOnly
              className="w-full rounded-xl border border-slate-200 p-4 outline-none resize-none"
            />
          </div>

          <button
            disabled
            className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white opacity-60"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}