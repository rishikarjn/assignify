import {createSlice} from '@reduxjs/toolkit'
import { getEmployees } from './employee.thunk';

const initialState={
    employees: [],
    loading:false,
    error:null,
}

const employeeSlice= createSlice({
    name:'employee',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getEmployees.pending, (state)=>{
               state.loading=true;
        })
        
    }
})
export const {}=employeeSlice.actions;
export default employeeSlice.reducer









