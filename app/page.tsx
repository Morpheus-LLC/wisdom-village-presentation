"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { slides } from "@/components/slides-data"
import SlideRenderer from "@/components/slide-renderer"

export default function WisdomVillagePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">Wisdom Village</h1>
            <span className="text-muted-foreground">Leadership Presentation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
            <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Presentation Area */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="h-[calc(100vh-200px)]">
            {/* Main Slide Display */}
            <Card className="h-full bg-card border-border shadow-lg">
              <div className="h-full p-8 overflow-y-auto">
                <SlideRenderer slide={slides[currentSlide]} />
              </div>
            </Card>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <Button variant="outline" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
