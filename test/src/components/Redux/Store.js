import { counterReducer } from "./CounterSlice";

const { configureStore } = require("@reduxjs/toolkit");
let store=configureStore({
  reducer: {
    x:counterReducer,
  }
});
export default store;
