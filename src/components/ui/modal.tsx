"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, ChefHat, Utensils, Clock } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  className,
  showCloseButton = true,
  closeOnOverlayClick = true,
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsLeaving(false);
      document.body.style.overflow = "hidden";
    } else {
      setIsLeaving(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 300);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isVisible) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isLeaving ? "opacity-0" : "opacity-100"
        )}
        onClick={handleOverlayClick}
      />
      
      {/* Modal */}
      <div
        className={cn(
          "relative w-full bg-white rounded-2xl shadow-2xl transition-all duration-300 transform",
          sizeClasses[size],
          isLeaving ? "scale-95 opacity-0" : "scale-100 opacity-100",
          className
        )}
        onClick={handleModalClick}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
          </div>
          
          {showCloseButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="w-8 h-8 p-0 hover:bg-muted/50 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// Specialized modal components for culinary website
export function ReservationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation submitted:", formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Make a Reservation"
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Number of Guests
            </label>
            <select
              className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Date
            </label>
            <input
              type="date"
              required
              className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Time
            </label>
            <select
              required
              className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              <option value="">Select time</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:30">11:30 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="13:30">1:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Special Requests
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
            placeholder="Any special dietary requirements or requests..."
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          />
        </div>
        
        <div className="flex items-center space-x-4 pt-4">
          <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
            Confirm Reservation
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export function MenuModal({
  isOpen,
  onClose,
  menuItem,
}: {
  isOpen: boolean;
  onClose: () => void;
  menuItem?: {
    name: string;
    description: string;
    price: string;
    image?: string;
    category: string;
  };
}) {
  if (!menuItem) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={menuItem.name}
      size="lg"
    >
      <div className="space-y-6">
        {menuItem.image && (
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={menuItem.image}
              alt={menuItem.name}
              width={600}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {menuItem.category}
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">{menuItem.name}</h3>
            <span className="text-2xl font-bold text-primary">{menuItem.price}</span>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {menuItem.description}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Utensils className="w-4 h-4" />
              <span>Chef&apos;s Special</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>20-25 min</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 pt-4">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            Order Now
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
} 