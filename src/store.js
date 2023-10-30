import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart(state,action){
            state.push(action.payload)
            // console.log(action.payload)
            // console.log(state)
        },
    }
})
// console.log(initialState)


export const {addCart} = cartSlice.actions
export default cartSlice.reducer

// const store = configureStore({
//     reducer:{
//         cart:CartSlice.reducer
//     }
// })
// export default store