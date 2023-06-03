/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

let initialState={counter:0,userName:"Rehab"};

let counterSlice=createSlice(
  {
      name:'counter',
      initialState:initialState,
      reducers:{
        //add your actions
        increase:(state)=>{state.counter+=10},
        // eslint-disable-next-line no-unused-expressions
        decrease:(state)=>{state.counter-=10},
        incrementbyamount:(state,action)=>{
          state.counter+=action.payload
        }

      }
  });

  export let counterReducer=counterSlice.reducer;
  export let {increase,decrease,incrementbyamount}=counterSlice.actions