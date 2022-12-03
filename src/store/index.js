import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slice/setting/settingSlice";
import timerSlice from "./slice/timer/timerSlice";

const store = configureStore({
    reducer: {
        setting: settingSlice,
        timer: timerSlice
    }
})

export default store