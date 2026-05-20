import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Shield, Lock, Eye, EyeOff, Mail as MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admin login form submitted (UI only):", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-3 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-[340px]"
      >
        <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-lg p-5 border border-purple-500/30">
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-2 shadow-md"
            >
              <Shield className="w-7 h-7 text-white" />
            </motion.div>
            <h1 className="text-xl font-bold text-white mb-1">অ্যাডমিন লগইন</h1>
            <p className="text-xs text-slate-400">প্যানেলে প্রবেশ করুন</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs text-slate-300 font-medium">ইমেইল</Label>
              <div className="relative">
                <MailIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-8 h-9 bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 rounded-lg text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-xs text-slate-300 font-medium">পাসওয়ার্ড</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="পাসওয়ার্ড"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-8 pr-8 h-9 bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 rounded-lg text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px]">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" className="w-3 h-3 rounded border-slate-600 bg-slate-900 text-purple-600" />
                <span className="text-slate-400">মনে রাখুন</span>
              </label>
              <Link to="#" className="text-purple-400 hover:underline">ভুলে গেছেন?</Link>
            </div>

            <Button
              type="submit"
              className="w-full h-9 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all rounded-lg"
            >
              <LogIn className="w-3.5 h-3.5 mr-1.5" />
              লগইন
            </Button>
          </form>

          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-[10px]">
              <span className="px-2 bg-slate-800 text-slate-400">অথবা</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <Button
              type="button"
              variant="outline"
              className="w-full h-8 bg-slate-900/50 border border-slate-600 hover:bg-slate-700 text-white rounded-lg text-[11px] font-semibold"
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
              className="w-full h-8 bg-slate-900/50 border border-slate-600 hover:bg-slate-700 text-white rounded-lg text-[11px] font-semibold"
            >
              <MailIcon className="w-3.5 h-3.5 mr-1.5" />
              Email
            </Button>
          </div>

          <div className="mt-3 text-center space-y-2">
            <div className="pt-2 border-t border-slate-700">
              <Link to="/student-login" className="text-[10px] text-slate-400 hover:text-purple-400">স্টুডেন্ট →</Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <Link to="/" className="text-slate-400 hover:text-purple-400 text-[10px]">← হোম</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
