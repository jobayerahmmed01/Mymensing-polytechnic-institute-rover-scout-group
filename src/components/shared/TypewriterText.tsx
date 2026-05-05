import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  loop?: boolean;
  pauseDelay?: number;
}

const TypewriterText = ({ 
  text, 
  delay = 50, 
  className = "", 
  loop = false,
  pauseDelay = 2000 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!loop) {
      // Original behavior - type once
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    } else {
      // Loop behavior - type, pause, delete, repeat
      if (isPaused) {
        // Waiting during pause
        const timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDelay);

        return () => clearTimeout(timeout);
      } else if (!isDeleting && currentIndex < text.length) {
        // Typing with smooth delay
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else if (!isDeleting && currentIndex === text.length) {
        // Pause before deleting
        setIsPaused(true);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting with faster, smoother speed
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, delay / 3); // Faster delete speed

        return () => clearTimeout(timeout);
      } else if (isDeleting && displayText.length === 0) {
        // Reset to start typing again with small pause
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex(0);
        }, 300); // Small pause before restarting

        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, delay, text, loop, isDeleting, displayText.length, pauseDelay, isPaused]);

  return (
    <span className={className}>
      {displayText}
      {loop && !isPaused && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypewriterText;
