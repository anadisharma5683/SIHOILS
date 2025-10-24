// Market Alerts & Recommendations Data for Krishi Shield

export const ALERTS = [
  {
    id: 1,
    type: 'increase',
    title: 'Soybean prices rose by 3% this week',
    description: 'Strong demand from export markets driving prices up',
    timestamp: '2 hours ago',
    isRead: false,
    isFavorite: false
  },
  {
    id: 2,
    type: 'decrease',
    title: 'Mustard prices dipped slightly today',
    description: 'Seasonal oversupply affecting market rates',
    timestamp: '5 hours ago',
    isRead: false,
    isFavorite: false
  },
  {
    id: 3,
    type: 'increase',
    title: 'Groundnut prices showing upward trend',
    description: 'Export demand increasing from Asian markets',
    timestamp: '1 day ago',
    isRead: true,
    isFavorite: true
  },
  {
    id: 4,
    type: 'recommendation',
    title: '🌾 Best crop to grow now: Groundnut',
    description: 'Stable prices & high demand expected in the next quarter',
    timestamp: '1 day ago',
    isRead: false,
    isFavorite: false
  },
  {
    id: 5,
    type: 'news',
    title: 'New MSP announcement for oilseeds',
    description: 'Government increases minimum support prices for 5 oilseed crops',
    timestamp: '2 days ago',
    isRead: false,
    isFavorite: false
  },
  {
    id: 6,
    type: 'news',
    title: 'Rainfall trend report: Monsoon predictions',
    description: 'Weather department forecasts normal monsoon for oilseed regions',
    timestamp: '3 days ago',
    isRead: true,
    isFavorite: false
  }
];

export default ALERTS;