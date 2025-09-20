import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';

const branches = [
  {
    id: 1,
    name: "Nature Farming Pvt ltd.   Kilinochchi ",
    address: "99JG+4Q9 Karadipok, Kilinochchi, Sri Lanka",
    phone: "+94 77 535 7843",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: 9:00 AM - 4:00 PM",
    services: ["Plants Supply", "Consultation", "Equipment Rental", "Training Programs"],
    manager: "Mr.Selvakumar(Regional Manager)",
    rating: 4.8,
    distance: "0 km",
    image: "https://images.unsplash.com/photo-1658864679847-c96c1794ff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwc3RvcmUlMjBicmFuY2glMjBsb2NhdGlvbnxlbnwxfHx8fDE3NTgzMDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mapsUrl: "https://www.google.com/maps/dir//a9+Kandy+-+Jaffna+Hwy,+Kilinochchi/@9.3981864,80.3255913,27494m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3afe9546eed58e7d:0x4c236d7c077cad73!2m2!1d80.4079932!2d9.3981959?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 2,
    name: "NF Plantation - Kondavil Branch",
    address: "9°41'53.8\"N 80°02'29.4\"E, Kondavil, Sri Lanka",
    phone: "",
    hours: "Mon-Sat: 8:30 AM - 5:30 PM, Sun: Closed",
    services: ["Plants Supply", "Fertilizers", "Pest Control", "Consultation"],
    manager: "Ms. G.Thamiliny",
    rating: 4.6,
    distance: "45 km",
    image: "https://images.unsplash.com/photo-1658864679847-c96c1794ff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwc3RvcmUlMjBicmFuY2glMjBsb2NhdGlvbnxlbnwxfHx8fDE3NTgzMDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mapsUrl: "https://www.google.com/maps/place/9%C2%B041'53.8%22N+80%C2%B002'29.4%22E/@9.6982744,80.0389221,858m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d9.6982744!4d80.041497?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 3,
    name: "Nature Farming Pvt ltd - Kalmunai Branch",
    address: "7°25'14.3\"N 81°49'14.3\"E, Kalmunai, Sri Lanka",
    phone: "+94 77 620 6834",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM, Sun: Closed",
    services: ["Plants Supply", "Training Programs", "Equipment Sales"],
    manager: "Mr. A.Mohanasuntharn , zonal manager",
    rating: 4.4,
    distance: "125 km",
    image: "https://images.unsplash.com/photo-1658864679847-c96c1794ff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwc3RvcmUlMjBicmFuY2glMjBsb2NhdGlvbnxlbnwxfHx8fDE3NTgzMDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mapsUrl: "https://www.google.com/maps/place/7%C2%B025'14.3%22N+81%C2%B049'14.3%22E/@7.4206394,81.8180591,864m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d7.4206394!4d81.820634?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 4,
    name: "Nature Farming (Pvt) ltd - Vavuniya Branch",
    address: "8°45'09.0\"N 80°29'55.9\"E, Vavuniya, Sri Lanka",
    phone: "",
    hours: "Mon-Sat: 8:00 AM - 5:00 PM, Sun: 10:00 AM - 2:00 PM",
    services: ["Plants Supply", "Organic Fertilizers", "Consultation"],
    manager: "Ms K.Lojiny, Regional Manager",
    rating: 4.5,
    distance: "65 km",
    image: "https://images.unsplash.com/photo-1658864679847-c96c1794ff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwc3RvcmUlMjBicmFuY2glMjBsb2NhdGlvbnxlbnwxfHx8fDE3NTgzMDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mapsUrl: "https://www.google.com/maps/place/8%C2%B045'09.0%22N+80%C2%B029'55.9%22E/@8.7525113,80.4962939,861m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d8.7525113!4d80.4988688?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 5,
    name: "NF Plantation - Mallavi Branch",
    address: "9°08'06.7\"N 80°18'42.6\"E, Mallavi, Sri Lanka",
    phone: "+94 77 005 5759",
    hours: "Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 3:00 PM, Sun: Closed",
    services: ["Plants Supply", "Soil Testing", "Crop Planning"],
    manager: "Mr. Anushan (Regional Manager)",
    rating: 4.3,
    distance: "42 km",
    image: "https://images.unsplash.com/photo-1658864679847-c96c1794ff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwc3RvcmUlMjBicmFuY2glMjBsb2NhdGlvbnxlbnwxfHx8fDE3NTgzMDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mapsUrl: "https://www.google.com/maps/place/9%C2%B008'06.7%22N+80%C2%B018'42.6%22E/@9.1352004,80.3070641,1720m/data=!3m1!1e3!4m4!3m3!8m2!3d9.1352004!4d80.3118277?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 6,
    name: "Natural plantation Pvt ltd , puthukudijiruppu",
    address: "9°19'02.7\"N 80°41'23.6\"E, Puthukudijiruppu, Sri Lanka",
    phone: "",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: 9:00 AM - 4:00 PM",
    services: ["Plants Supply", "Equipment Rental", "Training Programs", "Consultation"],
    manager: "Ms. J.Sankavi (Regional Manager)",
    rating: 4.7,
    distance: "58 km",
    image: "https://images.unsplash.com/photo-1658864679847-c96c1794ff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwc3RvcmUlMjBicmFuY2glMjBsb2NhdGlvbnxlbnwxfHx8fDE3NTgzMDE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mapsUrl: "https://www.google.com/maps/place/9%C2%B019'02.7%22N+80%C2%B041'23.6%22E/@9.3174277,80.68731,859m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d9.3174277!4d80.6898849?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
  }
];

