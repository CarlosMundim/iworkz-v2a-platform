'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Zap, DollarSign, TrendingUp, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface CarouselImage {
  src: string
  alt: string
  description: string
  title: string
}

interface MetricCard {
  value: string
  label: string
  icon: React.ReactNode
}

const Hero = () => {
  // States for animations and interactions
  const [loaded, setLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [revealContent, setRevealContent] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  // Brand colors integrated with our design system
  const colors = {
    darkBlue: '#0a1829',
    midBlue: '#0c2d56', 
    accentRed: '#E63946',
    accentTeal: '#27B3B1',
    accentBlue: '#A8DADC',
    silver: '#E5E9F0'
  }

  // Carousel images
  const carouselImages: CarouselImage[] = [
    { 
      src: '/homepage/HeroM1.png', 
      alt: 'iWORKZ Platform Overview', 
      description: 'Voice-First Multilingual Workforce Platform', 
      title: 'EFFORTLESS COMMUNICATION' 
    },
    { 
      src: '/homepage/Immersive_AR-VR_Onboarding.png', 
      alt: 'Immersive AR/VR Onboarding', 
      description: 'Immersive AR/VR Training Experiences', 
      title: 'ELEVATED LEARNING' 
    },
    { 
      src: '/homepage/it-ai_augmentation.png', 
      alt: 'IT AI Augmentation', 
      description: 'Smart Onboarding and Productivity Amplification Tools', 
      title: 'PERFORMANCE EXCELLENCE' 
    },
    { 
      src: '/homepage/lang_rag.png', 
      alt: 'Language RAG', 
      description: 'RAG-Powered Language and Compliance Automation', 
      title: 'FLAWLESS COMPLIANCE' 
    },
    { 
      src: '/homepage/RAG-Powered_Training_Bots.png', 
      alt: 'RAG-Powered Training Bots', 
      description: 'AI-Powered Training Assistants and Knowledge Agents', 
      title: 'INTELLIGENT ASSISTANCE' 
    },
    { 
      src: '/homepage/Smart_Talent_Matching.png', 
      alt: 'Smart Talent Matching', 
      description: 'AI Talent Matching Agents & Multi-Agent Collaboration (MCP)', 
      title: 'PERFECT ALIGNMENT' 
    },
    { 
      src: '/homepage/SolutionsPV_IWKZ.png', 
      alt: 'Solutions Preview', 
      description: 'End-to-End Workforce Management Solutions', 
      title: 'COMPLETE MASTERY' 
    }
  ]

  // Highlight texts
  const highlightTexts = [
    '<strong>AI-Powered</strong> Workforce <strong>Mobility</strong> — Built for Japan, <strong>Scalable</strong> Across Asia',
    'From <strong>Screening</strong> to <strong>Productivity Amplification</strong> — All Powered by <strong>Agentic AI</strong>',
    '<strong>Voice-First UX</strong> That Speaks Japanese, English, Mandarin, Korean, Tagalog and Bahasa',
    '<strong>Compliance Automation</strong> at 98% Accuracy — <strong>Outpacing</strong> Industry Standards',
    '¥12 <strong>Trillion</strong> Market <strong>OPPORTUNITY</strong> — No One Else Is Solving It at <strong>Scale</strong>'
  ]

  // Metric cards with our design system
  const metricCards: MetricCard[] = [
    { 
      value: '98%', 
      label: 'Compliance Precision', 
      icon: <Shield className="w-5 h-5 text-primary-400" /> 
    },
    { 
      value: '75%', 
      label: 'Accelerated Integration', 
      icon: <Zap className="w-5 h-5 text-primary-400" /> 
    },
    { 
      value: '60%', 
      label: 'Investment Efficiency', 
      icon: <DollarSign className="w-5 h-5 text-primary-400" /> 
    },
    { 
      value: '5x', 
      label: 'Client Return', 
      icon: <TrendingUp className="w-5 h-5 text-primary-400" /> 
    }
  ]

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Animation effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
      setTimeout(() => {
        setRevealContent(true)
      }, 1000)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Rotating text effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % highlightTexts.length)
    }, 5000)

    return () => clearInterval(textInterval)
  }, [highlightTexts.length])

  // Auto-carousel
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 6000)

    return () => clearInterval(autoSlideInterval)
  }, [carouselImages.length])

  return (
    <section ref={pageRef} className="relative min-h-screen overflow-hidden">
      {/* Background with our design system */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900" />
      
      {/* Hero pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-30" />

      {/* Top Hero Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative w-full flex flex-col items-center justify-center px-8 pt-32 pb-20 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: loaded ? 1 : 0, 
            y: loaded ? 0 : 30 
          }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-extralight tracking-[0.2em] text-center leading-tight max-w-5xl mb-2 text-white"
        >
          Workforce Mobility
        </motion.h1>

        {/* Decorative separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: loaded ? 1 : 0, 
            opacity: loaded ? 0.8 : 0 
          }}
          transition={{ duration: 1.5, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="w-24 h-px my-4 bg-error-500"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: loaded ? 1 : 0, 
            y: loaded ? 0 : 20 
          }}
          transition={{ duration: 1.8, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-2xl md:text-3xl font-medium tracking-[0.15em] mb-12 text-error-500"
          style={{ fontSize: '36px' }}
        >
          POWERED BY AI
        </motion.h2>

        {/* CTA Buttons with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: loaded ? 1 : 0, 
            y: loaded ? 0 : 20 
          }}
          transition={{ duration: 1.8, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row gap-8"
        >
          <Link
            href="/why-invest"
            className="group relative px-12 py-4 overflow-hidden transition-all duration-700 w-[165px] text-center whitespace-nowrap border border-error-500 hover:border-error-400"
          >
            <span className="absolute inset-0 bg-error-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 opacity-20" />
            <span className="relative text-xs tracking-[0.2em] font-light transition-all duration-700 uppercase text-error-500 group-hover:text-white group-hover:tracking-[0.25em]">
              WHY INVEST
            </span>
          </Link>

          <Link
            href="/request-demo"
            className="group relative px-12 py-4 overflow-hidden transition-all duration-700 w-[165px] text-center whitespace-nowrap border border-primary-400 hover:border-primary-300"
          >
            <span className="absolute inset-0 bg-primary-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 opacity-20" />
            <span className="relative text-xs tracking-[0.2em] font-light transition-all duration-700 uppercase text-primary-400 group-hover:text-white group-hover:tracking-[0.25em]">
              REQUEST DEMO
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom section with 40/60 split */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-8 md:px-16 lg:px-20 mt-8">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: revealContent ? '120px' : 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="h-px mx-auto mb-16 bg-error-500/40"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: revealContent ? 1 : 0, 
            y: revealContent ? 0 : 40 
          }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          {/* LEFT COLUMN: Enhanced Carousel */}
          <div className="w-full md:w-[40%] mb-8 md:mb-0">
            <div className="aspect-[3/4] w-full relative rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    fill
                    quality={95}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority={currentImageIndex === 0}
                  />

                  {/* Caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-4 px-4">
                    <h4 className="text-xs tracking-[0.2em] font-light text-white mb-1">
                      {carouselImages[currentImageIndex].title}
                    </h4>
                    <p className="text-white/80 text-xs">
                      {carouselImages[currentImageIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced controls */}
              <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 z-20">
                <span className="text-xs text-white/90 font-light">
                  {currentImageIndex + 1}/{carouselImages.length}
                </span>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentImageIndex
                        ? 'bg-white w-6'
                        : 'bg-white/40 w-1.5 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full glass text-white/90 opacity-70 hover:opacity-100 transition-opacity z-20"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full glass text-white/90 opacity-70 hover:opacity-100 transition-opacity z-20"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full md:w-[60%]">
            {/* Platform Impact Badge */}
            <div className="mb-8">
              <span className="inline-block py-1.5 px-5 text-sm font-light tracking-[0.13em] uppercase rounded-full glass border border-error-500/40 text-error-400">
                Platform Impact
              </span>
            </div>

            {/* Rotating text */}
            <div className="relative overflow-hidden h-28 md:h-24 mb-12 w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 text-lg md:text-xl font-light leading-relaxed text-secondary-200"
                  style={{ letterSpacing: '0.03em' }}
                  dangerouslySetInnerHTML={{ __html: highlightTexts[currentTextIndex] }}
                />
              </AnimatePresence>
            </div>

            {/* Metric cards with enhanced styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-7">
              {metricCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card glass border-l-2 border-l-error-500 p-6 flex items-center hover:bg-white/10 transition-all duration-500"
                >
                  <div className="p-2.5 rounded-full mr-4 bg-primary-500/20">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-light text-primary-400" style={{ letterSpacing: '0.04em' }}>
                      {card.value}
                    </div>
                    <div className="text-sm font-light text-secondary-300" style={{ letterSpacing: '0.035em' }}>
                      {card.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer section */}
      <div className="relative z-10 px-8 md:px-24 lg:px-32 pb-40 mt-20">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h4 className="text-lg tracking-[0.15em] font-light text-secondary-200">
            DISCOVER THE EXPERIENCE
          </h4>
          <Link
            href="/solutions"
            className="group flex items-center gap-3 transition-opacity duration-500 hover:opacity-100 opacity-70"
          >
            <span className="text-xs tracking-[0.15em] text-primary-400 transition-all duration-500">
              EXPLORE FULL SUITE
            </span>
            <span className="w-8 h-px bg-primary-400 transform transition-transform duration-500 origin-left group-hover:scale-x-150" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
