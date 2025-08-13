"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star, Users, Clock, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  className?: string;
  animated?: boolean;
  style?: React.CSSProperties;
}

export function StatItem({
  icon,
  value,
  label,
  suffix = "",
  className,
  animated = true,
}: StatItemProps) {
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

  return (
    <div className={cn("text-center group", className)}>
      <div className="relative">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-2 left-2 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
          <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
          <div className="absolute bottom-2 left-4 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
      
      {/* Value */}
      <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      
      {/* Label */}
      <div className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}

interface StatsGridProps {
  stats: Array<{
    icon: React.ReactNode;
    value: number;
    label: string;
    suffix?: string;
  }>;
  className?: string;
  animated?: boolean;
}

export function StatsGrid({ stats, className, animated = true }: StatsGridProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8", className)}>
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          animated={animated}
          className="fade-in-up"
          style={{ animationDelay: `${index * 200}ms` }}
        />
      ))}
    </div>
  );
}

export function CulinaryStats({ className }: { className?: string }) {
  const stats = [
    {
      icon: <Star className="w-8 h-8" />,
      value: 4.9,
      label: "Customer Rating",
      suffix: "/5",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 15000,
      label: "Happy Customers",
      suffix: "+",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 25,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 50,
      label: "Awards Won",
      suffix: "+",
    },
  ];

  return (
    <section className={cn("py-16 bg-gradient-to-br from-muted/30 via-muted/20 to-background", className)}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold heading-gradient leading-tight">
            Our Culinary Achievements
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
          <p className="prose-culinary text-muted-foreground max-w-3xl mx-auto text-lg">
            Discover the numbers that tell our story of culinary excellence and customer satisfaction.
          </p>
        </div>
        
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}

export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span className={cn("font-bold", className)}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export function MiniStats({
  stats,
  className,
}: {
  stats: Array<{
    icon: React.ReactNode;
    value: number;
    label: string;
  }>;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-6", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <div className="text-primary w-5 h-5">
              {stat.icon}
            </div>
          </div>
          <div>
            <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {stat.value.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 