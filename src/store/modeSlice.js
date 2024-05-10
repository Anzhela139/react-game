import { createSlice } from '@reduxjs/toolkit'

const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    value: isDark ? 'dark' : 'light'
  },
  reducers: {
    changeMode: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light'
    }
  }
})

export const { changeMode } = modeSlice.actions

export default modeSlice.reducer