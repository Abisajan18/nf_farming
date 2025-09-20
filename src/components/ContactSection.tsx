import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function ContactSection() {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-be9f0d97/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(contactForm)
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setContactForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.log('Error sending contact form:', error);
      toast.error('Failed to send message. Please try again.');
    }

    setSubmitting(false);
  };
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
          >
            Contact Us
          </h2>
          <p 
            className="text-lg max-w-4xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
          >
            Connect with us for farmer registration, user platform access, or partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div>
            <h3 
              className="text-2xl mb-8"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
            >
              Get In Touch
            </h3>

            <div className="space-y-8">
              {/* Email Section */}
              <div>
                <div className="flex items-center mb-3">
                  <Mail className="h-5 w-5 mr-3" style={{ color: 'var(--primary-green)' }} />
                  <h4 
                    className="text-lg"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
                  >
                    Email
                  </h4>
                </div>
                <div className="ml-8 space-y-1">
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    info@nfcolding.com
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    support@nfcolding.com
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div>
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 mr-3" style={{ color: 'var(--primary-green)' }} />
                  <h4 
                    className="text-lg"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
                  >
                    Phone
                  </h4>
                </div>
                <div className="ml-8 space-y-1">
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    +94 74 268 4140
                  </p>
                </div>
              </div>

              {/* Address Section */}
              <div>
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 mr-3" style={{ color: 'var(--primary-green)' }} />
                  <h4 
                    className="text-lg"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
                  >
                    Address
                  </h4>
                </div>
                <div className="ml-8">
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    NF Plantation<br />
                    99JG+4Q9 Karadipok, Kilinochchi,<br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              {/* Business Hours Section */}
              <div>
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 mr-3" style={{ color: 'var(--primary-green)' }} />
                  <h4 
                    className="text-lg"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
                  >
                    Business Hours
                  </h4>
                </div>
                <div className="ml-8 space-y-1">
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    Monday - Saturday: 8:00 AM - 6:00 PM
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    Sunday: 8:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas Section */}
            <div className="mt-12">
              <h4 
                className="text-lg mb-4"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
              >
                Service Areas
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    Farmer Support
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    Membership Services
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    Market Analytics
                  </p>
                </div>
                <div className="space-y-2">
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    User Platform
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    Demand Management
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                    Community Building
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 
              className="text-2xl mb-8"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
            >
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="w-full"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  value={contactForm.firstName}
                  onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                  required
                />
                <Input 
                  placeholder="Last Name" 
                  className="w-full"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  value={contactForm.lastName}
                  onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Phone Number" 
                  className="w-full"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  className="w-full"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={6} 
                  className="w-full resize-none"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-3"
                style={{ 
                  backgroundColor: 'var(--primary-green)', 
                  color: 'white',
                  fontFamily: 'var(--font-secondary)'
                }}
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}