export function BranchesSection() {
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredBranches, setFilteredBranches] = useState(branches);

  const handleSearch = () => {
    if (searchLocation.trim() === '') {
      setFilteredBranches(branches);
    } else {
      const filtered = branches.filter(branch => 
        branch.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchLocation.toLowerCase())
      );
      setFilteredBranches(filtered);
    }
  };

  const handleGetDirections = (branch: any) => {
    if (branch.mapsUrl) {
      window.open(branch.mapsUrl, '_blank');
    } else {
      const encodedAddress = encodeURIComponent(branch.address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-current text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="branches" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4" style={{ color: 'var(--primary-green)', fontFamily: 'var(--font-primary)' }}>
            Find Nearby Branches
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}>
            Visit our branches across Sri Lanka for plants, consultation, and farming services. Find the nearest location to you.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 bg-white border" style={{ borderColor: 'var(--primary-green)' }}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="location-search">Search by location or branch name</Label>
                <Input
                  id="location-search"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="e.g., Jaffna, Vavuniya, or branch name"
                  className="mt-1"
                />
              </div>
              <Button 
                onClick={handleSearch}
                style={{ backgroundColor: 'var(--primary-green)' }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <Card key={branch.id} className="bg-white hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm font-medium"
                     style={{ color: 'var(--primary-green)' }}>
                  {branch.distance}
                </div>
                {branch.id === 1 && (
                  <div className="absolute top-2 left-2 bg-opacity-90 px-2 py-1 rounded text-xs text-white"
                       style={{ backgroundColor: 'var(--accent-red)' }}>
                    Main Branch
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg" style={{ color: 'var(--primary-green)', fontFamily: 'var(--font-primary)' }}>
                  {branch.name}
                </CardTitle>
                <div className="flex items-center space-x-1">
                  {renderStars(branch.rating)}
                  <span className="text-sm text-gray-600 ml-2">({branch.rating})</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--primary-green)' }} />
                  <p className="text-sm text-gray-600">{branch.address}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--primary-green)' }} />
                  <p className="text-sm text-gray-600">{branch.phone}</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--primary-green)' }} />
                  <p className="text-sm text-gray-600">{branch.hours}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--primary-green)' }}>Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {branch.services.map((service, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: 'var(--primary-green)' }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Manager:</span> {branch.manager}
                  </p>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(`tel:${branch.phone}`, '_self')}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    style={{ backgroundColor: 'var(--primary-green)' }}
                    onClick={() => handleGetDirections(branch)}
                  >
                    <Navigation className="h-3 w-3 mr-1" />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No branches found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all available branches.</p>
            <Button 
              onClick={() => {
                setSearchLocation('');
                setFilteredBranches(branches);
              }}
              className="mt-4"
              style={{ backgroundColor: 'var(--primary-green)' }}
            >
              Show All Branches
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}