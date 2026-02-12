export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  // Simple example middleware to log actions and next state
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', storeAPI.getState());
  return result;
};

