import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slice/setting/settingSlice";

const store = configureStore({
    reducer: {
        setting: settingSlice
    }
})

export default store