import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, User, Lock, Eye, EyeOff, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No actual login - just for UI demonstration
    console.log("Login form submitted (UI only):", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-3 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-[340px]"
      >
        {/* Card */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-lg p-5 border border-slate-200/50 dark:border-slate-700/50">
          {/* Header */}
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-2 shadow-md"
            >
              <User className="w-7 h-7 text-white" />
            </motion.div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
              স্টুডেন্ট লগইন
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              একাউন্টে প্রবেশ করুন
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Student ID */}
            <div className="space-y-1">
              <Label htmlFor="studentId" className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                স্টুডেন্ট আইডি
              </Label>
              <div className="relative">
                <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <Input
                  id="studentId"
                  type="text"
                  placeholder="আইডি লিখুন"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  className="pl-8 h-9 border border-slate-200 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-lg text-sm"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label htmlFor="password" className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                পাসওয়ার্ড
              </Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="পাসওয়ার্ড"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-8 pr-8 h-9 border border-slate-200 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400 rounded-lg text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-[10px]">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" className="w-3 h-3 rounded border-slate-300 text-emerald-600" />
                <span className="text-slate-600 dark:text-slate-400">মনে রাখুন</span>
              </label>
              <Link to="#" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                ভুলে গেছেন?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-9 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all rounded-lg"
            >
              <LogIn className="w-3.5 h-3.5 mr-1.5" />
              লগইন
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-[10px]">
              <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">অথবা</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-1.5">
            <Button
              type="button"
              variant="outline"
              className="w-full h-8 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-[11px] font-semibold"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full h-8 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-[11px] font-semibold"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-3 text-center space-y-2">
            <p className="text-[10px] text-slate-600 dark:text-slate-400">
              একাউন্ট নেই?{" "}
              <Link to="/student-login" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                তৈরি করুন
              </Link>
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
              <Link to="/admin-login" className="text-[10px] text-slate-500 dark:text-slate-400 hover:text-emerald-600">
                অ্যাডমিন →
              </Link>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="text-center mt-3">
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 text-[10px]">
            ← হোম
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentLogin;
