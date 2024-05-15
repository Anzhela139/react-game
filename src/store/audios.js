import { createSlice } from '@reduxjs/toolkit'

export const audiosSlice = createSlice({
  name: 'audios',
  initialState: {
    value: ''
  },
  reducers: {
    changeAudios: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeAudios } = audiosSlice.actions

export default audiosSlice.reducer