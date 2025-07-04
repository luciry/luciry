'use client'

import { motion } from 'framer-motion'
import { Brain, Globe, Users, Award } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Research",
      description: "PhD research in integrating Large Language Models into simulation environments"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Collaboration",
      description: "Working with governmental organizations, multinational corporations, and research institutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multicultural Experience",
      description: "Fluent in Italian, English, and French with diverse international experiences"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Master's degree with honors (110L/110) and multiple research publications"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate AI engineer and researcher dedicated to leveraging technology for positive global impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6">
              I'm Luca Cirillo, originally from Sardinia, Italy, currently pursuing my PhD in Mathematics, 
              Strategic and Simulation Engineering at the University of Genova.               My research focuses on 
              integrating Large Language Models into simulation environments, working with international 
              partners including governmental organizations and various multinational corporations.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              My journey began with a Bachelor's in Computer Engineering, where I collaborated with the 
              Italian National Research Council (CNR) on Explainable AI. I then pursued a Master's in 
              Engineering Technology for Strategy and Security, graduating with honors and diving deep 
              into Machine Learning and Simulation technologies.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Beyond technical expertise, I'm driven by a strong belief in using AI responsibly to 
              create positive change. I believe that technology, when used consciously and with the 
              right intentions, can become a powerful tool to improve the world and help more people 
              achieve their dreams rather than just survive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-200/50 border border-transparent hover:border-blue-200/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 