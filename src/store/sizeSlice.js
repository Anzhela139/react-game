import { createSlice } from '@reduxjs/toolkit'

export const sizeSlice = createSlice({
  name: 'size',
  initialState: {
    value: 3
  },
  reducers: {
    changeSize: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeSize } = sizeSlice.actions

export default sizeSlice.reducer