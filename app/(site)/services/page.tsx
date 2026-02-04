import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DollarSign, Clock, Sparkles } from 'lucide-react'
import servicesData from '@/data/services.json'

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Premium makeup artistry using luxury products. All services include personalized consultation and touch-up kit.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Card key={service.id} className="overflow-hidden border border-border/50 hover:shadow-lg transition-shadow">
            {service.featured && (
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Featured</Badge>
              </div>
            )}
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </div>
                <div className="rounded-full bg-primary/10 p-2">
                  {service.icon === 'bridal' && <Sparkles className="h-6 w-6 text-primary" />}
                  {service.icon === 'event' && <Clock className="h-6 w-6 text-primary" />}
                  {service.icon === 'trial' && <DollarSign className="h-6 w-6 text-primary" />}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Includes:</h4>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                    {service.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t">
                  {service.addOns.map((addon, index) => (
                    <Badge key={index} variant="outline">{addon}</Badge>
                  ))}
                </div>
                <div className="pt-3 border-t flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Badge variant="secondary">{service.duration}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-muted/50 p-6 rounded-xl border">
        <h2 className="text-2xl font-bold mb-4 text-center">Booking Notes</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• 50% deposit required to secure wedding/event dates</li>
          <li>• Trial sessions recommended 4-8 weeks before event</li>
          <li>• Travel fees apply for locations beyond 25 miles</li>
          <li>• All products are hypoallergenic and cruelty-free</li>
        </ul>
      </div>
    </div>
  )
}
