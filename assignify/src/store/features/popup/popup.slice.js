import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeePopup:false,
  deletePopup:false
}

export const popupSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    openEmployeePopup:(state, action)=>{
        state.employeePopup=action.payload ?? true;
    },
    closeEmployeePopup:(state, actioin)=>{
        state.employeePopup=false;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { openEmployeePopup,closeEmployeePopup } = popupSlice.actions

export default popupSlice.reducer
