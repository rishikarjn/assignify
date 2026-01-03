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
           dispatch(getEmployees())
        return response.data
       } catch(error){
       return rejectWithValue('Something went wrong')
       }
        
    } 
)

export const deleteEmployees =createAsyncThunk(
    'employee/deleteEmployees',
    async (id, {rejectWithValue, dispatch})=>{
       try{
           const response=await api.delete(`employee/${id}`)
           dispatch(getEmployees())
        return response.data
       } catch(error){
       return rejectWithValue('Something went wrong')
       }
        
    } 
)

export const updateEmployees =createAsyncThunk(
    'employee/updateEmployees',
    async ({id,details}, {rejectWithValue, dispatch})=>{
       try{
           const response=await api.put(`employee/${id}`, details)
           dispatch(getEmployees())
        return response.data
       } catch(error){
       return rejectWithValue('Something went wrong')
       }
        
    } 
)
















