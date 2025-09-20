export function ImpactSection() {
  const stats = [
    {
      number: "500+",
      label: "Registered Farmers",
      description: "Active farmers in our network"
    },
    {
      number: "1,000+",
      label: "Products Listed",
      description: "Quality agricultural products"
    },
    {
      number: "2,500+",
      label: "Demand Entries",
      description: "Market demand requests processed"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Successful crop yield improvement"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--primary-green)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4 text-white"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Our Community Impact
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto text-white/90"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Building a stronger agricultural community through sustainable practices and innovative farming solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div 
                className="text-5xl mb-2"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-xl mb-2"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                {stat.label}
              </div>
              <div 
                className="text-sm opacity-80"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}