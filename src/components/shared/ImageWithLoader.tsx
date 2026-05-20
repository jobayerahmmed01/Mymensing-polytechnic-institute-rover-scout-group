import { useState } from "react";
import { motion } from "framer-motion";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

const ImageWithLoader = ({ src, alt, className = "", wrapperClassName = "" }: ImageWithLoaderProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse" />
      )}
      
      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">ছবি লোড হয়নি</p>
        </div>
      )}
      
      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ImageWithLoader;
