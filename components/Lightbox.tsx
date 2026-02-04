'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

interface LightboxProps {
  image: { id: string; src: string; alt: string; caption: string }
  onClose: () => void
  allImages: { id: string; src: string; alt: string; caption: string }[]
}

export default function Lightbox({ image, onClose, allImages }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(() => 
    allImages.findIndex(img => img.id === image.id)
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length)
  }

  const currentImg = allImages[currentIndex]

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg">
        <img
          src={currentImg.src}
          alt={currentImg.alt}
          className="max-h-[80vh] max-w-[90vw] object-contain"
          width={800}
          height={800}
        />
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <p className="text-lg font-medium">{currentImg.caption}</p>
          <p className="text-sm text-gray-300">
            {currentIndex + 1} of {allImages.length}
          </p>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </Button>
        
        {allImages.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
