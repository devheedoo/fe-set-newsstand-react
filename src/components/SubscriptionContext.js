import React from 'react';

const subscriptionReducer = (subscription, { type, payload }) => {
  switch (type) {
    case 'subscribe':
      return [...subscription, { id: payload }];
      return;
    case 'unsubscribe':
      return subscription.filter(press => press.id !== payload);
      return;
    default:
      break;
  }
}

const SubscriptionContext = React.createContext();

export default SubscriptionContext;