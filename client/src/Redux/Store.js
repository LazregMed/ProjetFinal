import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import ProductReducer from './ProductSlice'
import SaisieReducer from './SaisieProductSlice'

export const Store = configureStore({
    reducer:{
        User     : UserReducer,
        Product  : ProductReducer,
        Saisie   : SaisieReducer
    }
})