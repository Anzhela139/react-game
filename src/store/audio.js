import { createSlice } from '@reduxjs/toolkit'

export const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    value: ''
  },
  reducers: {
    changeIsAudio: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeIsAudio } = audioSlice.actions

export default audioSlice.reducer