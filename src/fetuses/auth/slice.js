import { createSlice } from '@reduxjs/toolkit'

const initialState = { }

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment(state) {},
    
  },
})

export const { increment} = auth.actions
export default auth.reducer