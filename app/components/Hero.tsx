'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce animation-delay-0"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce animation-delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce animation-delay-300"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400/60 rounded-full animate-bounce animation-delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="/images/propic.png"
                  alt="Luca Cirillo - AI Engineer & Researcher"
                  width={300}
                  height={300}
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl hover:scale-105 transition-all duration-500 border-4 border-white/20 hover:border-white/40 object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-2"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block hover:animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Luca</span>{' '}
              <span className="inline-block hover:animate-pulse animation-delay-300 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cirillo</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white font-bold mb-6 max-w-2xl mx-auto lg:mx-0 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              AI Engineer & Researcher | PhD in Mathematics, Strategic and Simulation Engineering
            </motion.p>
            
            <motion.p
              className="text-lg text-white font-medium mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Specializing in Large Language Models, Explainable AI, and Simulation Engineering. 
              Passionate about using AI responsibly to make a positive impact on the world.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
            <a
              href="https://github.com/luciry"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github size={20} className="z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="z-10 font-semibold">GitHub</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </a>
            <a
              href="https://linkedin.com/in/luca-cirillo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin size={20} className="z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="z-10 font-semibold">LinkedIn</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </a>
            <a
              href="mailto:lucacirillo@outlook.com"
              className="group flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail size={20} className="z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="z-10 font-semibold">Contact</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - centered */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#about" className="group inline-block p-4 rounded-full bg-gray-900/80 backdrop-blur-md hover:bg-gray-900/90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 border-2 border-white/30 hover:border-white/50">
            <ChevronDown size={28} className="text-white group-hover:text-white transition-colors duration-300 group-hover:animate-pulse drop-shadow-lg" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 