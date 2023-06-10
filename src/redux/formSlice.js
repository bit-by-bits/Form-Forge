import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    entries: localStorage.getItem("form")
      ? JSON.parse(localStorage.getItem("form"))
      : [],
  },
  reducers: {
    add: (state, action) => {
      const index = state.entries.findIndex(
        entry => entry.equipment_no === action.payload.equipment_no
      );

      if (index !== -1) {
        message.error("Field already exists!");
        return;
      } else {
        state.entries.push(action.payload);

        localStorage.setItem("form", JSON.stringify(state.entries));
        message.success("Field added!");
        return;
      }
    },

    remove: (state, action) => {
      const index = state.entries.findIndex(
        entry => entry.equipment_no === action.payload.equipment_no
      );

      if (index !== -1) {
        state.entries.splice(index, 1);
        localStorage.setItem("form", JSON.stringify(state.entries));
        message.success("Field removed!");
        return;
      } else {
        message.error("Field does not exist!");
        return;
      }
    },
  },
});

export const { add, remove } = formSlice.actions;
export default formSlice.reducer;
