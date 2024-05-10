import { createSlice } from '@reduxjs/toolkit'

export const symbolSlice = createSlice({
  name: 'symbol',
  initialState: {
    value: "cross"
  },
  reducers: {
    changeSymbol: (state) => {
      state.value = state.value === 'img' ? 'cross' : 'img'
    }
  }
})

export const { changeSymbol } = symbolSlice.actions

export default symbolSlice.reducer