import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { useAuth } from './AuthContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Sprout, ShoppingCart, Leaf } from 'lucide-react';

const seedTypes = [
  { name: 'Rice Seeds', price: 150, unit: 'kg', description: 'High-quality rice seeds for paddy cultivation' },
  { name: 'Wheat Seeds', price: 120, unit: 'kg', description: 'Premium wheat seeds for grain production' },
  { name: 'Corn Seeds', price: 200, unit: 'kg', description: 'Hybrid corn seeds with high yield potential' },
  { name: 'Aloe Vera Plant', price: 800, unit: 'plant', description: 'Premium aloe vera plants for medicinal and commercial use' }
];

export function SeedsSection() {
  const { user, getAccessToken } = useAuth();
  const [orderForm, setOrderForm] = useState({
    seedType: '',
    quantity: '',
    location: '',
    phoneNumber: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const selectedSeed = seedTypes.find(seed => seed.name === orderForm.seedType);
  const totalPrice = selectedSeed && orderForm.quantity ? 
    selectedSeed.price * parseInt(orderForm.quantity) : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please login to place an order');
      return;
    }

    setSubmitting(true);

    try {
      const accessToken = await getAccessToken();
      
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-be9f0d97/submit-seed-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          ...orderForm,
          seedPrice: selectedSeed?.price,
          totalPrice,
          unit: selectedSeed?.unit
        })
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Order submitted successfully! We will contact you soon.');
        setOrderForm({
          seedType: '',
          quantity: '',
          location: '',
          phoneNumber: '',
          notes: ''
        });
      } else {
        toast.error(result.error || 'Failed to submit order');
      }
    } catch (error) {
      console.log('Error submitting order:', error);
      toast.error('Failed to submit order. Please try again.');
    }

    setSubmitting(false);
  };

  return (
    <section id="buy" className="py-16" style={{ backgroundColor: 'var(--secondary-green)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4" style={{ color: 'var(--primary-green)', fontFamily: 'var(--font-primary)' }}>
            Premium Plants & Seeds Collection
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}>
            Get high-quality plants and seeds delivered to your doorstep. Our premium collection ensures the best yields for your farming needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Seeds Display */}
          <div>
            <div className="mb-8">
              <ImageWithFallback
                src="data:image/webp;base64,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"
                alt="Premium Seeds"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {seedTypes.map((seed, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Sprout className="h-5 w-5" style={{ color: 'var(--primary-green)' }} />
                      <CardTitle className="text-sm" style={{ color: 'var(--primary-green)' }}>
                        {seed.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-2">{seed.description}</p>
                    <p className="font-medium" style={{ color: 'var(--accent-red)' }}>
                      LKR {seed.price} / {seed.unit}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2" style={{ color: 'var(--primary-green)' }}>
                <ShoppingCart className="h-5 w-5" />
                <span>Place Your Order</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!user ? (
                <div className="text-center py-8">
                  <Leaf className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--primary-green)' }} />
                  <p className="text-gray-600 mb-4">Please login to place an order</p>
                  <Button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ backgroundColor: 'var(--primary-green)' }}
                  >
                    Go to Login
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="seedType">Seed Type</Label>
                    <Select value={orderForm.seedType} onValueChange={(value) => setOrderForm({ ...orderForm, seedType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select seed type" />
                      </SelectTrigger>
                      <SelectContent>
                        {seedTypes.map((seed) => (
                          <SelectItem key={seed.name} value={seed.name}>
                            {seed.name} - LKR {seed.price}/{seed.unit}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={orderForm.quantity}
                      onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                      placeholder="Enter quantity"
                      required
                      min="1"
                    />
                  </div>

                  {totalPrice > 0 && (
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--secondary-green)' }}>
                      <p className="font-medium" style={{ color: 'var(--primary-green)' }}>
                        Total Price: LKR {totalPrice.toLocaleString()}
                      </p>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="location">Delivery Location</Label>
                    <Input
                      id="location"
                      value={orderForm.location}
                      onChange={(e) => setOrderForm({ ...orderForm, location: e.target.value })}
                      placeholder="Enter your address"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={orderForm.phoneNumber}
                      onChange={(e) => setOrderForm({ ...orderForm, phoneNumber: e.target.value })}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={orderForm.notes}
                      onChange={(e) => setOrderForm({ ...orderForm, notes: e.target.value })}
                      placeholder="Any special requirements or notes"
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    style={{ backgroundColor: 'var(--primary-green)' }}
                    disabled={submitting || !orderForm.seedType || !orderForm.quantity}
                  >
                    {submitting ? 'Submitting Order...' : 'Place Order'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}