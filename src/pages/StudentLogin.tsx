import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, User, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const StudentLogin = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call - Replace with actual API endpoint
    setTimeout(() => {
      setLoading(false);
      
      // Demo credentials check (replace with actual authentication)
      if (formData.studentId === "demo" && formData.password === "demo123") {
        toast({
          title: "লগইন সফল!",
          description: "স্বাগতম! আপনার ড্যাশবোর্ডে প্রবেশ করছেন...",
        });
        // Redirect to dashboard after successful login
        // window.location.href = "/dashboard";
      } else {
        toast({
          title: "লগইন ব্যর্থ",
          description: "স্টুডেন্ট আইডি অথবা পাসওয়ার্ড ভুল। অনুগ্রহ করে আবার চেষ্টা করুন।",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4"
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              স্টুডেন্ট লগইন
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              আপনার একাউন্টে প্রবেশ করুন
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student ID */}
            <div className="space-y-2">
              <Label htmlFor="studentId" className="text-slate-700 dark:text-slate-300">
                স্টুডেন্ট আইডি
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="studentId"
                  type="text"
                  placeholder="আপনার স্টুডেন্ট আইডি লিখুন"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  className="pl-10 h-12 border-slate-300 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">
                পাসওয়ার্ড
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 h-12 border-slate-300 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-slate-600 dark:text-slate-400">মনে রাখুন</span>
              </label>
              <Link to="#" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  লগইন হচ্ছে...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="w-5 h-5" />
                  লগইন করুন
                </span>
              )}
            </Button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center space-y-3">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              একাউন্ট নেই?{" "}
              <Link to="#" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                রেজিস্ট্রেশন করুন
              </Link>
            </p>
            
            {/* Demo Credentials Info */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                ডেমো লগইন তথ্য:
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 text-xs text-left space-y-1">
                <p className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold">স্টুডেন্ট আইডি:</span> demo
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold">পাসওয়ার্ড:</span> demo123
                </p>
              </div>
            </div>
            
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
              <Link
                to="/admin-login"
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                অ্যাডমিন লগইন →
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm"
          >
            ← হোমপেজে ফিরে যান
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentLogin;
