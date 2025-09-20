import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Clock, User, Eye } from 'lucide-react';

const vlogVideos = [
  {
    id: 1,
    title: "Modern Farming Techniques for Better Yield",
    description: "Learn about the latest farming techniques that can increase your crop yield by up to 40%.",
    thumbnail: "https://images.unsplash.com/photo-1684954215462-cad9f3693b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdGVjaG5pcXVlcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1ODMwMTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12:45",
    views: "15.2K",
    author: "Dr. Farming Expert",
    category: "Techniques"
  },
  {
    id: 2,
    title: "Organic Farming: From Soil to Harvest",
    description: "Complete guide to organic farming practices that are environmentally sustainable and profitable.",
    thumbnail: "https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc1ODMwMTY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "18:30",
    views: "22.8K",
    author: "Green Farming Co.",
    category: "Organic"
  },
  {
    id: 3,
    title: "Behind the Scenes: NF Plantation Journey",
    description: "Take a look at our daily operations and see how we maintain quality in our farming practices.",
    thumbnail: "https://images.unsplash.com/photo-1625268529752-f3d0ca3aa611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB2aWRlbyUyMGNhbWVyYSUyMGZpbG1pbmd8ZW58MXx8fHwxNzU4MzAxNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "15:20",
    views: "8.9K",
    author: "NF Plantation Team",
    category: "Documentary"
  },
  {
    id: 4,
    title: "Seasonal Crop Planning & Management",
    description: "Learn how to plan your crops according to seasons for maximum profitability.",
    thumbnail: "https://images.unsplash.com/photo-1684954215462-cad9f3693b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdGVjaG5pcXVlcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1ODMwMTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "21:15",
    views: "19.5K",
    author: "Agricultural Institute",
    category: "Planning"
  },
  {
    id: 5,
    title: "Pest Control: Natural vs Chemical Methods",
    description: "Compare different pest control methods and find the best approach for your crops.",
    thumbnail: "https://images.unsplash.com/photo-1589923188900-85dae523342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc1ODMwMTY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "14:50",
    views: "12.7K",
    author: "Farm Solutions",
    category: "Pest Control"
  },
  {
    id: 6,
    title: "Water Management in Modern Agriculture",
    description: "Efficient irrigation techniques that save water while maintaining crop health.",
    thumbnail: "https://images.unsplash.com/photo-1625268529752-f3d0ca3aa611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB2aWRlbyUyMGNhbWVyYSUyMGZpbG1pbmd8ZW58MXx8fHwxNzU4MzAxNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "16:40",
    views: "17.3K",
    author: "Water Tech Farming",
    category: "Irrigation"
  }
];

export function VlogSection() {
  const handleVideoClick = (videoId: number) => {
    // In a real implementation, this would open a video player or navigate to video page
    console.log(`Playing video ${videoId}`);
  };

  return (
    <section id="vlog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4" style={{ color: 'var(--primary-green)', fontFamily: 'var(--font-primary)' }}>
            Farming Vlogs & Educational Content
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-secondary)' }}>
            Learn from experts with our comprehensive collection of farming tutorials, tips, and behind-the-scenes content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vlogVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => handleVideoClick(video.id)}>
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{video.duration}</span>
                </div>
                <div className="absolute top-2 left-2 bg-opacity-90 px-2 py-1 rounded text-xs text-white" 
                     style={{ backgroundColor: 'var(--primary-green)' }}>
                  {video.category}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2 group-hover:text-opacity-80" 
                          style={{ color: 'var(--primary-green)', fontFamily: 'var(--font-primary)' }}>
                  {video.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2" style={{ fontFamily: 'var(--font-secondary)' }}>
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{video.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{video.views}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            style={{ backgroundColor: 'var(--primary-green)', fontFamily: 'var(--font-secondary)' }}
          >
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
}