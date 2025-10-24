// Utility functions for Krishi Shield

export const formatCurrency = (amount: number): string => {
  // Use a fixed format to avoid hydration issues
  return `₹${amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
};

export const formatDate = (dateString: string): string => {
  // Use a fixed format to avoid hydration issues
  const date = new Date(dateString);
  return `${date.getDate()} ${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`;
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};