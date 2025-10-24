# Krishi Shield

A digital platform for Indian oilseed farmers to manage price volatility through virtual hedging simulation, AI-powered insights, and blockchain-inspired trust visuals.

## Features

- **AI Price Predictor**: Predict future market prices using our AI models
- **Virtual Hedging Simulator**: Simulate hedging strategies to protect against price drops
- **Blockchain E-Contracts**: Transparent and secure digital contracts inspired by blockchain
- **Learning Hub**: Educational resources about hedging, forward contracts, and blockchain
- **Market Alerts**: Real-time notifications about price changes and market opportunities
- **Loans & Bima**: Access to credit and insurance services
- **Dashboard**: Personalized insights and contract management

## Tech Stack

- **Frontend**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **UI Components**: Radix UI, Lucide React Icons
- **State Management**: React Context API
- **Testing**: Jest, React Testing Library

## Folder Structure

```
krishi-shield/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── features/
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── PricePrediction.tsx
│   │       ├── HedgingSimulator.tsx
│   │       ├── EContractsDemo.tsx
│   │       └── MarketAlerts.tsx
│   ├── learn/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── contracts/
│   │   │   └── page.tsx
│   │   ├── insights/
│   │   │   └── page.tsx
│   │   ├── loans-bima/
│   │   │   └── page.tsx
│   │   ├── reports/
│   │   │   └── page.tsx
│   │   └── support/
│   │       └── page.tsx
│   └── common/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       ├── SectionTitle.tsx
│       └── Card.tsx
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── ErrorBoundary.tsx
│   └── LoadingSkeleton.tsx
│
├── contexts/
│   └── AuthContext.tsx
│
├── constants/
│   ├── theme.ts
│   ├── colors.ts
│   ├── dummyData.ts
│   └── loanData.ts
│
├── public/
│   ├── images/
│   └── icons/
│
├── styles/
│   ├── globals.css
│   └── animations.css
│
├── lib/
│   └── utils.ts
│
├── utils/
│   └── helpers.ts
│
└── README.md
```

## Color Theme

The application now uses a generalized color theme based on the following palette:

- **Cambridge Blue**: `#8aa399` - Used for secondary backgrounds and highlights
- **Paynes Gray**: `#545e75` - Used for accents and text
- **Yinmn Blue**: `#304d6d` - Primary color for buttons and important elements
- **Melon**: `#fcb1a6` - Error states and warnings
- **Nyanza**: `#d5f9de` - Main background color

For detailed information about the theme implementation, see [Color Theme Documentation](docs/color-theme.md).

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. For testing:
   ```bash
   npm run test
   ```

5. For building:
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint
- `npm run test` - Runs tests with Jest

## Demo Credentials

- Farmer: farmer@krishishield.com / farmer123
- Admin: admin@krishishield.com / admin123

## Production Deployment

For production deployment instructions, see [Production Deployment Guide](docs/production-deployment.md).

### Environment Variables

Create a `.env.production` file with the following variables:

```
NEXT_PUBLIC_APP_NAME=Krishi Shield
NEXT_PUBLIC_APP_DESCRIPTION=Empowering Indian oilseed farmers with virtual hedging simulations, AI-powered market insights, and blockchain-inspired trust.
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_ENV=production
NEXT_PUBLIC_ENABLE_MOCK_DATA=false
NEXT_PUBLIC_ENABLE_DEMO_MODE=true
```

### Security

The application includes security headers and Content Security Policy by default. All cookies are configured with secure settings for production.

## Performance Optimizations

The application includes several performance optimizations to ensure fast loading and smooth user experience:

- **Font Optimization**: Custom font handling to prevent preload warnings
- **Image Optimization**: Next.js image component with automatic optimization
- **Code Splitting**: Automatic code splitting for faster initial loads
- **Caching**: Proper cache headers for static assets
- **Minification**: Automatic minification of CSS and JavaScript

For detailed information about performance optimizations, see [Performance Optimization Documentation](docs/performance-optimization.md).

## Design Principles

- **Mobile-first**: Responsive design that works on all devices
- **Farmer-centric**: Simple visuals and clear language
- **Educational**: Help farmers understand complex financial concepts
- **Trust-building**: Transparent interfaces inspired by blockchain
- **Soft UI**: Pastel color palette with smooth animations
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Performance**: Optimized bundle size and lazy loading

## Key Components

### AuthContext
Handles authentication state and provides login/logout functionality

### ErrorBoundary
Catches JavaScript errors and displays fallback UI

### LoadingSkeleton
Provides loading states for better UX

### Button & Card
Custom UI components with animations

## Testing

The application includes unit tests for key components:
- Button component
- Card component
- AuthContext

Run tests with:
```bash
npm run test
```

## Troubleshooting

### Turbopack Root Directory Warning

If you see a warning about Next.js inferring the workspace root incorrectly, this is due to duplicate package.json files in nested directories. The application is configured to run from the current directory (`SIHOILS/SIHOILS`) and not the parent directory.

To resolve this issue:
1. Ensure you're running commands from the correct project directory
2. If the warning persists, you can safely ignore it as it doesn't affect functionality

## Contributing

This is a static MVP prototype. All data is mocked and there is no backend implementation.

## License

This project is a prototype developed for demonstration purposes.