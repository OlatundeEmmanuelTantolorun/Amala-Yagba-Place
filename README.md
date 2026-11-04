# Amala Yagba Place

> A modern restaurant website for **Amala Yagba Place, Lokoja**, designed to showcase the restaurant, menu, dining experience, location, opening hours, and direct WhatsApp ordering.

## Overview

Amala Yagba Place is a responsive restaurant website built to give customers a clear and engaging way to discover the restaurant before visiting.

The experience combines editorial-style restaurant presentation with practical information such as the menu, opening hours, location, directions, and WhatsApp ordering.

The site is designed to work beautifully across desktop and mobile devices while keeping the interface simple, fast, and focused on the restaurant.

## Features

- **Restaurant-focused landing page**
  - Editorial visual presentation
  - Strong food and restaurant imagery
  - Clear calls to action

- **Interactive menu**
  - Browse menu categories
  - View individual dishes
  - Display dish descriptions, prices, and details
  - Smooth dish-selection transitions

- **Restaurant experience video**
  - Dedicated video section
  - Autoplay, muted and looping
  - Responsive presentation
  - Inline playback rather than a background video

- **WhatsApp ordering**
  - Customers can start an order directly through WhatsApp
  - Supports selected dishes and add-ons
  - Calculates the order total
  - Generates a structured WhatsApp message

- **Opening hours**
  - Full weekly schedule
  - Clearly presented for quick reference

- **Location**
  - Restaurant address
  - Embedded Google Maps location
  - Direct directions link to Google Maps

- **Responsive design**
  - Desktop, tablet, and mobile layouts
  - Touch-friendly interactions
  - Responsive navigation

- **Accessibility considerations**
  - Keyboard-friendly interactions
  - Focus management
  - Reduced-motion support
  - Appropriate interactive touch targets

- **SEO-ready**
  - Configurable page title
  - Meta description
  - Restaurant location information
  - Semantic page structure

## Opening Hours

| Day       | Hours              |
| --------- | ------------------ |
| Monday    | 8:00 AM – 10:00 PM |
| Tuesday   | 8:00 AM – 10:00 PM |
| Wednesday | 8:00 AM – 10:00 PM |
| Thursday  | 8:00 AM – 10:00 PM |
| Friday    | 8:00 AM – 10:00 PM |
| Saturday  | 8:00 AM – 10:30 PM |
| Sunday    | 8:30 AM – 10:00 PM |

## Location

**Amala Yagba Place**  
Hassan Usman Katsina Way  
Beside Walvicola Filling Station  
Lokoja 260001, Kogi State, Nigeria

The website includes an interactive Google Maps location and a direct directions link for customers.

## Tech Stack

- **React** — UI development
- **TypeScript** — type-safe application code
- **Vite** — development server and production build
- **Tailwind CSS** — responsive styling
- **GSAP** — animations and transitions
- **Lucide React** — interface icons
- **WhatsApp** — customer ordering flow
- **Google Maps** — restaurant location and directions

## Project Structure

```text
amala-yagba-place/
├── public/
│   └── videos/
│       └── amala-yagba-experience.mp4
├── src/
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── animations/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── render.yaml
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

Make sure you have:

- Node.js 20+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/amala-yagba-place.git
```

Enter the project directory:

```bash
cd amala-yagba-place
```

Install dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for deployment as a **Render Static Site**.

### Render Configuration

```text
Build Command:
npm install && npm run build

Publish Directory:
dist
```

A `render.yaml` file is included in the repository so the deployment configuration can be kept with the project.

## Content & Configuration

Restaurant-specific information is kept configurable so the website can be maintained without rebuilding the entire interface from scratch.

This includes information such as:

- Restaurant name
- Address
- Phone number
- WhatsApp number
- Opening hours
- Menu items
- Prices
- Menu categories
- Social links
- Google Maps location
- SEO information
- Theme configuration

This makes the project suitable as a reusable restaurant website foundation.

## Performance

The project is designed with performance in mind:

- Vite production builds
- Optimized asset loading
- Responsive images
- Lazy-loaded media where appropriate
- Reduced-motion support
- No unnecessary backend infrastructure
- Static deployment architecture

## Ordering

The website does not use a traditional e-commerce checkout.

Instead, customers can select their desired food and add-ons and continue their order through **WhatsApp**.

This keeps the ordering experience simple while allowing the restaurant to handle the final conversation and confirmation directly with the customer.

## Project Goals

The website was built around three primary goals:

1. **Make the restaurant look exceptional online.**
2. **Make important information easy to find.**
3. **Turn website visitors into real restaurant customers.**

The experience therefore prioritizes food presentation, menu discovery, location, opening hours, and direct ordering rather than unnecessary complexity.

## License

This project was developed specifically for **Amala Yagba Place**.

All restaurant-specific branding, photography, menu information, and media remain the property of their respective owners.
