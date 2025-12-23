import React, { useMemo } from "react";
import { motion } from "framer-motion";

export type BackgroundVariant = "orange" | "blue" | "green" | "purple";

interface AnimatedBackgroundProps {
  className?: string;
  variant?: BackgroundVariant;
}

const colorMap = {
  orange: {
    primary: "text-orange-400/35 dark:text-orange-400/20",
    secondary: "text-pink-400/35 dark:text-pink-400/20",
    line: "rgba(251, 146, 60, 0.35)",
    particle: [251, 146, 60]
  },
  blue: {
    primary: "text-blue-400/35 dark:text-blue-400/20",
    secondary: "text-cyan-400/35 dark:text-cyan-400/20",
    line: "rgba(96, 165, 250, 0.35)",
    particle: [96, 165, 250]
  },
  green: {
    primary: "text-emerald-400/35 dark:text-emerald-400/20",
    secondary: "text-teal-400/35 dark:text-teal-400/20",
    line: "rgba(52, 211, 153, 0.35)",
    particle: [52, 211, 153]
  },
  purple: {
    primary: "text-purple-400/35 dark:text-purple-400/20",
    secondary: "text-indigo-400/35 dark:text-indigo-400/20",
    line: "rgba(192, 132, 252, 0.35)",
    particle: [192, 132, 252]
  }
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = "", variant = "orange" }) => {
  const theme = colorMap[variant];

  const vectors = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => {
      const initialX = Math.random() * 200 - 100;
      const initialY = Math.random() * 200 - 100;
      return {
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.2 + 0.15,
        initialX,
        initialY,
        targetX: initialX + (Math.random() * 200 - 100),
        targetY: initialY + (Math.random() * 200 - 100),
      };
    }), [variant]
  );

  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 2,
      color: `rgba(${theme.particle[0]}, ${theme.particle[1]}, ${theme.particle[2]}, ${Math.random() * 0.3 + 0.2})`,
      xOffset: Math.random() * 30 - 15,
    })), [variant]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {vectors.map((vector) => (
        <motion.div
          key={vector.id}
          className="absolute"
          style={{
            left: `${vector.x}%`,
            top: `${vector.y}%`,
            opacity: vector.opacity,
          }}
          animate={{
            x: [vector.initialX, vector.targetX, vector.initialX],
            y: [vector.initialY, vector.targetY, vector.initialY],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: vector.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: vector.delay,
          }}
        >
          {vector.id % 2 === 0 ? (
            <svg
              width={vector.size}
              height={vector.size}
              viewBox="0 0 100 100"
              className={theme.primary}
            >
              <circle cx="50" cy="50" r="40" fill="currentColor" className="blur-xl" />
            </svg>
          ) : (
            <svg
              width={vector.size}
              height={vector.size}
              viewBox="0 0 100 100"
              className={theme.secondary}
            >
              <rect x="20" y="20" width="60" height="60" fill="currentColor" className="blur-xl" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Decorative lines */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute hidden md:block"
          style={{
            left: `${(i * 25) + 12}%`,
            top: `-100px`,
            width: "1px",
            height: "300px",
            background: `linear-gradient(to bottom, transparent, ${theme.line}, transparent)`,
          }}
          animate={{
            y: ["0%", "400%", "0%"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1,
          }}
        />
      ))}

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
