import { createSlice } from "@reduxjs/toolkit";

// expression régulière pour vérifier si des opérandes sont présents
// regular expression to check if operands are presents
const checkOpe = /[+*/]/;
const checkMinus = /[\-]/;

const kalkulSlice = createSlice({
  name: "kalkul",
  initialState: {
    equalDone: false,
    zeroOrDecimal: false,
    kalkulus: [],
    currentInput: "0",
  },
  reducers: {
    getInput: (state, action) => {
      // va vérifier si un résultat est présent en display pour le passer dans un nouveau calcul
      // checks if a result is in display and passes it in the new calculus
      if (state.equalDone === true) {
        state.kalkulus = [state.currentInput];
        state.currentInput = "0";
        state.equalDone = false;
      }

      if (state.currentInput === "0") {
        if (action.payload.kalkulValue === "0") {
          state.currentInput = action.payload.kalkulValue;
          state.kalkulus.pop();
          state.kalkulus = [...state.kalkulus, state.currentInput];
        } else if (
          action.payload.kalkType === "num" &&
          action.payload.kalkulValue !== "0"
        ) {
          state.kalkulus.pop();
          state.currentInput = action.payload.kalkulValue;
          state.kalkulus = [...state.kalkulus, state.currentInput];
        }
      } else if (action.payload.kalkType === "num") {
        if (
          checkOpe.test(state.currentInput) === true &&
          checkMinus.test(state.currentInput) === true
        ) {
          state.kalkulus = [...state.kalkulus, action.payload.kalkulValue];
          state.currentInput = action.payload.kalkulValue;
        } else {
          state.kalkulus = [...state.kalkulus, action.payload.kalkulValue];
          state.currentInput = state.currentInput + action.payload.kalkulValue;
        }
      }

      // partie pour la vérification des chiffres à virgule
      // part to check float numbers
      if (
        action.payload.kalkType === "decimal" &&
        state.zeroOrDecimal === false
      ) {
        if (
          checkOpe.test(state.currentInput) === true &&
          checkMinus.test(state.currentInput) === true
        ) {
          state.currentInput = "0" + action.payload.kalkulValue;
          state.kalkulus = [...state.kalkulus, state.currentInput];
        } else {
          state.currentInput = state.currentInput + action.payload.kalkulValue;
          state.kalkulus = [...state.kalkulus, action.payload.kalkulValue];
        }
        state.equalDone = false;
        state.zeroOrDecimal = true;
      }

      if (action.payload.kalkType === "ope") {
        if (
          checkOpe.test(state.currentInput) === true ||
          checkMinus.test(state.currentInput) === true
        ) {
          if (state.currentInput === action.payload.kalkulValue) {
            state.kalkulus.pop();
            state.currentInput = action.payload.kalkulValue;
            state.kalkulus = [...state.kalkulus, state.currentInput];
          } else if (
            state.currentInput === "-" &&
            checkOpe.test(state.kalkulus[state.kalkulus.length - 2]) === true
          ) {
            state.kalkulus.pop();
            state.kalkulus.pop();
            state.currentInput = action.payload.kalkulValue;
            state.kalkulus = [...state.kalkulus, state.currentInput];
          } else if (
            action.payload.kalkulValue === "-" &&
            checkOpe.test(state.currentInput) === true
          ) {
            state.currentInput = action.payload.kalkulValue;
            state.kalkulus = [...state.kalkulus, state.currentInput];
          } else if (state.currentInput !== action.payload.kalkulValue) {
            state.currentInput = action.payload.kalkulValue;
            state.kalkulus = [...state.kalkulus, state.currentInput];
          }
        } else {
          state.currentInput = action.payload.kalkulValue;
          state.kalkulus = [...state.kalkulus, state.currentInput];
        }
        state.equalDone = false;
        state.zeroOrDecimal = false;
      }

      // permet de calculer l'ensemble des données rentrées
      // compute the data given by the user
      if (action.payload.kalkType === "equals") {
        if (
          checkOpe.test(state.currentInput) === true &&
          checkMinus.test(state.currentInput) === true
        ) {
          state.kalkulus.pop();
        }
        state.currentInput = eval(state.kalkulus.join(""));
        state.kalkulus = [
          ...state.kalkulus,
          action.payload.kalkulValue,
          state.currentInput,
        ];
        state.equalDone = true;
        state.zeroOrDecimal = false;
      }
      // cette partie du code permet de réinitialiser le state de la calculatrice
      // this part resets the ccalculator's state
      if (action.payload.kalkType === "clear") {
        state.kalkulus = [];
        state.currentInput = "0";
        state.equalDone = true;
        state.zeroOrDecimal = false;
      }
    },
  },
});

export const { getInput } = kalkulSlice.actions;

export default kalkulSlice;
