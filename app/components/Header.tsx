'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <header className={`fixed w-full z-50 transition-all duration-300 safe-area-top ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="mobile-container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'gradient-text' : 'text-white drop-shadow-lg'
            }`}
          >
            Luca Cirillo
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative transition-all duration-300 font-medium group py-2 px-1 ${
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
            className={`md:hidden p-2 sm:p-3 rounded-lg transition-all duration-300 hover:shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center ${
              scrolled ? 'hover:bg-blue-50' : 'hover:bg-white/20'
            } ${isMenuOpen ? 'bg-white/10' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className={`transition-colors duration-300 ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className={`transition-colors duration-300 ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`md:hidden mt-4 pb-4 border-t overflow-hidden ${
                scrolled ? 'border-gray-200' : 'border-white/20'
              }`}
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="pt-4 space-y-2"
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`block py-3 px-4 transition-all duration-300 rounded-lg min-h-[44px] flex items-center ${
                      scrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header 