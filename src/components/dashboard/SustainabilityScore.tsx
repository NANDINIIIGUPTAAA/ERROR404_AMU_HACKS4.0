
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SustainabilityScore = () => {
  const score = 75;
  
  return (
    <div className="eco-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title">Sustainability Score</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-5 w-5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">Your sustainability score is calculated based on verified eco-actions, carbon offsets, and overall environmental impact.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-eco-green">{score}</span>
              <p className="text-sm text-muted-foreground">of 100</p>
            </div>
          </div>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E0E0E0"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2E7D32"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 45 * score / 100} ${2 * Math.PI * 45 * (100 - score) / 100}`}
              strokeDashoffset={2 * Math.PI * 45 * 0.25} // Start from the top
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Carbon Reduction</span>
            <span className="font-medium">82/100</span>
          </div>
          <Progress value={82} className="h-2 bg-muted" indicatorClassName="bg-eco-green" />
        </div>
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Renewable Energy</span>
            <span className="font-medium">65/100</span>
          </div>
          <Progress value={65} className="h-2 bg-muted" indicatorClassName="bg-eco-teal" />
        </div>
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Sustainable Consumption</span>
            <span className="font-medium">78/100</span>
          </div>
          <Progress value={78} className="h-2 bg-muted" indicatorClassName="bg-eco-blue" />
        </div>
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

export default SustainabilityScore;
