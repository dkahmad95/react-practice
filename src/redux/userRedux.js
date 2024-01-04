import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    Users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get Users
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.Users = action.payload;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
   
  },
});

export const {  getUsersStart, getUsersSuccess, getUsersFailure} = usersSlice.actions;
export default usersSlice.reducer;