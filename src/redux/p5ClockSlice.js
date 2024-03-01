import { createSlice } from "@reduxjs/toolkit";

const clockSlice = createSlice({
  name: "clock",
  initialState: {
    timerOn: false,
    reseted: false,
    breakLength: 5,
    sessionLength: 25,
  },
  reducers: {
    //modification de la durée de la session
    chgSessionT: (state, action) => {
      if (state.sessionLength >= 1 && action.payload == 1) {
        state.sessionLength += action.payload;
      } else if (state.sessionLength >= 1 && action.payload == -1) {
        if (state.sessionLength > 1) {
          state.sessionLength += action.payload;
        }
      }
    },
    chgBreak: (state, action) => {
      if (state.breakLength >= 1 && action.payload == 1) {
        state.breakLength += action.payload;
      } else if (state.breakLength >= 1 && action.payload == -1) {
        if (state.breakLength > 1) {
          state.breakLength += action.payload;
        }
      }
    },
    resetClock: (state) => {
      state.timerOn = false;
      state.breakLength = 5;
      state.sessionLength = 25;
      state.reseted = true;
      state.breakTime = false;
    },
    startSession: (state) => {
      state.timerOn = !state.timerOn;
      state.reseted = false;
    },
  },
});

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  resetClock,
  startSession,
} = clockSlice.actions;

export default clockSlice;
