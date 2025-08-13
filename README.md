# 🍽️ Culinary Delights - Premium Restaurant Website

A modern, responsive restaurant website built with Next.js, TypeScript, and Tailwind CSS, featuring beautiful animations, interactive components, and a culinary-themed design.

## ✨ Features

### 🎨 **Enhanced Aesthetics**
- **Modern Design System**: Beautiful color palette with warm browns and creams
- **Smooth Animations**: CSS animations, transitions, and hover effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Custom SVG Graphics**: Beautiful culinary-themed illustrations
- **Typography**: Optimized font hierarchy and spacing

### 🚀 **Interactive Components**
- **Floating Action Button**: Quick access to reservations and contact
- **Scroll-to-Top Button**: Smooth navigation with animated tooltip
- **Progress Bars**: Animated progress indicators with culinary themes
- **Stats Display**: Animated counters and achievement showcases
- **Toast Notifications**: Beautiful notification system
- **Modal System**: Reservation and menu detail modals

### 🎭 **Animation & Effects**
- **Fade-in Animations**: Staggered entrance animations for sections
- **Hover Effects**: Interactive card and button hover states
- **Loading States**: Custom loading components with culinary themes
- **Parallax Effects**: Subtle background movement effects
- **Smooth Transitions**: 300ms+ duration transitions throughout

### 📱 **User Experience**
- **Sticky Navigation**: Always-accessible navigation header
- **Smooth Scrolling**: Anchor link navigation with offset
- **Form Validation**: Enhanced form inputs with focus states
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Performance**: Optimized images and lazy loading

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Icons**: Lucide React
- **Animations**: CSS animations and Framer Motion-inspired transitions
- **Components**: Custom UI component library

## 🎨 Design System

### Color Palette
```css
--background: #FFF8E1 (Light cream)
--foreground: #4E342E (Dark brown)
--primary: #8D6E63 (Medium brown)
--secondary: #D7CCC8 (Light gray brown)
--muted: #EFEBE9 (Lighter gray brown)
```

### Typography
- **Headings**: Large, bold with gradient effects
- **Body Text**: Optimized line height and spacing
- **Prose**: Custom culinary-themed text styling

### Spacing
- **Section Padding**: 16-24 units (responsive)
- **Component Gaps**: 4-8 units for consistent spacing
- **Container Width**: Max-width 7xl with responsive margins

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd culinary-delights

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button component
│   │   ├── card.tsx         # Card component
│   │   ├── loading.tsx      # Loading states
│   │   ├── modal.tsx        # Modal system
│   │   ├── progress-bar.tsx # Progress indicators
│   │   ├── stats.tsx        # Statistics display
│   │   ├── toast.tsx        # Notification system
│   │   └── ...
│   └── main-nav.tsx         # Navigation component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Key Components

### Hero Section
- Full-screen hero with background image
- Gradient overlays for text readability
- Call-to-action buttons with hover effects
- Animated scroll indicator

### About Section
- Two-column layout with image and text
- Hover effects on images
- Decorative elements and badges
- Smooth animations

### Menu Section
- Card-based menu display
- Hover animations and category badges
- Responsive grid layout
- Interactive elements

### Testimonials
- Customer review cards
- Star ratings with animations
- Quote icons and hover effects
- Staggered entrance animations

### Contact Section
- Contact information with icons
- Contact form with enhanced styling
- Business hours display
- Interactive contact cards

### Footer
- Comprehensive footer with multiple columns
- Social media links
- Quick navigation
- Contact information

## 🎨 Custom Components

### FloatingActionButton
- Fixed position action button
- Expandable menu on hover
- Pulse animations and hover effects
- Quick access to key actions

### ScrollToTop
- Appears after scrolling threshold
- Smooth scroll to top functionality
- Animated tooltip on hover
- Pulse effects and transitions

### ProgressBar
- Multiple variants (linear, circular)
- Animated progress indicators
- Culinary-themed styling
- Responsive design

### Stats
- Animated counters
- Icon-based statistics
- Hover effects and particles
- Responsive grid layout

### Toast
- Multiple notification types
- Auto-dismiss functionality
- Progress bars and animations
- Culinary-themed messages

### Modal
- Reservation form modal
- Menu detail modal
- Backdrop blur effects
- Smooth enter/exit animations

## 🎭 Animation System

### CSS Animations
- `fade-in-up`: Staggered section entrances
- `float`: Floating decorative elements
- `gradient-shift`: Animated gradient text
- `bounce-in`: Interactive element animations

### Transitions
- **Duration**: 300ms for interactions, 500ms+ for complex animations
- **Easing**: Cubic-bezier curves for natural movement
- **Properties**: Transform, opacity, and color transitions

### Hover Effects
- Scale transformations (1.05x - 1.1x)
- Color transitions
- Shadow enhancements
- Particle animations

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch-friendly button sizes
- Optimized spacing for small screens
- Collapsible navigation
- Mobile-first animations

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Focus Management**: Visible focus indicators
- **Keyboard Navigation**: Tab and arrow key support
- **Color Contrast**: WCAG compliant color combinations

## 🚀 Performance Optimizations

- **Image Optimization**: SVG graphics for scalability
- **CSS Optimization**: Tailwind CSS purging
- **Lazy Loading**: Component-level lazy loading
- **Animation Performance**: GPU-accelerated transforms
- **Bundle Size**: Tree-shaking and code splitting

## 🎨 Customization

### Colors
Update CSS variables in `globals.css`:
```css
:root {
  --primary: #your-color;
  --background: #your-background;
  --foreground: #your-text-color;
}
```

### Animations
Modify animation durations and easing in `globals.css`:
```css
.fade-in-up {
  animation: fade-in-up 800ms cubic-bezier(0.4, 0, 0.2, 1) both;
}
```

### Components
All components are fully customizable through props and CSS classes.

## 🔧 Development

### Adding New Components
1. Create component in `src/components/ui/`
2. Export from component file
3. Import and use in pages
4. Add to component documentation

### Styling Guidelines
- Use Tailwind CSS classes for layout and spacing
- Custom CSS for complex animations
- CSS variables for theme consistency
- Mobile-first responsive design

### Animation Guidelines
- Keep animations under 500ms for interactions
- Use easing curves for natural movement
- Provide reduced-motion alternatives
- Test on various devices and browsers

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for food lovers everywhere**

*Experience the art of fine dining with our passion for culinary excellence and unforgettable flavors.*
