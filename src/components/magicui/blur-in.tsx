"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurIntProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number; y: number };
    visible: { filter: string; opacity: number; y: number };
  };
  duration?: number;
}

const BlurIn = ({ children, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 10 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display font-baloo tracking-[-0.02em] drop-shadow-sm",
      )}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;
