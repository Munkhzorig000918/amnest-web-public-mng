import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// Import services (API slices)
import { apiService } from './services/apiService';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiService.reducerPath]: apiService.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, etc.
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(apiService.middleware),
});

// Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch); 