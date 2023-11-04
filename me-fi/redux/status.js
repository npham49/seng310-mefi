import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    value: "offline",
  },
  reducers: {
    setIdle: (state) => {
      state.value = "idle";
    },
    setHelp: (state) => {
      state.value = "help";
    },
    setAlert: (state) => {
      state.value = "alert";
    },
    setProximityAlert: (state) => {
      state.value = "proximityAlert";
    },
    setActive: (state) => {
      state.value = "active";
    },
    setAssist: (state) => {
      state.value = "assist";
    },
    setOffline: (state) => {
      state.value = "offline";
    },
    setOpenControl: (state) => {
      state.value = "openControl";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIdle,
  setHelp,
  setProximityAlert,
  setAlert,
  setActive,
  setAssist,
  setOffline,
  setOpenControl,
} = statusSlice.actions;

export default statusSlice.reducer;
