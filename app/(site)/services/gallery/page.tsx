import GalleryGrid from '@/components/GalleryGrid'
import { Separator } from '@/components/ui/separator'

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Portfolio</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Real work from real clients. Every look is customized to enhance your natural beauty and match your vision.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {['All', 'Bridal', 'Editorial', 'Special FX', 'Events'].map((category) => (
          <button
            key={category}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      <Separator className="my-8" />
      
      <GalleryGrid />
    </div>
  )
}
