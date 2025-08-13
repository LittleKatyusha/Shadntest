"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";
import { Button } from "./button";

interface ToastProps {
  id: string;
  type?: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
  className?: string;
}

const toastTypes = {
  success: {
    icon: CheckCircle,
    className: "border-green-200 bg-green-50 text-green-800",
    iconClassName: "text-green-600",
  },
  error: {
    icon: XCircle,
    className: "border-red-200 bg-red-50 text-red-800",
    iconClassName: "text-red-600",
  },
  warning: {
    icon: AlertCircle,
    className: "border-yellow-200 bg-yellow-50 text-yellow-800",
    iconClassName: "text-yellow-600",
  },
  info: {
    icon: Info,
    className: "border-blue-200 bg-blue-50 text-blue-800",
    iconClassName: "text-blue-600",
  },
};

export function Toast({
  id,
  type = "info",
  title,
  message,
  duration = 5000,
  onClose,
  className,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const toastType = toastTypes[type];
  const Icon = toastType.icon;

  useEffect(() => {
    // Show toast
    const showTimer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto-hide toast
    const hideTimer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [id, duration, onClose]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => onClose(id), 300);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-sm bg-white border rounded-lg shadow-lg p-4 transition-all duration-300 transform",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        isLeaving ? "translate-x-full opacity-0" : "",
        toastType.className,
        className
      )}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 h-1 bg-current opacity-30 rounded-t-lg transition-all duration-300 ease-linear" style={{ width: "100%" }}></div>
      
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className={cn("flex-shrink-0 w-6 h-6", toastType.iconClassName)}>
          <Icon className="w-full h-full" />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="font-medium">{title}</div>
          {message && (
            <div className="mt-1 text-sm opacity-90">{message}</div>
          )}
        </div>
        
        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="flex-shrink-0 w-6 h-6 p-0 hover:bg-current hover:bg-opacity-10 transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

interface ToastContainerProps {
  toasts: ToastProps[];
  onClose: (id: string) => void;
  className?: string;
}

export function ToastContainer({ toasts, onClose, className }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className={cn("fixed top-4 right-4 z-50 space-y-3", className)}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, "id" | "onClose">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id, onClose: removeToast };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showSuccess = (title: string, message?: string) => {
    addToast({ type: "success", title, message });
  };

  const showError = (title: string, message?: string) => {
    addToast({ type: "error", title, message });
  };

  const showWarning = (title: string, message?: string) => {
    addToast({ type: "warning", title, message });
  };

  const showInfo = (title: string, message?: string) => {
    addToast({ type: "info", title, message });
  };

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
}

// Culinary-themed toast messages
export const culinaryToastMessages = {
  reservation: {
    success: {
      title: "Reservation Confirmed!",
      message: "Your table has been reserved. We look forward to serving you!",
    },
    error: {
      title: "Reservation Failed",
      message: "Unable to process your reservation. Please try again.",
    },
  },
  contact: {
    success: {
      title: "Message Sent!",
      message: "We'll get back to you within 24 hours.",
    },
    error: {
      title: "Message Failed",
      message: "Unable to send your message. Please try again.",
    },
  },
  menu: {
    info: {
      title: "New Menu Available",
      message: "Check out our seasonal specials and chef's recommendations!",
    },
  },
}; 