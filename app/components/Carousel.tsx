'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  children: ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showIndicators?: boolean
  showNavigation?: boolean
  className?: string
}

const Carousel = ({ 
  children, 
  autoPlay = false, 
  autoPlayInterval = 5000,
  showIndicators = true,
  showNavigation = true,
  className = ""
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 15 : -15
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Slides container with overflow hidden */}
      <div className="relative overflow-hidden w-full h-full">
        {/* Main carousel container */}
        <div className="relative h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                rotateY: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide()
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide()
                }
              }}
              className="absolute w-full h-full flex items-center justify-center px-2 sm:px-4"
              style={{ perspective: '1000px' }}
            >
              {children[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows - Placed outside the overflow-hidden container */}
      {showNavigation && children.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-white/30 hover:border-white/50 z-10 group hidden sm:flex items-center justify-center backdrop-blur-md"
          >
            <ChevronLeft 
              size={24} 
              className="sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform duration-300 drop-shadow-lg" 
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-white/30 hover:border-white/50 z-10 group hidden sm:flex items-center justify-center backdrop-blur-md"
          >
            <ChevronRight 
              size={24} 
              className="sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" 
            />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && children.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-800/80 scale-125'
                  : 'bg-gray-800/30 hover:bg-gray-800/50 hover:scale-110'
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / children.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Swipe indicator for mobile */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:hidden">
        <span className="bg-gray-900/50 px-2 py-1 rounded-full backdrop-blur-sm">
          Swipe to navigate
        </span>
      </div>
    </div>
  )
}

export default Carousel 