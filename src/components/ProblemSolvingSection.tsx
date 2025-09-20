import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { HelpCircle, MessageCircle, Search, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const commonProblems = [
  {
    category: "Pest Control",
    problems: [
      {
        question: "How do I deal with aphids on my tomato plants?",
        answer: "Use neem oil spray or introduce ladybugs as natural predators. For severe infestations, use insecticidal soap. Apply treatments in the evening to avoid harming beneficial insects."
      },
      {
        question: "What should I do about fungal diseases in humid weather?",
        answer: "Improve air circulation, avoid overhead watering, and apply fungicides preventively. Remove affected plant parts immediately and dispose of them away from your garden."
      }
    ]
  },
  {
    category: "Soil Management",
    problems: [
      {
        question: "My soil is too acidic. How can I fix it?",
        answer: "Add lime to raise pH levels. Use dolomitic lime for magnesium-deficient soils. Test soil pH regularly and adjust gradually over several seasons for best results."
      },
      {
        question: "How do I improve clay soil drainage?",
        answer: "Add organic matter like compost, create raised beds, or install drainage tiles. Avoid working clay soil when it's wet to prevent compaction."
      }
    ]
  },
  {
    category: "Crop Management",
    problems: [
      {
        question: "When is the best time to harvest different crops?",
        answer: "Each crop has specific indicators. For tomatoes, harvest when fully colored but still firm. For leafy greens, harvest in the morning when leaves are crisp. Check our harvest calendar for specific timing."
      },
      {
        question: "How do I rotate crops effectively?",
        answer: "Follow a 3-4 year rotation cycle. Don't plant the same family of crops in the same spot consecutively. Use legumes to fix nitrogen, followed by heavy feeders like brassicas."
      }
    ]
  },
  {
    category: "Weather Issues",
    problems: [
      {
        question: "How do I protect crops from frost?",
        answer: "Use row covers, water well before frost (moist soil retains heat), or use frost blankets. For emergency protection, use sheets or tarps but remove them in the morning."
      },
      {
        question: "What should I do during drought conditions?",
        answer: "Mulch heavily to retain moisture, use drip irrigation, harvest rainwater, and choose drought-tolerant varieties. Water deeply but less frequently to encourage deep root growth."
      }
    ]
  }
];

export function ProblemSolvingSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [questionForm, setQuestionForm] = useState({
    name: '',
    email: '',
    category: '',
    question: '',
    urgency: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const filteredProblems = commonProblems.filter(category => {
    const matchesCategory = selectedCategory === 'all' || category.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      category.problems.some(problem => 
        problem.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        problem.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleSubmitQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Question submitted successfully! Our experts will respond within 24 hours.');
      setQuestionForm({
        name: '',
        email: '',
        category: '',
        question: '',
        urgency: ''
      });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="problems" className="py-16" style={{ backgroundColor: 'var(--secondary-green)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4" style={{ color: 'var(--primary-green)', fontFamily: 'var(--font-primary)' }}>
            Farming Problem Solutions
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}>
            Get expert help for your farming challenges. Browse common solutions or submit your specific questions to our agricultural experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search and Browse Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2" style={{ color: 'var(--primary-green)' }}>
                  <Search className="h-5 w-5" />
                  <span>Search Solutions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="search">Search problems or solutions</Label>
                    <Input
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="e.g., aphids, soil pH, harvest time"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Filter by category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All categories</SelectItem>
                        {commonProblems.map(cat => (
                          <SelectItem key={cat.category} value={cat.category}>
                            {cat.category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredProblems.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2" style={{ color: 'var(--primary-green)' }}>
                      <HelpCircle className="h-5 w-5" />
                      <span>{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      {category.problems.map((problem, problemIndex) => (
                        <AccordionItem key={problemIndex} value={`${categoryIndex}-${problemIndex}`}>
                          <AccordionTrigger className="text-left">
                            {problem.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex space-x-3">
                              <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--primary-green)' }} />
                              <p style={{ fontFamily: 'var(--font-secondary)' }}>
                                {problem.answer}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ask Expert Section */}
          <div>
            <Card className="bg-white mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2" style={{ color: 'var(--primary-green)' }}>
                  <MessageCircle className="h-5 w-5" />
                  <span>Ask Our Experts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649426710526-861371557a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBjb25zdWx0YXRpb24lMjBoZWxwfGVufDF8fHx8MTc1ODMwMTY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Expert Consultation"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <form onSubmit={handleSubmitQuestion} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={questionForm.name}
                      onChange={(e) => setQuestionForm({ ...questionForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={questionForm.email}
                      onChange={(e) => setQuestionForm({ ...questionForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="question-category">Problem Category</Label>
                    <Select value={questionForm.category} onValueChange={(value: string) => setQuestionForm({ ...questionForm, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {commonProblems.map(cat => (
                          <SelectItem key={cat.category} value={cat.category}>
                            {cat.category}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select value={questionForm.urgency} onValueChange={(value: string) => setQuestionForm({ ...questionForm, urgency: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="medium">Medium - Need help soon</SelectItem>
                        <SelectItem value="high">High - Urgent problem</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="question">Your Question</Label>
                    <Textarea
                      id="question"
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({ ...questionForm, question: e.target.value })}
                      placeholder="Describe your farming problem in detail..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    style={{ backgroundColor: 'var(--primary-green)' }}
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Question'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-4">
                <h4 className="font-medium mb-2" style={{ color: 'var(--primary-green)' }}>
                  Expert Response Time
                </h4>
                <ul className="text-sm space-y-1" style={{ color: 'var(--text-primary)' }}>
                  <li>• Low priority: 2-3 days</li>
                  <li>• Medium priority: 24-48 hours</li>
                  <li>• High priority: 4-8 hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}