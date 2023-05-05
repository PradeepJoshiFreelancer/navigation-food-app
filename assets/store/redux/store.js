import { configureStore } from "@reduxjs/toolkit";
import favorateReducer from "./favorate"

export const store = configureStore({
    reducer:{
        favorateMeals:favorateReducer

    }
})