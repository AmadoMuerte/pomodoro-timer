import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slice/setting/settingSlice";
import timerSlice from "./slice/timer/timerSlice";
import reportSlice from "./slice/report/reportSlice";

const store = configureStore({
    reducer: {
        setting: settingSlice,
        timer: timerSlice,
        report: reportSlice
    }
})

export default store