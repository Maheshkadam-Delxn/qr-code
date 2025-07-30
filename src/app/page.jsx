import Link from "next/link"
import { Instagram, Facebook, Mail, Globe } from "lucide-react"
import Image from 'next/image';

export default function SocialMediaPage() {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: Facebook,
      description: "Connect on Facebook",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: Instagram,
      description: "See my photos",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Mail,
      description: "Send me an email",
    },
    {
      name: "Website",
      url: "https://yourwebsite.com",
      icon: Globe,
      description: "Visit my website",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-200">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
         {/* Profile Section */}
<div className="mb-12">
  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-green-500 p-1">
    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
      <Image 
        src="/images/farmferry-logo.png" 
        alt="FarmFerry Logo"
        width={128}
        height={128}
        className="object-contain p-2"
      />
    </div>
  </div>
  <h1 className="text-4xl font-bold text-gray-800 mb-4">FARMFERRY</h1>
  <p className="text-xl text-gray-700 mb-2">Fresh Farm Deliveries Made Simple</p>
  <p className="text-gray-600 max-w-md mx-auto">
    Better everyday health begins with the basics. We source Milk, Groceries, Fruits, Yogurts, Eggs, vegetables and all other essentials fresh from the best farms in India.
  </p>
</div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-green-400"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-1 transition-colors duration-300">{social.name}</h3>
                      <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                        {social.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            
          </div>
        </div>
      </div>
    </div>
  )
}