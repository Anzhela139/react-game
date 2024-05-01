import { createSlice } from '@reduxjs/toolkit'

export const isAudioSlice = createSlice({
  name: 'isAudio',
  initialState: {
    value: false
  },
  reducers: {
    changeIsAudio: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeIsAudio } = isAudioSlice.actions

export default isAudioSlice.reducer