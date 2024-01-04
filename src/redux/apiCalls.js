

import { getProductsFailure, getProductsStart, getProductsSuccess } from "./productRedux"
import { publicRequest } from "./requestMethods"
import { getUsersFailure, getUsersStart, getUsersSuccess } from "./userRedux"




// get users 
export const getUsers = async (dispach) =>{
   dispach(getUsersStart())
   try{
    const res = await publicRequest.get('/users')
    dispach(getUsersSuccess(res.data))

   }catch(err){
    dispach(getUsersFailure())
   }
}


// get Products 
export const getProducts = async (dispach) =>{
   dispach(getProductsStart())
   try{
    const res = await publicRequest.get('/products')
    dispach(getProductsSuccess(res.data))

   }catch(err){
    dispach(getProductsFailure())
   }
}