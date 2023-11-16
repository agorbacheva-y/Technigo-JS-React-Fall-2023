import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesSlice from "./reducers/noteSlice";

// The combineReducers helper function turns an object whose values are different
// reducing functions into a single reducing function you can pass to createStore.
const reducer = combineReducers({
  cart: notesSlice,
});

export const store = configureStore({ reducer: reducer });