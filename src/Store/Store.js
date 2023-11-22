import { configureStore } from "@reduxjs/toolkit";
import MessageReducer from "./Reducer/MessageSlice";

export const store = configureStore({
  reducer: {
    Message: MessageReducer,
  },
});
