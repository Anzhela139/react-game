import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: "Player1"
  },
  reducers: {
    changelogin: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changelogin } = loginSlice.actions

export default loginSlice.reducer