import { createSlice } from "@reduxjs/toolkit";

export const QSlice = createSlice({
  name: "questionInfo",

  initialState: {
    question_Id: null,
    QuestionName: null,
  },

  reducers: {
    setQuestion: (state, action) => {
      state.question_Id = action.payload.question_Id;
      state.QuestionName = action.payload.questionName;
    },
  },
});

export const selectquestionId = (state) => state.question.question_Id;
export const selectquestionName = (state) => state.question.questionName;
export const { setQuestion } = QSlice.actions;
export default QSlice.reducer;
