import { Mail, Phone } from 'lucide-react'

function Kontakt() {

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Kontaktieren Sie mich</h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-primary-700 max-w-2xl mx-auto">
          Lassen Sie uns über mögliche Projekte oder Ihre Ideen sprechen.
          Ich freue mich darauf, von Ihnen zu hören und gemeinsam an inspirierenden Lösungen zu arbeiten.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neutral-100 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Kontaktinformation</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  {/* <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary-900 font-medium mb-1">Postadresse</h3>
                    <p className="text-primary-700">
                      Eckernförder Straße 22<br />
                      24103 Kiel<br />
                      Deutschland
                    </p>
                  </div> */}
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary-900 font-medium mb-1">Telefon</h3>
                    <p className="text-primary-700">+49 1577 1600414</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-primary-900 font-medium mb-1">Email</h3>
                    <p className="text-primary-700">l.oelke@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontakt