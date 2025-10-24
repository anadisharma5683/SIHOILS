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
    <div className="bg-neutral rounded-xl p-6 shadow-lg border border-border">
      <motion.h3 
        className="text-xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Market Alerts
      </motion.h3>
      <motion.p 
        className="text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Stay informed with real-time alerts relevant to your farming operations
      </motion.p>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            className={`p-4 rounded-lg border ${getPriorityColor(alert.priority)} flex items-start`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              x: 10,
              transition: { duration: 0.2 }
            }}
          >
            <motion.span 
              className="text-2xl mr-3"
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              {getAlertIcon(alert.type)}
            </motion.span>
            <div className="flex-1">
              <div className="flex justify-between">
                <motion.h4 
                  className="font-semibold text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {alert.title}
                </motion.h4>
                <motion.span 
                  className="text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {alert.time}
                </motion.span>
              </div>
              <motion.p 
                className="text-gray-600 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {alert.message}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <button className="text-primary font-medium hover:underline focus:outline-none">
          View All Alerts
        </button>
      </motion.div>
    </div>
  );
};

export default MarketAlerts;