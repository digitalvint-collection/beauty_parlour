'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { CalendarIcon, Loader2 } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { bookingSchema } from '@/lib/validation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type BookingFormValues = z.infer<typeof bookingSchema>

export default function BookingPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      notes: '',
      agreesToPolicy: false,
    },
  })

  async function onSubmit(data: BookingFormValues) {
    setIsLoading(true)
    // Mock API call - replace with actual endpoint in production
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
    console.log('Booking submitted:', data)
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto border border-green-200 bg-green-50">
          <CardHeader>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <CardTitle className="text-2xl text-center text-green-800">Booking Confirmed!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg">Thank you for booking with Lumière Beauty Studio!</p>
            <div className="bg-white p-4 rounded-lg border">
              <p className="font-medium">Next Steps:</p>
              <ul className="mt-2 text-left space-y-1 text-muted-foreground">
                <li>• You'll receive a confirmation email within 1 hour</li>
                <li>• We'll contact you within 24 hours to schedule your consultation</li>
                <li>• Prepare inspiration photos for your trial session</li>
              </ul>
            </div>
            <Button asChild>
              <a href="/">Return Home</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Book Your Session</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Fill out the form below and we'll contact you within 24 hours to confirm availability and schedule your consultation.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Session Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Date *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(new Date(field.value), "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date)
                              field.onChange(date?.toISOString().split('T')[0])
                            }}
                            disabled={(date) => date < new Date() || date > new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        We require at least 2 weeks notice for bookings
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type *</FormLabel>
                      <FormControl>
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="bridal-trial">Bridal Trial</option>
                          <option value="photoshoot">Photoshoot</option>
                          <option value="special-event">Special Event</option>
                          <option value="prom">Prom</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your vision, skin concerns, inspiration photos, or special requests..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The more details you provide, the better we can prepare for your session
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreesToPolicy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the <a href="/policy" className="text-primary hover:underline">Booking Policy</a> and <a href="/policy#privacy" className="text-primary hover:underline">Privacy Policy</a> *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Submit Booking Request'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="mt-8 max-w-3xl mx-auto text-sm text-muted-foreground border-t pt-6">
        <p className="font-medium mb-2">Booking Policy Highlights:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>50% deposit required to secure wedding dates</li>
          <li>24-hour cancellation policy for trials and appointments</li>
          <li>Travel fees apply beyond 25-mile radius</li>
          <li>All sessions include a complimentary touch-up kit</li>
        </ul>
      </div>
    </div>
  )
}
