import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
  entries: JSON.parse(localStorage.getItem("form")) || [],
};

const findEntryIndex = (entries, equipmentNo) =>
  entries.findIndex((entry) => entry.equipment_no === equipmentNo);

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    add: (state, action) => {
      const index = findEntryIndex(state.entries, action.payload.equipment_no);

      if (index !== -1) {
        message.error("Field already exists!");
      } else {
        state.entries.push(action.payload);
        localStorage.setItem("form", JSON.stringify(state.entries));
        message.success("Field added!");
      }
    },

    remove: (state, action) => {
      const index = findEntryIndex(state.entries, action.payload.equipment_no);

      if (index !== -1) {
        state.entries.splice(index, 1);
        localStorage.setItem("form", JSON.stringify(state.entries));
        message.success("Field removed!");
      } else {
        message.error("Field does not exist!");
      }
    },
  },
});

export const { add, remove } = formSlice.actions;
export default formSlice.reducer;
