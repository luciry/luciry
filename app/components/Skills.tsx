'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code, Brain, Zap, Globe, Database, Cpu } from 'lucide-react'
import SkillGraph from './SkillGraph'
import { useState, useEffect } from 'react'

const Skills = () => {
  const [graphSize, setGraphSize] = useState(300);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const skillCategories = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: [
        { name: "Large Language Models" },
        { name: "Explainable AI" },
        { name: "Reinforcement Learning" },
        { name: "Computational Intelligence" },
        { name: "Neural Networks" },
        { name: "Deep Learning" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: [
        { name: "Python" },
        { name: "MATLAB" },
        { name: "C#" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "SQL" }
      ]
    },
    {
      title: "Simulation & Engineering",
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: [
        { name: "Unity3D" },
        { name: "HLA Protocol" },
        { name: "Simulation Interoperability" },
        { name: "PORTICO" },
        { name: "Data-Oriented Design" },
        { name: "System Architecture" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: [
        { name: "Scikit-learn" },
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Git" },
        { name: "Docker" },
        { name: "Unity DOTS" }
      ]
    },
    {
      title: "Database & Analytics",
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: [
        { name: "SQL Server" },
        { name: "Data Pipeline Design" },
        { name: "Feature Engineering" },
        { name: "Statistical Analysis" },
        { name: "Data Visualization" },
        { name: "ETL Processes" }
      ]
    },
    {
      title: "Languages & Communication",
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      skills: [
        { name: "Italian" },
        { name: "English" },
        { name: "French" },
        { name: "Technical Writing" },
        { name: "Presentation Skills" },
        { name: "International Collaboration" }
      ]
    }
  ]
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setGraphSize(600);
      } else if (window.innerWidth >= 768) {
        setGraphSize(480);
      } else {
        setGraphSize(320);
      }
    };

    const categoryInterval = setInterval(() => {
      setCurrentCategoryIndex(prevIndex => (prevIndex + 1) % skillCategories.length);
    }, 3000);

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(categoryInterval);
    }
  }, [skillCategories.length]);
  
  const activeCategoryTitle = skillCategories[currentCategoryIndex].title;

  return (
    <section id="skills" className="mobile-py bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-8"
        >
          <h2 className="mobile-text-3xl font-bold mb-4 sm:mb-6 gradient-text">Skills & Expertise</h2>
          <div className="h-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentCategoryIndex}
                className="mobile-text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeCategoryTitle}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center h-[380px] sm:h-[560px] lg:h-[700px]">
          <SkillGraph categories={skillCategories} size={graphSize} activeCategoryTitle={activeCategoryTitle} />
        </div>
      </div>
    </section>
  )
}

export default Skills 