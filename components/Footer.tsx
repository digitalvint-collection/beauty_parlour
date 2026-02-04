import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from './ui/button'

const footerLinks = {
  services: [
    { name: 'Bridal Makeup', href: '/services#bridal' },
    { name: 'Trial Sessions', href: '/services#trial' },
    { name: 'Event Makeup', href: '/services#event' },
    { name: 'Airbrush Makeup', href: '/services#airbrush' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Artists', href: '/about#team' },
    { name: 'Testimonials', href: '/about#testimonials' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Booking Policy', href: '/policy' },
    { name: 'Privacy Policy', href: '/policy#privacy' },
    { name: 'Terms of Service', href: '/policy#terms' },
    { name: 'FAQ', href: '/faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-bold text-xl">
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Lumière</span>
              <span className="text-muted-foreground">Studio</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Professional makeup artistry creating confident beauty for life's most important moments since 2010.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'facebook', 'twitter'].map((social) => {
                const Icon = { instagram: Instagram, facebook: Facebook, twitter: Twitter }[social]
                return (
                  <Button key={social} variant="ghost" size="icon" asChild>
                    <a href={`https://${social}.com/yourhandle`} aria-label={`${social.charAt(0).toUpperCase() + social.slice(1)} link`}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>123 Beauty Lane, Studio City, CA 91604</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <Link href="tel:+13105551234" className="hover:text-primary">(310) 555-1234</Link>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <Link href="mailto:hello@lumierebeauty.com" className="hover:text-primary">
                  hello@lumierebeauty.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Lumière Beauty Studio. All rights reserved. 
            <span className="block mt-1 md:inline md:ml-2">
              Designed with ❤️ in California
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
