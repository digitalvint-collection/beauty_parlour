import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Calendar, Camera, Award } from 'lucide-react'

export default function Home() {
  const features = [
    { icon: <Sparkles className="h-8 w-8 text-primary" />, title: 'Bridal Specialization', description: 'Flawless makeup that lasts through tears, dancing, and photos' },
    { icon: <Calendar className="h-8 w-8 text-primary" />, title: 'On-Site Services', description: 'We come to you - hotels, venues, or our studio' },
    { icon: <Camera className="h-8 w-8 text-primary" />, title: 'Photography Ready', description: 'HD makeup perfected for digital and film' },
    { icon: <Award className="h-8 w-8 text-primary" />, title: 'Award Winning', description: 'Featured in Vogue, Brides Magazine, and local publications' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-pink-50 py-20 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1920&q=80')] bg-cover bg-center opacity-10" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Where <span className="text-primary">Artistry</span> Meets <span className="text-pink-500">Confidence</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Professional makeup artistry for weddings, events, and special moments. 
              Personalized consultations to bring your vision to life.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/booking">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Promise</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Every client receives personalized attention and premium products for a flawless, long-lasting finish.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg transition-all hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-6 pt-8">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Ready for Your Moment to Shine?
            </h2>
            <p className="mb-8 text-lg text-primary-50 md:text-xl">
              Limited bookings available each month. Secure your date with a complimentary consultation.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/booking">Reserve Your Date Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
