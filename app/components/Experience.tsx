'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Carousel from './Carousel'

const Experience = () => {
  const experiences = [
    {
      title: "PhD Student & Researcher",
      company: "University of Genova - Simulation Team",
      location: "Genova, Italy",
      period: "Nov 2024 - Present",
      type: "Full Time",
      description: "Working with international partners including governmental organizations and multinational corporations on simulation technologies. My role focuses on technical development and coding of simulators, as well as the integration of Large Language Model within simulation environments.",
      highlights: [
        "LLM integration in simulation environments",
        "International collaboration with defense organizations",
        "Technical architecture and development",
        "Client interaction and project definition"
      ]
    },
    {
      title: "Modeling And Simulation Engineer",
      company: "STAM",
      location: "Genova, Italy",
      period: "Jun 2024 - Oct 2024",
      type: "Part Time",
      description: "Continued work on projects related to HLA protocol development. Focused on developing a generic module for the High-Level Architecture (HLA) protocol that enables seamless integration with simulations.",
      highlights: [
        "HLA protocol generic module development",
        "WebSocket integration for simulators",
        "Pitch and Portico API abstraction",
        "Enhanced simulation interoperability"
      ]
    },
    {
      title: "Modeling and Simulation Engineer Intern",
      company: "STAM",
      location: "Genova, Italy",
      period: "Jul 2023 - May 2024",
      type: "Internship",
      description: "Thesis work on 'Performance Evaluation of Different Methods for Simulators Interoperability.' Developed simulators using Unity3D including Unity DOTS with Data-Oriented Design, establishing communication using HLA protocol.",
      highlights: [
        "Unity3D simulator development",
        "Unity DOTS with Data-Oriented Design",
        "HLA protocol implementation",
        "PORTICO open-source integration"
      ]
    },
    {
      title: "MATLAB Student Ambassador",
      company: "MathWorks",
      location: "Genova, Italy",
      period: "Jan 2023 - Present",
      type: "Part Time",
      description: "Organizing live seminars for university students on MATLAB and Simulink topics, managing the MATLAB UniGe Instagram page, and building the local MATLAB community.",
      highlights: [
        "Live seminar organization",
        "Community management",
        "Social media content creation",
        "Student engagement and education"
      ]
    },
    {
      title: "Thesis Student in Explainable AI",
      company: "Consiglio Nazionale delle Ricerche (CNR)",
      location: "Genova, Italy",
      period: "Mar 2022 - Jul 2022",
      type: "Part Time",
      description: "Bachelor's thesis at the National Research Council focusing on Explainable Machine Learning for solar power prediction. Used Scikit-learn for rule-based classification models with emphasis on interpretability.",
      highlights: [
        "Explainable AI research",
        "Solar power forecasting",
        "Data pipeline development",
        "Model explainability analysis"
      ]
    },
    {
      title: "Application Support Engineer",
      company: "Aizoon (Siemens Consultant)",
      location: "Genova, Italy",
      period: "Dec 2021 - Apr 2022",
      type: "Internship",
      description: "Worked as external consultant for Siemens, learning to interact with international clients and handle technical support. Gained experience in SQL Server, log analysis, and network troubleshooting.",
      highlights: [
        "International client interaction",
        "SQL Server management",
        "Siemens BIL analysis",
        "Network troubleshooting"
      ]
    }
  ]

  return (
    <section id="experience" className="mobile-py bg-white">
      <div className="mobile-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mobile-text-3xl font-bold mb-4 sm:mb-6 gradient-text">Experience</h2>
          <p className="mobile-text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 3 years of experience in AI research, simulation engineering, and software development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            autoPlay={true} 
            autoPlayInterval={7000}
            showIndicators={true}
            showNavigation={true}
            className="h-[500px] sm:h-[550px] lg:h-[600px]"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl mx-auto px-2 sm:px-4"
              >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-purple-100/50 backdrop-blur-sm h-full">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                    <div className="bg-white rounded-t-lg p-4 sm:p-6 lg:p-8 h-full overflow-y-auto">
                      <div className="flex flex-col space-y-4 sm:space-y-6 h-full">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex-1">
                            <div className="flex items-start mb-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                                <Briefcase size={20} className="sm:w-6 sm:h-6 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="mobile-text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight mb-1 sm:mb-2">
                                  {exp.title}
                                </h3>
                                <p className="mobile-text-base lg:text-lg text-purple-600 font-semibold mb-3 leading-tight">
                                  {exp.company}
                                </p>
                                
                                {/* Location and Period */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                  <div className="flex items-center text-gray-600">
                                    <MapPin size={14} className="sm:w-4 sm:h-4 mr-2 text-purple-500 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-medium">{exp.location}</span>
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Calendar size={14} className="sm:w-4 sm:h-4 mr-2 text-pink-500 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Type Badge */}
                          <div className="self-start lg:self-auto">
                            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                              <Briefcase size={12} className="sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2" />
                              {exp.type}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="border-t border-gray-200 pt-4 sm:pt-6">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                            {exp.description}
                          </p>
                        </div>
                        
                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {exp.highlights.map((highlight, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              className="flex items-start text-xs sm:text-sm text-gray-700 bg-purple-50 p-2 sm:p-3 rounded-lg"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="font-medium leading-relaxed">{highlight}</span>
                            </motion.div>
                          ))}
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

export default Experience 