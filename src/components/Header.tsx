import { useState } from "react";
import { Button } from "./ui/button";
import { AuthDialog } from "./AuthDialog";
import { useAuth } from "./AuthContext";
import { User, Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import logoImage from "figma:asset/4af52e66cb1f2ac0619b3df667c634eb44902bb8.png";

export function Header() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [defaultAuthTab, setDefaultAuthTab] = useState<'login' | 'register'>('login');
  const { user, signOut } = useAuth();

  const handleLoginClick = () => {
    setDefaultAuthTab('login');
    setAuthDialogOpen(true);
  };

  const handleRegisterClick = () => {
    setDefaultAuthTab('register');
    setAuthDialogOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src={logoImage} 
                alt="Natural Plantation Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}>
                Nature Farming (Pvt) ltd
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:opacity-80 transition-opacity"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:opacity-80 transition-opacity"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('buy')}
                className="hover:opacity-80 transition-opacity"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
              >
                Buy
              </button>
              <button 
                onClick={() => scrollToSection('vlog')}
                className="hover:opacity-80 transition-opacity"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
              >
                Vlog
              </button>
              <button 
                onClick={() => scrollToSection('branches')}
                className="hover:opacity-80 transition-opacity"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
              >
                Branches
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:opacity-80 transition-opacity"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}
              >
                Contact
              </button>
            </nav>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{user.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => scrollToSection('buy')}>
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={signOut}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button 
                    variant="ghost"
                    onClick={handleLoginClick}
                    className="hidden md:block"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    Login
                  </Button>
                  <Button 
                    onClick={handleRegisterClick}
                    className="hidden md:block"
                    style={{ 
                      backgroundColor: 'var(--primary-green)', 
                      color: 'white',
                      fontFamily: 'var(--font-secondary)'
                    }}
                  >
                    Register
                  </Button>
                </>
              )}
              
              {/* Mobile menu button */}
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AuthDialog 
        isOpen={authDialogOpen} 
        onClose={() => setAuthDialogOpen(false)}
        defaultTab={defaultAuthTab}
      />
    </>
  );
}