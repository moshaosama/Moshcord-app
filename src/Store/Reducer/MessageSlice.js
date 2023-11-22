import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
  name: "Message",
  initialState: [],
  reducers: {
    AddMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default MessageSlice.reducer;

export const { AddMessage } = MessageSlice.actions;
