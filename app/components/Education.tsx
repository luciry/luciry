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
    <section id="education" className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="mobile-text-3xl font-bold mb-4 sm:mb-6 gradient-text">Education</h2>
          <p className="mobile-text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey from scientific foundations to AI research specialization
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            autoPlay={true} 
            autoPlayInterval={6000}
            showIndicators={true}
            showNavigation={true}
            className="h-[520px] sm:h-[480px] md:h-[450px]"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl mx-auto px-2 sm:px-4"
              >
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-blue-100/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 flex-shrink-0">
                    <div className="bg-white rounded-t-lg p-4 sm:p-6 h-full">
                      <div className="flex flex-col space-y-3 sm:space-y-4 h-full">
                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <BookOpen size={20} className="text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight mb-1">
                                  {edu.degree}
                                </h3>
                                <p className="text-sm sm:text-base text-blue-600 font-semibold leading-tight">
                                  {edu.institution}
                                </p>
                              </div>
                            </div>
                            
                            {/* Location and Period */}
                            <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                              <div className="flex items-center text-gray-600">
                                <MapPin size={14} className="mr-2 text-blue-500 flex-shrink-0" />
                                <span className="font-medium">{edu.location}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Calendar size={14} className="mr-2 text-purple-500 flex-shrink-0" />
                                <span className="font-medium">{edu.period}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Status and Highlight */}
                          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                              <Award size={12} className="mr-1.5" />
                              <span>{edu.status}</span>
                            </div>
                            <div className="text-xs text-gray-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">
                              {edu.highlight}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="border-t border-gray-200 pt-3 sm:pt-4 flex-1">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
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