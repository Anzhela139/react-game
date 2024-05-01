import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: "Player1"
  },
  reducers: {
    changeLogin: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeLogin } = loginSlice.actions

export default loginSlice.reducer