import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-emerald-200 dark:border-emerald-900 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-transparent border-t-emerald-600 dark:border-t-emerald-400 rounded-full" />
        </motion.div>
        <motion.p
          className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          লোড হচ্ছে...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
