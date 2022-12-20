import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { employApi } from "./employApi";

export const store = configureStore({
  reducer: {
    [employApi.reducerPath]: employApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employApi.middleware),
});
setupListeners(store.dispatch);
