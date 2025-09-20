import logoImage from "../assets/4af52e66cb1f2ac0619b3df667c634eb44902bb8.png";

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logoImage} 
                alt="Natural Plantation Logo" 
                className="h-8 w-8"
              />
              <span 
                className="text-xl"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Nature Farming (Pvt) ltd
              </span>
            </div>
            <p 
              className="mb-4 max-w-md opacity-90"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Dedicated to sustainable farming practices and organic cultivation methods that preserve our environment while providing the highest quality agricultural products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg mb-4"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#marketing" 
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  Marketing
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-lg mb-4"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Contact Info
            </h4>
            <div className="space-y-2 opacity-80">
              <p style={{ fontFamily: 'var(--font-secondary)' }}>
                NF Plantation<br />
                99JG+4Q9 Karadipok<br />
                Kilinochchi, Sri Lanka
              </p>
              <p style={{ fontFamily: 'var(--font-secondary)' }}>
                +94 74 268 4140
              </p>
              <p style={{ fontFamily: 'var(--font-secondary)' }}>
                info@naturalplantation.lk
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p 
            className="opacity-60"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            © 2025 NF Colding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}