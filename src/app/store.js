import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import questionreducer from "./QSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    question: questionreducer,
  },
});
