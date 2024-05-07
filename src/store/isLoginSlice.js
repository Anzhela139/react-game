import { createSlice } from '@reduxjs/toolkit'

export const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState: {
    value: "Player1"
  },
  reducers: {
    changeIsLogin: (state, action) => {
      state.value = action.payload
      console.log(state.value, action.payload)
    }
  }
})

export const { changeIsLogin } = isLoginSlice.actions

export default isLoginSlice.reducer