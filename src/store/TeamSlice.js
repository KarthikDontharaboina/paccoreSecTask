import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    data: {
        teamSize: 15,
        budget: 3000,
        selectedServices: [],
        submittedData:null
    }
};


const TeamSlice = createSlice({
    name: "TeamSlice",
    initialState: initialState,
    reducers: {
        teamSizeRed(state, action) {
            state.data.teamSize = action.payload;
        },
        budgetRed(state, action) {
            state.data.budget = action.payload;
        },
        filterRed(state, action){
            state.data.selectedServices.filter(id => id !== action.payload);
        },
        selectedDataRed(state,action){
            state.data.selectedServices=[...state.data.selectedServices, action.payload]
        },
        CountineSubmite(state, action) {
            console.log("Action ::", action.payload);
            state.data.submittedData = {
                teamSize: action.payload.teamSize,
                budget: action.payload.budget,
                selectedServices: action.payload.selectedServices,
             
            };
            // Clear the fields after submission
            state.fullnameinput = "";
            state.lastnameinput = "";
            state.emailinput = "";
            state.website = "";
            state.cuntrycode = "";
            state.phonenumeber = "";
            state.textarea = "";
          },

    }
});


export const TeamActions = TeamSlice.actions;

export default TeamSlice.reducer;