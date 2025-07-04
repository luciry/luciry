'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'gradient-text' : 'text-white drop-shadow-lg'
            }`}
          >
            Luca Cirillo
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative transition-all duration-300 font-medium group py-2 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200 drop-shadow-lg'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md -z-10 ${
                  scrolled ? 'bg-blue-50' : 'bg-white/20'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 hover:shadow-lg ${
              scrolled ? 'hover:bg-blue-50' : 'hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X size={24} className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`} /> : 
              <Menu size={24} className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`} />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-4 pb-4 border-t ${
              scrolled ? 'border-gray-200' : 'border-white/20'
            }`}
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header 