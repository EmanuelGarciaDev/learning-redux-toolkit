import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//createSlice is a function that takes an object of reducer functions, a slice name, and an initial state value and lets you generate a slice reducer with corresponding action creators and action types.
//payloadAction is a type that represents the content of the action that is dispatched.
interface CounterState {
  value: number;
}
// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

// define the slice that contains the reducer logic

const counterSlice = createSlice({
  //first argument is an object that contains the name of the slice and the initial state
  name: "counter",
  //then initial state that the reducer will use
  initialState,
  //then an object that contains the reducers
  reducers: {
    //increment
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>){
        state.value += action.payload
    }
    //decrement
    //reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions; //action creators
export default counterSlice.reducer; //reducer