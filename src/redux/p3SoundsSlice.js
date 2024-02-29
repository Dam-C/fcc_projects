import { createSlice } from "@reduxjs/toolkit";
import { soundBanks } from "../assets/p3soundBank";

const soundsSlice = createSlice({
  name: "sounds",
  initialState: {
    soundBank: soundBanks.bankB,
    soundPlayed: "none",
    volume: 50,
    muted: false,
  },
  reducers: {
    displaySound: (state, action) => {
      state.soundPlayed = action.payload;
    },
    changeVolume: (state, action) => {
      state.volume = action.payload;
    },
    setMute: (state) => {
      state.muted = !state.muted;
    },
    changeBank: (state, action) => {
      state.soundBank = action.payload;
    },
  },
});

export const { changeBank, displaySound } = soundsSlice.actions;

export default soundsSlice;
