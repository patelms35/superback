# Superback Cashback Website

A responsive homepage for the Superback Cashback Website built with React.js and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with a focus on user experience
- **Dynamic Cashback Offers**: Display of featured cashback offers from various stores
- **Interactive Elements**: Call-to-action buttons, testimonial carousel, and more
- **Trust-Building Elements**: User testimonials, ratings, and statistics

## Technologies Used

- **React.js**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Icons**: Icon library for React applications

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/superback-cashback.git
   cd superback-cashback
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
superback-cashback/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedOffers.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Customization

- **Colors**: Edit the color scheme in `tailwind.config.js`
- **Content**: Update the content in each component file
- **Layout**: Modify the layout in `App.tsx`

## Image Handling in React

This project demonstrates several approaches to handling images in React:

### 1. External URLs

For quick prototyping and development, we use external image URLs:

```tsx
const storeLogos = {
  amazon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png',
  nike: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/320px-Logo_NIKE.svg.png'
};

// Usage
<img src={storeLogos.amazon} alt="Amazon" className="h-10 w-auto" />
```

### 2. Local Images

For production, it's better to import local images:

```tsx
import amazonLogo from '../assets/images/amazon-logo.png';
import nikeLogo from '../assets/images/nike-logo.png';

// Usage
<img src={amazonLogo} alt="Amazon" className="h-10 w-auto" />
```

### 3. TypeScript Support

To ensure TypeScript recognizes image imports, we've added a custom.d.ts file:

```typescript
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
```

### 4. Responsive Images

We use Tailwind CSS classes to make images responsive:

```tsx
<img 
  src={logoUrl} 
  alt={storeName} 
  className="h-8 w-auto object-contain" 
/>
```

## Performance Optimization

- Lazy loading of images
- Responsive design for all screen sizes
- Optimized component rendering

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Inspiration from leading cashback websites
