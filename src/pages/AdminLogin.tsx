import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Shield, Lock, Eye, EyeOff, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call - Replace with actual API endpoint
    setTimeout(() => {
      setLoading(false);
      
      // Demo credentials check (replace with actual authentication)
      if (formData.email === "admin@mpirsg.org" && formData.password === "admin123") {
        toast({
          title: "লগইন সফল!",
          description: "স্বাগতম অ্যাডমিন! ড্যাশবোর্ডে প্রবেশ করছেন...",
        });
        // Redirect to admin dashboard after successful login
        // window.location.href = "/admin/dashboard";
      } else {
        toast({
          title: "লগইন ব্যর্থ",
          description: "ইমেইল অথবা পাসওয়ার্ড ভুল। অনুগ্রহ করে আবার চেষ্টা করুন।",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 border border-purple-500/30">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">
              অ্যাডমিন লগইন
            </h1>
            <p className="text-slate-400">
              অ্যাডমিন প্যানেলে প্রবেশ করুন
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                ইমেইল
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 h-12 bg-slate-900 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300">
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
                  className="pl-10 pr-10 h-12 bg-slate-900 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-900 text-purple-600 focus:ring-purple-500" />
                <span className="text-slate-400">মনে রাখুন</span>
              </label>
              <Link to="#" className="text-purple-400 hover:underline">
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
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
            {/* Demo Credentials Info */}
            <div className="pb-3 border-b border-slate-700">
              <p className="text-xs text-slate-400 mb-2">
                ডেমো লগইন তথ্য:
              </p>
              <div className="bg-slate-900 rounded-lg p-3 text-xs text-left space-y-1">
                <p className="text-slate-400">
                  <span className="font-semibold">ইমেইল:</span> admin@mpirsg.org
                </p>
                <p className="text-slate-400">
                  <span className="font-semibold">পাসওয়ার্ড:</span> admin123
                </p>
              </div>
            </div>
            
            <div className="pt-3 border-t border-slate-700">
              <Link
                to="/student-login"
                className="text-sm text-slate-400 hover:text-purple-400"
              >
                স্টুডেন্ট লগইন →
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-slate-400 hover:text-purple-400 text-sm"
          >
            ← হোমপেজে ফিরে যান
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
