"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  animated?: boolean;
  variant?: "default" | "success" | "warning" | "error";
}

export function ProgressBar({
  value,
  max = 100,
  className,
  showLabel = false,
  animated = true,
  variant = "default",
}: ProgressBarProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const percentage = (displayValue / max) * 100;

  const variantClasses = {
    default: "bg-primary",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm text-muted-foreground">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-muted/50 to-muted/30"></div>
        
        {/* Progress bar */}
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shine effect */}
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          )}
          
          {/* Progress pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-current/20 to-current/10"></div>
        </div>
      </div>
    </div>
  );
}

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
  animated?: boolean;
  variant?: "default" | "success" | "warning" | "error";
}

export function CircularProgress({
  value,
  max = 100,
  size = "md",
  className,
  showLabel = false,
  animated = true,
  variant = "default",
}: CircularProgressProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const percentage = (displayValue / max) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const variantClasses = {
    default: "text-primary",
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500",
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/30"
          />
          
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className={cn(
              "transition-all duration-1000 ease-out",
              variantClasses[variant]
            )}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={cn("text-2xl font-bold", variantClasses[variant])}>
              {Math.round(percentage)}%
            </div>
            {showLabel && (
              <div className="text-xs text-muted-foreground">Complete</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CulinaryProgressBar({
  value,
  max = 100,
  className,
}: {
  value: number;
  max?: number;
  className?: string;
}) {
  const percentage = (value / max) * 100;

  return (
    <div className={cn("w-full space-y-3", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">Culinary Excellence</span>
        <span className="text-sm text-muted-foreground">
          {Math.round(percentage)}% Complete
        </span>
      </div>
      
      <div className="w-full bg-muted/50 rounded-full h-4 overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-muted/30 to-muted/20"></div>
        
        {/* Progress bar */}
        <div
          className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          
          {/* Progress pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-current/20 to-current/10"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  );
} 