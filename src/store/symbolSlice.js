import { createSlice } from '@reduxjs/toolkit'

export const symbolSlice = createSlice({
  name: 'symbol',
  initialState: {
    value: "cross"
  },
  reducers: {
    changeSymbol: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeSymbol } = symbolSlice.actions

export default symbolSlice.reducer