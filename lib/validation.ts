import * as z from 'zod'

export const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid phone number'),
  eventDate: z.string().min(1, 'Event date is required'),
  eventType: z.string().min(1, 'Event type is required'),
  notes: z.string().optional(),
  agreesToPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the policies to book',
  }),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
