import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialstate = {
   data:{
    fullnameinput:"",
    lastnameinput:"",
    emailinput:"",
    website:"",
    cuntrycode:"US",
    phonenumeber:"",
    textarea:"",
    submittedData:null,
   }
}

const inputSlice= createSlice({
 name:'input',
 initialState:initialstate,
 reducers: {
   Fullname(state, action) {
     state.data.fullnameinput = action.payload;
   },
   Lastname(state, action) {
     state.data.lastnameinput = action.payload;
   },
   Email(state, action) {
     state.data.emailinput = action.payload;
   },
   WebSiteupdate(state, action) {
     state.data.website = action.payload;
   },
   Country(state, action) {
     state.data.cuntrycode = action.payload;
   },
   PhoneNumber(state, action) {
     state.data.phonenumeber = action.payload;
   },
   TextArea(state, action) {
     state.data.textarea = action.payload;
   },
   // CountineSubmite(state) {
   //   state.data.submittedData = {
   //     fullnameinput: state.data.fullnameinput,
   //     lastnameinput: state.data.lastnameinput,
   //     emailinput: state.data.emailinput,
   //     website: state.data.website,
   //     cuntrycode: state.data.cuntrycode,
   //     phonenumeber: state.data.phonenumeber,
   //     textarea: state.data.textarea,
   //   };
   //   state.data = {
   //     fullnameinput: "",
   //     lastnameinput: "",
   //     emailinput: "",
   //     website: "",
   //     cuntrycode: "",
   //     phonenumeber: "",
   //     textarea: "",
   //     submittedData: null,
   //   };
   // },
   CountineSubmite(state, action) {
      console.log("Action ::", action.payload);
      state.data.submittedData = {
        fullnameinput: action.payload.fullnameinput,
        lastnameinput: action.payload.lastnameinput,
        emailinput: action.payload.emailinput,
        website: action.payload.website,
        cuntrycode: action.payload.cuntrycode,
        phonenumeber: action.payload.phonenumeber,
        textarea: action.payload.textarea,
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
 },
 

})

// export const {
//     Fullname,
//     Lastname,
//     Email,
//     WebSiteupdate,
//     Country,
//     PhoneNumber,
//     TextArea,
//     CountineSubmite
// }=inputSlice.actions;

export const actions = inputSlice.actions;

export default inputSlice.reducer;

