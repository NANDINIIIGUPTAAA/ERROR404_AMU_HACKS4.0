
import React from 'react';
import { TreeDeciduous, Recycle, Zap, Droplets, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample activity data
const activities = [
  {
    id: 1,
    type: 'tree-planting',
    title: 'Tree Planting',
    description: '5 trees planted at Woodland Park',
    icon: <TreeDeciduous className="h-5 w-5 text-eco-green" />,
    date: '2 days ago',
    impact: '500 kg CO2 offset',
    verified: true
  },
  {
    id: 2,
    type: 'recycling',
    title: 'Recycling',
    description: '35 lbs of plastic and paper recycled',
    icon: <Recycle className="h-5 w-5 text-eco-blue" />,
    date: '1 week ago',
    impact: '15 kg CO2 reduced',
    verified: true
  },
  {
    id: 3,
    type: 'renewable-energy',
    title: 'Renewable Energy',
    description: 'Switched to 100% renewable electricity',
    icon: <Zap className="h-5 w-5 text-eco-teal" />,
    date: '2 weeks ago',
    impact: '2.5 tons CO2 reduced yearly',
    verified: true
  },
  {
    id: 4,
    type: 'water-conservation',
    title: 'Water Conservation',
    description: 'Installed low-flow fixtures in home',
    icon: <Droplets className="h-5 w-5 text-eco-blue-light" />,
    date: '3 weeks ago',
    impact: '15,000 gallons saved yearly',
    verified: true
  },
];

const ActivityLog = () => {
  return (
    <div className="eco-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title">Recent Activities</h2>
        <Button variant="outline" size="sm" className="flex items-center">
          <Filter className="h-4 w-4 mr-1" />
          Filter
        </Button>
      </div>
      
      <div className="timeline-container">
        {activities.map((activity) => (
          <div key={activity.id} className="timeline-item">
            <div className="bg-card p-4 rounded-lg border border-border/40">
              <div className="flex items-start gap-3">
                <div className="bg-muted p-2 rounded-full shrink-0">
                  {activity.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{activity.title}</h3>
                    <span className="text-xs text-muted-foreground">{activity.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">
                      {activity.impact}
                    </span>
                    
                    {activity.verified && (
                      <div className="verified-badge">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Button variant="ghost" className="text-eco-green hover:text-eco-green-dark hover:bg-eco-green/10">
          View All Activities
        </Button>
      </div>
    </div>
  );
};

export default ActivityLog;
