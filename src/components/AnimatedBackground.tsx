import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = "" }) => {
  // Generar múltiples vectores con diferentes propiedades de animación
  // Usar useMemo para evitar regenerar en cada render
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
        opacity: Math.random() * 0.2 + 0.25,
        initialX,
        initialY,
        targetX: initialX + (Math.random() * 200 - 100),
        targetY: initialY + (Math.random() * 200 - 100),
      };
    }), []
  );

  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
      color: `rgba(${251 + Math.random() * 4}, ${146 + Math.random() * 4}, ${60 + Math.random() * 4}, ${Math.random() * 0.35 + 0.35})`,
      xOffset: Math.random() * 20 - 10,
    })), []
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
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: vector.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: vector.delay,
          }}
        >
          {/* Círculo con gradiente */}
          {vector.id % 3 === 0 && (
            <svg
              width={vector.size}
              height={vector.size}
              viewBox="0 0 100 100"
              className="text-orange-400/35 dark:text-orange-300/20"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="currentColor"
                className="blur-sm"
              />
            </svg>
          )}

          {/* Triángulo */}
          {vector.id % 3 === 1 && (
            <svg
              width={vector.size}
              height={vector.size}
              viewBox="0 0 100 100"
              className="text-pink-400/35 dark:text-pink-300/20"
            >
              <polygon
                points="50,10 90,90 10,90"
                fill="currentColor"
                className="blur-sm"
              />
            </svg>
          )}

          {/* Cuadrado rotado */}
          {vector.id % 3 === 2 && (
            <svg
              width={vector.size}
              height={vector.size}
              viewBox="0 0 100 100"
              className="text-purple-400/35 dark:text-purple-300/20"
            >
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                fill="currentColor"
                className="blur-sm"
              />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Líneas decorativas animadas */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            left: `${(i * 15) % 100}%`,
            top: `${(i * 20) % 100}%`,
            width: "2px",
            height: "200px",
            background: "linear-gradient(to bottom, transparent, rgba(251, 146, 60, 0.35), transparent)",
          }}
          animate={{
            y: [0, 100, 0],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Partículas pequeñas flotantes */}
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
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.35, 0.7, 0.35],
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

