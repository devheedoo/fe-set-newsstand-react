import React from 'react';

const SubscriptionContext = React.createContext({
  subscription: [
    { id: '055' },
    { id: '057' },
    { id: '073' },
  ]
});

export default SubscriptionContext;