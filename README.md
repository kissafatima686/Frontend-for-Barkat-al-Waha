# Barakat Al Waha — Frontend

A modern, responsive e-commerce frontend for **Barakat Al Waha**, a premium provider of halal-certified frozen meat, chicken, and seafood products from Dubai, UAE.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean and intuitive interface with smooth animations
- **Product Showcase**: Dynamic product catalog with category filtering
- **Product Details**: Detailed product pages with images and specifications
- **Blog Section**: Blog posts and articles
- **Gallery**: Visual showcase of products
- **About & Vision**: Company information and mission statements
- **Contact Page**: Customer inquiry forms
- **Testimonials**: Customer reviews and testimonials
- **Stats Section**: Display of company achievements
- **Smooth Animations**: Framer Motion-powered animations throughout

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: TailwindCSS 4.2.1
- **UI Components**: Lucide React icons
- **Animations**: Framer Motion 12.39.0
- **Utilities**: 
  - class-variance-authority (component styling)
  - clsx (className utilities)
  - tailwind-merge (Tailwind class merging)

## 📂 Project Structure

```
src/
├── components/
│   └── site/
│       ├── About.jsx           # About page component
│       ├── CategoryPage.jsx    # Product category filtering
│       ├── Contact.jsx         # Contact form
│       ├── FeaturedProducts.jsx # Featured products showcase
│       ├── Footer.jsx          # Footer component
│       ├── Hero.jsx            # Hero/banner section
│       ├── Navbar.jsx          # Navigation bar
│       ├── OurVision.jsx       # Company vision section
│       ├── ProductDetailsPage.jsx # Detailed product view
│       ├── Products.jsx        # Products listing
│       ├── Stats.jsx           # Statistics section
│       └── Testimonials.jsx    # Customer testimonials
├── lib/
│   └── products.js            # Product data and utilities
├── App.jsx                    # Main app component
├── main.jsx                   # React entry point
└── styles.css                 # Global styles

public/
├── styles.css                 # Compiled styles
├── about/                     # About section images
├── banner/                    # Banner assets
│   ├── bg-images/
│   └── text-images/
├── blog/                      # Blog section images
├── gallery/                   # Gallery images
├── logo/                      # Logo assets
├── products/                  # Product images
│   ├── category/              # Category images
│   └── product/               # Product images
├── shop/                      # Shop section images
├── x-icon/                    # Icon assets
└── bg-images/                 # Background images
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kissafatima686/Frontend-for-Frozen-Meat-website-of-UAE-.git
cd Frontend-for-Frozen-Meat-website-of-UAE
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Create a production build:
```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build project for production |
| `npm run preview` | Preview production build locally |

## 🎨 Component Overview

### Navigation Components
- **Navbar**: Main navigation with logo and menu
- **Hero**: Landing page hero section with call-to-action

### Product Components
- **Products**: Main products listing page
- **CategoryPage**: Filter products by category
- **FeaturedProducts**: Showcase featured/bestseller products
- **ProductDetailsPage**: Detailed view of individual products

### Information Components
- **About**: Company about page
- **OurVision**: Company vision and mission
- **Stats**: Key statistics and metrics
- **Testimonials**: Customer reviews and testimonials

### Other Components
- **Contact**: Contact form and inquiry section
- **Footer**: Footer with links and information
- **Gallery**: Product gallery showcase
- **Blog**: Blog section with articles

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## 🎯 Key Features Implementation

### Dynamic Routing
The application uses React components to handle different pages and views.

### Product Management
Products are managed through `lib/products.js` with data-driven components.

### Smooth Animations
Framer Motion is integrated throughout for smooth page transitions and component animations.

### Tailwind Styling
All components use TailwindCSS for utility-first CSS styling with responsive breakpoints.

## 📄 Assets

All assets are organized in the `public` directory:
- Images in various formats (AVIF, JFIF, PNG, etc.)
- Icons and graphics
- Background images

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is part of an internship work. All rights reserved.

## 👩‍💻 Developer

**Kissa Fatima**
- GitHub: [@kissafatima686](https://github.com/kissafatima686)

## 🔗 Links

- **GitHub Repository**: [Frontend-for-Frozen-Meat-website-of-UAE](https://github.com/kissafatima686/Frontend-for-Frozen-Meat-website-of-UAE-.git)
- **Live Demo**: [Coming Soon]

## 📞 Support

For any questions or issues, please open an issue on the GitHub repository.

---

**Made with ❤️ for Barakat Al Waha**
