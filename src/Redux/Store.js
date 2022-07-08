import { configureStore } from "@reduxjs/toolkit";
import questionreducer from "./QSlice";

export default configureStore({
  reducer: {
    question: questionreducer,
  },
});

// export default configureStore
