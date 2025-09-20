import { User, Users, FileText, TrendingUp } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      image: "data:image/webp;base64,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",
      icon: <User className="h-6 w-6" style={{ color: 'var(--primary-green)' }} />,
      title: "Farmer Registration",
      description: "Join our network of dedicated farmers and gain access to resources, training, and market opportunities"
    },
    {
      image: "https://th.bing.com/th/id/OIP.LeNzsJlPZQLhf7gFLXQ7OwHaEK?w=330&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      icon: <Users className="h-6 w-6" style={{ color: 'var(--primary-green)' }} />,
      title: "User Community",
      description: "Connect with a community of users who value natural, sustainable farming practices"
    },
    {
      image: "https://images.unsplash.com/photo-1630450364945-0c1ec2c449cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzU3NjY3NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: <FileText className="h-6 w-6" style={{ color: 'var(--primary-green)' }} />,
      title: "Demand Entry System",
      description: "Easy-to-use platform for users to submit their agricultural product demands and requirements"
    }
  ];

  const marketAnalytics = {
    image: "https://th.bing.com/th/id/OIP.V8dOZknlodCGkC1rIQ5wgAHaE8?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    icon: <TrendingUp className="h-6 w-6" style={{ color: 'var(--primary-green)' }} />,
    title: "Market Analytics",
    description: "Real-time market insights and demand forecasting to help farmers make informed decisions"
  };

  return (
    <section id="services" className="py-20" style={{ backgroundColor: 'var(--background-light)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
          >
            Our Services
          </h2>
          <p 
            className="text-lg max-w-4xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
          >
            Connecting farmers and users through innovative nature farming solutions and community-driven agriculture
          </p>
        </div>

        {/* Top Row - 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-green-50 p-2 rounded-lg mr-3">
                    {service.icon}
                  </div>
                </div>
                <h3 
                  className="text-xl mb-3"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Market Analytics (Single Card) */}
        <div className="flex justify-start">
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video">
              <img 
                src={marketAnalytics.image} 
                alt={marketAnalytics.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-green-50 p-2 rounded-lg mr-3">
                  {marketAnalytics.icon}
                </div>
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
              >
                {marketAnalytics.title}
              </h3>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
              >
                {marketAnalytics.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}