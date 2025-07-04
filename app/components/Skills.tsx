'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Zap, Globe, Database, Cpu } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "Large Language Models", level: 90 },
        { name: "Explainable AI", level: 85 },
        { name: "Reinforcement Learning", level: 80 },
        { name: "Computational Intelligence", level: 85 },
        { name: "Neural Networks", level: 80 },
        { name: "Deep Learning", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "MATLAB", level: 85 },
        { name: "C#", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Simulation & Engineering",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "Unity3D", level: 85 },
        { name: "HLA Protocol", level: 80 },
        { name: "Simulation Interoperability", level: 85 },
        { name: "PORTICO", level: 80 },
        { name: "Data-Oriented Design", level: 75 },
        { name: "System Architecture", level: 80 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "Git", level: 80 },
        { name: "Docker", level: 70 },
        { name: "Unity DOTS", level: 75 }
      ]
    },
    {
      title: "Database & Analytics",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "SQL Server", level: 80 },
        { name: "Data Pipeline Design", level: 85 },
        { name: "Feature Engineering", level: 80 },
        { name: "Statistical Analysis", level: 75 },
        { name: "Data Visualization", level: 70 },
        { name: "ETL Processes", level: 75 }
      ]
    },
    {
      title: "Languages & Communication",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "Italian", level: 100 },
        { name: "English", level: 90 },
        { name: "French", level: 60 },
        { name: "Technical Writing", level: 85 },
        { name: "Presentation Skills", level: 80 },
        { name: "International Collaboration", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skills spanning AI research, simulation engineering, and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 hover:h-3 transition-all duration-300 cursor-pointer">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full hover:h-3 transition-all duration-300 relative overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 