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

- Primary: #4caf50ff (Green) - buttons, highlights
- Secondary: #81c784ff (Light Green) - section backgrounds
- Accent: #a5d6a7ff (Lighter Green) - cards
- SoftBG: #e8f5e9ff (Very Light Green) - page background
- Border: #c8e6c9ff (Light Green Border) - separators
- Neutral: #ffffff (White) - neutral areas
- Highlight: #2e7d32ff (Dark Green) - for emphasis

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

## Contributing

This is a static MVP prototype. All data is mocked and there is no backend implementation.

## License

This project is a prototype developed for demonstration purposes.