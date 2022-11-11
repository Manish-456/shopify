import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
 IDLE :  "idle",
 ERR : "error",
 LOADING : "loading"
})

const ProductSlice = createSlice({
  name : "product",

  initialState :{
    data : [],
     
    status : STATUSES.IDLE,
    
  } ,
  reducers : {
   setProducts(state, action){
   
    state.data = action.payload
   },
   setStatus(state, action){
   
    state.status = action.payload
   },
  }
  
})

export const { setProducts, setStatus } = ProductSlice.actions
export default ProductSlice.reducer;


// Thunks
export function fetchProducts() {
 return async function fetchProductThunk(dispatch, getState){
  dispatch(setStatus(STATUSES.LOADING));
  try{
   const url = "https://fakestoreapi.com/products";
      const data = await fetch(url);
      const fetchData = await data.json()
      dispatch(setProducts(fetchData))
      dispatch(setStatus(STATUSES.IDLE))
     }catch(err){
      console.log(err)
     dispatch(setStatus(STATUSES.ERR)) 
  } 
 }
}
