import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../config/axiosInstance'

export const getEmployees =createAsyncThunk(
    'employee/getEmployees',
    async (_, {rejectWithValue})=>{
       try{
           const response=await api.get('employee')
        return response.data
       } catch(error){
       return rejectWithValue('Something went wrong')
       }
       
    }
)

export const postEmployees =createAsyncThunk(
    'employee/postEmployees',
    async (details, {rejectWithValue})=>{
       try{
           const response=await api.post('employee', details)
           dispatchEvent(getEmployees())
        return response.data
       } catch(error){
       return rejectWithValue('Something went wrong')
       }
        
    } 
)














