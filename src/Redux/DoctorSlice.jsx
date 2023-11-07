import { createSlice } from '@reduxjs/toolkit';
const INITIALSTATE ={
    Name:"",
    Email:"",
    Phone:"",
    speciality:""
}

const DoctorSlice = createSlice({
    name: 'Doctor',
    initialState: INITIALSTATE,
    reducers: {
     Update:(state,actions)=>{
        state.Name = actions.payload.Name;
        state.Email = actions.payload.Email;
        state.Phone = actions.payload.Phone;
        state.speciality = actions.payload.speciality
     },
     logoutUser:(state)=>{
        Object.assign(state,INITIALSTATE)
     }
    },
  });

  export const { Update, logoutUser } = DoctorSlice.actions;
export default DoctorSlice.reducer;