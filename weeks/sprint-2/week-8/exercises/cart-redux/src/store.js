import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartCounter from "./reducers/cartSlice";

const reducer = combineReducers({
  cart: cartCounter,
});

// create your store here
export const store = configureStore({
  reducer: reducer,
  //   devTools: process.env.NODE_ENV !== "production",
});
