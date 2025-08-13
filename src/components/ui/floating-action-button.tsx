import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

interface FloatingActionButtonProps {
  className?: string;
}

export function FloatingActionButton({ className }: FloatingActionButtonProps) {
  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      {/* Main FAB */}
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
          <div className="relative z-10">
            <Phone className="w-6 h-6 text-white" />
          </div>
        </div>
      </Button>

      {/* Floating menu items */}
      <div className="absolute bottom-20 right-0 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        {/* Reservation button */}
        <div className="flex items-center space-x-3">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Reserve
          </Button>
        </div>

        {/* Contact button */}
        <div className="flex items-center space-x-3">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>

        {/* Location button */}
        <div className="flex items-center space-x-3">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Location
          </Button>
        </div>
      </div>

      {/* Pulse effect */}
      <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
    </div>
  );
}

export function FloatingActionButtonSimple({ className }: FloatingActionButtonProps) {
  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      <Button
        size="lg"
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110"
      >
        <Phone className="w-6 h-6 text-white" />
      </Button>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
    </div>
  );
} 