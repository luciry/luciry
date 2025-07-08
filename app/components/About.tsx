'use client'

import { motion } from 'framer-motion'
import { Brain, Globe, Users, Award } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI Research",
      description: "PhD research in integrating Large Language Models into simulation environments"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "International Collaboration",
      description: "Working with governmental organizations, multinational corporations, and research institutions"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Multicultural Experience",
      description: "Fluent in Italian, English, and French with diverse international experiences"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Academic Excellence",
      description: "Master's degree with honors (110L/110) and multiple research publications"
    }
  ]

  return (
    <section id="about" className="mobile-py bg-white">
      <div className="mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mobile-text-3xl font-bold mb-4 sm:mb-6 gradient-text">About Me</h2>
          <p className="mobile-text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate AI engineer and researcher dedicated to leveraging technology for positive global impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-4 sm:space-y-6">
              <p className="mobile-text-base text-gray-700 leading-relaxed">
                I'm Luca Cirillo, originally from Sardinia, Italy, currently pursuing my PhD in Mathematics, 
                Strategic and Simulation Engineering at the University of Genova. My research focuses on 
                integrating Large Language Models into simulation environments, working with international 
                partners including governmental organizations and various multinational corporations.
              </p>
              
              <p className="mobile-text-base text-gray-700 leading-relaxed">
                My journey began with a Bachelor's in Computer Engineering, where I collaborated with the 
                Italian National Research Council (CNR) on Explainable AI. I then pursued a Master's in 
                Engineering Technology for Strategy and Security, graduating with honors and diving deep 
                into Machine Learning and Simulation technologies.
              </p>
              
              <p className="mobile-text-base text-gray-700 leading-relaxed">
                Beyond technical expertise, I'm driven by a strong belief in using AI responsibly to 
                create positive change. I believe that technology, when used consciously and with the 
                right intentions, can become a powerful tool to improve the world and help more people 
                achieve their dreams rather than just survive.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-200/50 border border-transparent hover:border-blue-200/50"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-blue-600 flex-shrink-0 mt-1">
                      {highlight.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mobile-text-lg font-semibold mb-2 text-gray-800 leading-tight">
                        {highlight.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 