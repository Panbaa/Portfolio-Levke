import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState, FormEvent } from 'react'

function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Get in Touch</h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-primary-700 max-w-2xl mx-auto">
          Let's discuss your architectural vision. Whether you have a specific project in mind
          or just want to learn more about our services, we're here to help.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neutral-100 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary-900 font-medium mb-1">Office Address</h3>
                    <p className="text-primary-700">
                      Eckernförder Straße 22<br />
                      24103 Kiel<br />
                      Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary-900 font-medium mb-1">Phone</h3>
                    <p className="text-primary-700">+49 (0) 40 1234567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary-900 font-medium mb-1">Email</h3>
                    <p className="text-primary-700">info@levke-oelke.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary-900 font-medium mb-1">Office Hours</h3>
                    <p className="text-primary-700">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary-900 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-primary-900 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-accent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt