
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Check,
  Filter,
  Plus,
  TreeDeciduous,
  Recycle,
  Zap,
  Droplets,
  Car,
  Utensils
} from 'lucide-react';
import { Input } from '@/components/ui/input';

// Sample activities data
const allActivities = [
  {
    id: 1,
    type: 'tree-planting',
    title: 'Tree Planting',
    description: '5 trees planted at Woodland Park',
    icon: <TreeDeciduous className="h-5 w-5 text-eco-green" />,
    date: 'Apr 10, 2023',
    impact: '500 kg CO2 offset',
    verified: true,
    category: 'offset'
  },
  {
    id: 2,
    type: 'recycling',
    title: 'Recycling',
    description: '35 lbs of plastic and paper recycled',
    icon: <Recycle className="h-5 w-5 text-eco-blue" />,
    date: 'Apr 3, 2023',
    impact: '15 kg CO2 reduced',
    verified: true,
    category: 'waste'
  },
  {
    id: 3,
    type: 'renewable-energy',
    title: 'Renewable Energy',
    description: 'Switched to 100% renewable electricity',
    icon: <Zap className="h-5 w-5 text-eco-teal" />,
    date: 'Mar 25, 2023',
    impact: '2.5 tons CO2 reduced yearly',
    verified: true,
    category: 'energy'
  },
  {
    id: 4,
    type: 'water-conservation',
    title: 'Water Conservation',
    description: 'Installed low-flow fixtures in home',
    icon: <Droplets className="h-5 w-5 text-eco-blue-light" />,
    date: 'Mar 15, 2023',
    impact: '15,000 gallons saved yearly',
    verified: true,
    category: 'water'
  },
  {
    id: 5,
    type: 'sustainable-transport',
    title: 'Sustainable Transport',
    description: 'Commuted by bicycle for 20 days',
    icon: <Car className="h-5 w-5 text-eco-green" />,
    date: 'Mar 1, 2023',
    impact: '120 kg CO2 avoided',
    verified: true,
    category: 'transport'
  },
  {
    id: 6,
    type: 'sustainable-diet',
    title: 'Sustainable Diet',
    description: 'Reduced meat consumption by 50%',
    icon: <Utensils className="h-5 w-5 text-eco-brown" />,
    date: 'Feb 15, 2023',
    impact: '180 kg CO2 reduced',
    verified: true,
    category: 'food'
  },
];

// Category filters
const categoryFilters = [
  { id: 'all', label: 'All Activities' },
  { id: 'offset', label: 'Carbon Offset' },
  { id: 'energy', label: 'Energy' },
  { id: 'waste', label: 'Waste' },
  { id: 'water', label: 'Water' },
  { id: 'transport', label: 'Transport' },
  { id: 'food', label: 'Food' },
];

const Activities = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter activities based on active filter and search query
  const filteredActivities = allActivities.filter(activity => {
    const matchesCategory = activeFilter === 'all' || activity.category === activeFilter;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Activity Log</h1>
              <p className="text-muted-foreground">A record of all your eco-friendly actions</p>
            </div>
            
            <Button className="mt-4 md:mt-0 bg-eco-green hover:bg-eco-green-dark text-white">
              <Plus className="h-4 w-4 mr-2" />
              Log New Activity
            </Button>
          </div>
          
          {/* Filters and Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                {categoryFilters.map(filter => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter.id)}
                    className={
                      activeFilter === filter.id 
                        ? "bg-eco-green hover:bg-eco-green-dark text-white" 
                        : "border-eco-green text-eco-green hover:bg-eco-green hover:text-white"
                    }
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
              
              <div className="w-full md:w-64">
                <Input
                  placeholder="Search activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="eco-input"
                />
              </div>
            </div>
          </div>
          
          {/* Activities List */}
          <div className="eco-card">
            <div className="timeline-container">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <div key={activity.id} className="timeline-item">
                    <div className="bg-card p-4 rounded-lg border border-border/40">
                      <div className="flex items-start gap-3">
                        <div className="bg-muted p-2 rounded-full shrink-0">
                          {activity.icon}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <h3 className="font-medium">{activity.title}</h3>
                            <span className="text-xs text-muted-foreground">{activity.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-2">
                            <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full inline-flex">
                              {activity.impact}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              {activity.verified && (
                                <div className="verified-badge">
                                  <Check className="h-3 w-3" />
                                  <span>Blockchain Verified</span>
                                </div>
                              )}
                              
                              <Button variant="ghost" size="sm" className="text-xs text-eco-green hover:text-eco-green-dark hover:bg-eco-green/10">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No activities found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;
