"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  className?: string;
  threshold?: number;
}

export function ScrollToTop({ className, threshold = 400 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="lg"
      className={cn(
        "fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 group",
        className
      )}
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
        
        {/* Icon */}
        <div className="relative z-10">
          <ChevronUp className="w-5 h-5 text-white group-hover:animate-bounce" />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-foreground text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Back to top
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-foreground border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </Button>
  );
}

export function ScrollToTopSimple({ className, threshold = 400 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="lg"
      className={cn(
        "fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110",
        className
      )}
    >
      <ChevronUp className="w-5 h-5 text-white" />
    </Button>
  );
} 