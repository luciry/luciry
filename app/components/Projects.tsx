'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Award, Code, Brain } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "LLM Integration in Simulation Environments",
      description: "PhD research project focusing on integrating Large Language Models into simulation environments for enhanced decision-making and scenario generation.",
      technologies: ["Python", "LLMs", "Simulation", "RAG", "Fine-tuning"],
      status: "In Progress",
      category: "Research",
      highlights: [
        "Retrieval-Augmented Generation implementation",
        "Model fine-tuning for simulation contexts",
                 "International collaboration with defense organizations",
        "Novel approaches to AI-driven simulation"
      ]
    },
    {
      title: "HLA Protocol Generic Module",
      description: "Development of a generic module for the High-Level Architecture (HLA) protocol that enables seamless integration with simulations through WebSocket communication.",
      technologies: ["Java", "WebSocket", "HLA", "Pitch API", "Portico"],
      status: "Completed",
      category: "Software Development",
      highlights: [
        "Abstraction layer for HLA protocol",
        "WebSocket-based communication",
        "Enhanced simulator interoperability",
        "Production-ready implementation"
      ]
    },
    {
      title: "Unity3D Simulator with Data-Oriented Design",
      description: "Performance evaluation of different methods for simulators interoperability using Unity3D with Unity DOTS and Data-Oriented Design principles.",
      technologies: ["C#", "Unity3D", "Unity DOTS", "HLA", "Performance Testing"],
      status: "Completed",
      category: "Simulation",
      highlights: [
        "Unity DOTS implementation",
        "Data-Oriented Design patterns",
        "Performance benchmarking",
        "HLA protocol integration"
      ]
    },
    {
      title: "Explainable AI for Solar Power Forecasting",
      description: "Bachelor's thesis project at CNR focusing on predicting solar panel power generation using explainable machine learning models.",
      technologies: ["Python", "Scikit-learn", "Explainable AI", "Time Series", "Rulex"],
      status: "Completed",
      category: "AI Research",
      highlights: [
        "Rule-based classification models",
        "Feature selection and engineering",
        "Model interpretability analysis",
        "Real-world energy application"
      ]
    },
    {
      title: "Reinforcement Learning for Board Game AI",
      description: "Implementation of Q-learning algorithm in a Python environment inspired by the board game 'Ghosts' for strategic decision-making.",
      technologies: ["Python", "Q-learning", "Reinforcement Learning", "Game AI"],
      status: "Completed",
      category: "AI Research",
      github: "https://github.com/luciry/Ghosts-Reinforcement-Learning",
      highlights: [
        "Q-learning implementation",
        "Custom game environment",
        "Strategic AI behavior",
        "Performance optimization"
      ]
    },
    {
      title: "Collision Detection in Platooning Systems",
      description: "Computational Intelligence project using Genetic Algorithms with Machine Learning for optimizing collision detection in autonomous vehicle platooning.",
      technologies: ["Python", "Genetic Algorithms", "Machine Learning", "Optimization"],
      status: "Completed",
      category: "AI Research",
      highlights: [
        "Genetic algorithm optimization",
        "ML-in-the-loop approach",
        "Autonomous vehicle systems",
        "Safety-critical applications"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'Completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Research':
      case 'AI Research':
        return <Brain className="w-5 h-5" />
      case 'Software Development':
      case 'Simulation':
        return <Code className="w-5 h-5" />
      default:
        return <Award className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of research projects and software developments spanning AI, simulation, and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-blue-600 mr-2">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-sm text-gray-600">{project.category}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {project.github && (
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 bg-gray-100 hover:bg-blue-50 px-3 py-2 rounded-lg hover:shadow-md"
                    >
                      <Github size={16} className="mr-1 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-sm font-medium">GitHub</span>
                      <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 