import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Loading({ size = "md", className }: LoadingProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        
        {/* Animated ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        
        {/* Inner circle with chef hat icon */}
        <div className="absolute inset-2 bg-primary/10 rounded-full flex items-center justify-center">
          <div className="w-1/2 h-1/2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-2", className)}>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    </div>
  );
}

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export function LoadingBar({ className }: { className?: string }) {
  return (
    <div className={cn("w-full bg-muted rounded-full h-2 overflow-hidden", className)}>
      <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "60%" }}></div>
    </div>
  );
}

export function LoadingCulinary({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      {/* Chef hat animation */}
      <div className="relative">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
        </div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-primary/30 rounded-full animate-bounce"></div>
      </div>
      
      {/* Loading text */}
      <div className="text-center space-y-2">
        <p className="text-primary font-medium">Preparing your culinary experience...</p>
        <LoadingDots />
      </div>
    </div>
  );
} 