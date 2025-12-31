import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../config/axiosInstance'

export const getEmployees =createAsyncThunk(
    'employee/getEmployees',
    async (payload)=>{
        const response=await api.get('employee')
        console.log(response)
        return response.data
    }
)










