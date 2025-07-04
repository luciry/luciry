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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, nextSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
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
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className={`relative overflow-visible ${className}`}>
      {/* Main carousel container */}
      <div className="relative h-full min-h-[400px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.6 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide()
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide()
              }
            }}
            className="absolute w-full h-full flex items-center justify-center px-4"
            style={{ perspective: '1000px' }}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showNavigation && children.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-md hover:bg-gray-900/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-white/20 hover:border-white/40 z-10 group"
          >
            <ChevronLeft 
              size={28} 
              className="group-hover:-translate-x-1 transition-transform duration-300 drop-shadow-lg" 
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-md hover:bg-gray-900/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-white/20 hover:border-white/40 z-10 group"
          >
            <ChevronRight 
              size={28} 
              className="group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" 
            />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && children.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/70 hover:scale-110'
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / children.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

export default Carousel 