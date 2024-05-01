import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import sizeSlice from './sizeSlice'
import modeSlice from './modeSlice'
import symbolSlice from './symbolSlice'
import victorySlice from './victorySlice'
import defeatSlice from './defeatSlice'
import loginSlice from './loginSlice'
import isCurrentlyPlayingSlice from './isCurrentlyPlaying'
import isSavedGameSlice from './isSavedGame'
import isAudioSlice from './isAudio'

export default configureStore({
  reducer: {
    menu: menuSlice,
    size: sizeSlice,
    mode: modeSlice,
    symbol: symbolSlice,
    victory: victorySlice,
    defeat: defeatSlice,
    login: loginSlice,
    isCurrentlyPlaying: isCurrentlyPlayingSlice,
    isSavedGame: isSavedGameSlice,
    isAudio: isAudioSlice
  }
})