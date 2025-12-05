import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetallicFrameProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  animate?: boolean;
}

const MetallicFrame = ({ 
  children, 
  className, 
  intensity = "medium",
  animate = true 
}: MetallicFrameProps) => {
  const intensityStyles = {
    subtle: "before:opacity-40 hover:before:opacity-60",
    medium: "before:opacity-60 hover:before:opacity-90",
    strong: "before:opacity-80 hover:before:opacity-100",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-xl bg-card overflow-hidden",
        "before:content-[''] before:absolute before:inset-[-2px] before:rounded-[calc(var(--radius-xl)+2px)]",
        "before:bg-metallic-combined before:bg-[length:200%_200%] before:-z-10",
        "before:transition-opacity before:duration-300",
        animate && "before:animate-[metallic-rotate_6s_linear_infinite]",
        intensityStyles[intensity],
        className
      )}
      whileHover={{ 
        y: -4, 
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
    >
      {/* Inner glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default MetallicFrame;
