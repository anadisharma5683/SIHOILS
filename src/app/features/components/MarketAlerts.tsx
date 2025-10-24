'use client';

import { motion } from 'framer-motion';

const MarketAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "price",
      title: "Price Alert",
      message: "Groundnut prices increased by 5% in your region",
      time: "2 hours ago",
      priority: "high"
    },
    {
      id: 2,
      type: "weather",
      title: "Weather Advisory",
      message: "Heavy rainfall expected in 3 days, may affect harvesting",
      time: "5 hours ago",
      priority: "medium"
    },
    {
      id: 3,
      type: "market",
      title: "Market Opportunity",
      message: "New buyer offering 3% premium for sesame seeds",
      time: "1 day ago",
      priority: "low"
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "price": return "💰";
      case "weather": return "🌧️";
      case "market": return "🛒";
      default: return "📢";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 border-red-300";
      case "medium": return "bg-yellow-100 border-yellow-300";
      case "low": return "bg-green-100 border-green-300";
      default: return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <div className="bg-accent rounded-xl p-6 shadow-md border border-border">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Alerts</h3>
      <p className="text-gray-600 mb-6">
        Stay informed with real-time alerts relevant to your farming operations
      </p>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-4 rounded-lg border ${getPriorityColor(alert.priority)} flex items-start`}
          >
            <span className="text-2xl mr-3">{getAlertIcon(alert.type)}</span>
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-gray-800">{alert.title}</h4>
                <span className="text-xs text-gray-500">{alert.time}</span>
              </div>
              <p className="text-gray-600 mt-1">{alert.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-primary font-medium hover:underline">
          View All Alerts
        </button>
      </div>
    </div>
  );
};

export default MarketAlerts;