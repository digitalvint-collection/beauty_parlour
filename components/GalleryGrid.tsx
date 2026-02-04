'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'
import galleryData from '@/data/gallery.json'

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {galleryData.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-muted transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setSelectedImage(image)}
            aria-label={`View gallery image ${image.id}: ${image.caption}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
              loading="lazy"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="w-full rounded bg-black/70 p-2 text-xs text-white backdrop-blur-sm">
                {image.caption}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          allImages={galleryData}
        />
      )}
    </>
  )
}
