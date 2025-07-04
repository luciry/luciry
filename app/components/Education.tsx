'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react'
import Carousel from './Carousel'

const Education = () => {
  const educationData = [
    {
      degree: "PhD in Mathematics, Strategic and Simulation Engineering",
      institution: "Università degli studi di Genova",
      location: "Genova, Italy",
      period: "Nov 2024 - Present",
             description: "Research focus on integrating Large Language Models into simulation environments, working with international partners including governmental organizations and multinational corporations.",
      status: "In Progress",
      highlight: "Current Research"
    },
    {
      degree: "Master's in Engineering Technology for Strategy and Security (STRATEGOS)",
      institution: "Università degli studi di Genova",
      location: "Genova, Italy",
      period: "Sep 2022 - Oct 2024",
      description: "Specialized in Machine Learning, Computational Intelligence, and Reinforcement Learning. Achieved 30 cum laude in both Computational Intelligence and Reinforcement Learning courses.",
      status: "110L/110 (Honors)",
      highlight: "Graduated with Honors"
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Università degli studi di Genova",
      location: "Genova, Italy",
      period: "Sep 2018 - Jul 2022",
      description: "Collaborated with the Italian National Research Council (CNR) on thesis in Explainable Artificial Intelligence, focusing on solar power forecasting.",
      status: "107/110",
      highlight: "CNR Collaboration"
    },
    {
      degree: "Scientific High School Diploma (Linguistic Track)",
      institution: "Liceo Scientifico Statale 'E. Lussu'",
      location: "Sant'Antioco, Italy",
      period: "2014 - 2018",
      description: "Scientific education with linguistic specialization, building strong foundations in mathematics, sciences, and languages.",
      status: "Graduated",
      highlight: "Scientific Foundation"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey from scientific foundations to AI research specialization
          </p>
        </motion.div>

                <div className="max-w-5xl mx-auto">
          <Carousel 
            autoPlay={true} 
            autoPlayInterval={6000}
            showIndicators={true}
            showNavigation={true}
            className="h-[500px]"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-blue-100/50 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <div className="bg-white rounded-t-lg p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                              <BookOpen size={24} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                                {edu.degree}
                              </h3>
                              <p className="text-lg text-blue-600 font-semibold">
                                {edu.institution}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center text-gray-600">
                              <MapPin size={18} className="mr-3 text-blue-500" />
                              <span className="font-medium">{edu.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Calendar size={18} className="mr-3 text-purple-500" />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3 shadow-lg">
                            <Award size={16} className="mr-2" />
                            {edu.status}
                          </div>
                          <div className="text-sm text-gray-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                            {edu.highlight}
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Education 