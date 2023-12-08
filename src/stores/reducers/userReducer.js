import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/userActions';

const userSlice = createSlice({
    name: 'user',
    initialState: {
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
        })
        .addCase(login.fulfilled, (state, action) => {
        })
        .addCase(login.rejected, (state, action) => {
        });
    },
  });
  
  export const { userReducer } = userSlice.actions;
  export default userSlice.reducer;
