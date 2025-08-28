"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { slides } from "@/components/slides-data"
import SlideRenderer from "@/components/slide-renderer"

export default function WisdomVillagePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      nextSlide()
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide()
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        nextSlide()
      }
      if (e.key === "ArrowLeft" && currentSlide > 0) {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide])

  return (
    <div
      className="h-screen w-screen bg-background relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="h-full w-full">
        <SlideRenderer slide={slides[currentSlide]} />
      </div>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 md:gap-4 z-10 px-4">
        <Button
          variant="outline"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-white/90 backdrop-blur-sm hover:bg-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 h-10 md:h-auto min-w-[80px] md:min-w-[100px]"
        >
          <ChevronLeft className="h-4 w-4 mr-1 md:mr-2" />
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">Prev</span>
        </Button>

        <div className="flex items-center gap-1 md:gap-2 mx-2 md:mx-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white/90 backdrop-blur-sm hover:bg-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 h-10 md:h-auto min-w-[80px] md:min-w-[100px]"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="h-4 w-4 ml-1 md:ml-2" />
        </Button>
      </div>

      <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs md:text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}
