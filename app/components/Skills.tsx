'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Zap, Globe, Database, Cpu } from 'lucide-react'
import SkillGraph from './SkillGraph'
import { useState, useEffect } from 'react'

const Skills = () => {
  const [graphSize, setGraphSize] = useState(340);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setGraphSize(600);
      } else if (window.innerWidth >= 768) {
        setGraphSize(480);
      } else {
        setGraphSize(340);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <p className="mobile-text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my skill set through an interactive map. Hover over each node to see its connections.
          </p>
        </motion.div>

        <div className="w-full flex justify-center items-center h-[400px] sm:h-[560px] lg:h-[700px]">
          <SkillGraph categories={skillCategories} size={graphSize} />
        </div>
      </div>
    </section>
  )
}

export default Skills 