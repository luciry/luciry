"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

interface SkillNode {
  name: string;
  group: string; 
  color: string;
}

interface SkillCategory {
  title: string;
  skills: { name: string }[];
}

interface SkillGraphProps {
  categories: SkillCategory[];
  size?: number;
}

/*
  SkillGraph renders skills arranged in a circle layout. Each skill is an interactive node
  that scales on hover and reveals a tooltip with the skill name (and optional description).
  The component uses Framer Motion for smooth animations.
*/
const SkillGraph = ({ categories, size = 480 }: SkillGraphProps) => {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const allNodes = useMemo(() => {
    const nodes: (SkillNode & { x: number; y: number })[] = [];
    const numCategories = categories.length;
    const baseRadius = size / 2.2; 
    const radiusStep = (baseRadius / 2) / numCategories;

    categories.forEach((category, catIndex) => {
      const radius = baseRadius - (catIndex * radiusStep);
      const numSkills = category.skills.length;
      const angleOffset = catIndex * 0.5;

      category.skills.forEach((skill, skillIndex) => {
        const angle = (skillIndex / numSkills) * 2 * Math.PI + angleOffset;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        nodes.push({
          ...skill,
          x,
          y,
          group: category.title,
          color: catIndex % 2 === 0 ? 'from-blue-500 to-purple-500' : 'from-purple-500 to-pink-500'
        });
      });
    });
    return nodes;
  }, [categories, size]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a9cfa" />
              <stop offset="100%" stopColor="#d18afa" />
            </linearGradient>
          </defs>
          {allNodes.map((node) => {
            if (!hoveredGroup || node.group !== hoveredGroup) return null;
            
            const groupNodes = allNodes.filter(n => n.group === hoveredGroup);
            
            return groupNodes.map((otherNode) => {
              if (node.name === otherNode.name) return null;
              return (
                <motion.line
                  key={`${node.name}-${otherNode.name}`}
                  x1={node.x + size / 2}
                  y1={node.y + size / 2}
                  x2={otherNode.x + size / 2}
                  y2={otherNode.y + size / 2}
                  stroke="url(#gradLine)"
                  strokeWidth="1"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 0.4, pathLength: 1 }}
                  exit={{ opacity: 0, pathLength: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )
            });
          })}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-lg font-semibold text-gray-400">
            Skills
          </span>
        </div>

        {allNodes.map((node) => {
          const isActive = hoveredGroup === node.group;
          const baseClasses = isActive
            ? `bg-gradient-to-br ${node.color} text-white`
            : "bg-gray-200 text-gray-700 hover:bg-gray-300";

          return (
            <motion.div
              key={node.name}
              className="absolute cursor-pointer select-none"
              style={{ left: `calc(50% + ${node.x}px)`, top: `calc(50% + ${node.y}px)` }}
              initial={{ x: "-50%", y: "-50%", scale: 1 }}
              animate={{ zIndex: isActive ? 10 : 1 }}
              whileHover={{ scale: 1.2, zIndex: 20 }}
              onHoverStart={() => setHoveredGroup(node.group)}
              onHoverEnd={() => setHoveredGroup(null)}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className={`${baseClasses} rounded-full px-3 py-1.5 shadow-md text-xs sm:text-sm whitespace-nowrap transition-all duration-200`}>
                {node.name}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="h-10 mt-4 text-center">
        <AnimatePresence>
          {hoveredGroup && (
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {hoveredGroup}
            </motion.h3>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillGraph; 