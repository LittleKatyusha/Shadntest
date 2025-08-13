"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold text-foreground">Culinary Delights</span>
      </Link>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link 
          href="#hero" 
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </Link>
        <Link 
          href="#about" 
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
        <Link 
          href="#menu" 
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Menu
        </Link>
        <Link 
          href="#contact" 
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </Link>
        <Button size="sm" className="ml-4">
          Reserve Table
        </Button>
      </nav>

      {/* Mobile menu button */}
      <Button variant="ghost" size="sm" className="md:hidden">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
    </div>
  );
}
