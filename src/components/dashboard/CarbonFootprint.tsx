
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, TrendingDown, Calendar, Info } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { 
  TooltipProvider,
  Tooltip as UITooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Sample data for the chart
const data = [
  { name: 'Jan', footprint: 1200, offset: 400 },
  { name: 'Feb', footprint: 1100, offset: 450 },
  { name: 'Mar', footprint: 1300, offset: 500 },
  { name: 'Apr', footprint: 900, offset: 600 },
  { name: 'May', footprint: 1000, offset: 700 },
  { name: 'Jun', footprint: 850, offset: 800 },
];

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-md shadow-md">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-eco-green-dark">
          Footprint: <span className="font-medium">{payload[0].value} kg CO2</span>
        </p>
        <p className="text-sm text-eco-teal-dark">
          Offset: <span className="font-medium">{payload[1].value} kg CO2</span>
        </p>
        <p className="text-sm text-eco-blue-dark mt-1">
          Net: <span className="font-medium">{payload[0].value - payload[1].value} kg CO2</span>
        </p>
      </div>
    );
  }

  return null;
};

const CarbonFootprint = () => {
  return (
    <div className="eco-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title">Carbon Footprint</h2>
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger>
              <Info className="h-5 w-5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">Track your carbon emissions and offsets over time. All data is verified and recorded on blockchain.</p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-eco-green/10 p-2 rounded-full">
            <TrendingDown className="h-5 w-5 text-eco-green" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Current Month</p>
            <p className="text-2xl font-semibold">850 kg <span className="text-sm text-eco-green">-15%</span></p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Monthly</span>
        </Button>
      </div>
      
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="footprintGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#2E7D32" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="offsetGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00796B" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#00796B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="footprint" 
              stroke="#2E7D32" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#footprintGradient)" 
            />
            <Area 
              type="monotone" 
              dataKey="offset" 
              stroke="#00796B" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#offsetGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-eco-green mr-2"></div>
            <span className="text-sm">Footprint</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-eco-teal mr-2"></div>
            <span className="text-sm">Offset</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="text-eco-green border-eco-green">
          <Plus className="h-4 w-4 mr-1" />
          Add Entry
        </Button>
      </div>
      
      <div className="mt-4 flex items-center justify-center">
        <div className="verified-badge">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Blockchain Verified</span>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprint;
