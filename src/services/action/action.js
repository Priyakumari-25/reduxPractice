import {Add_to_Cart,Remove_to_Cart} from '../constant'
export const addToCart=(data)=>{
    console.log('action',data)
    return{
       type:Add_to_Cart,
       data:data
    }
}
export const removeToCart=()=>{
    return{
       type:Remove_to_Cart,
    //    data:data
    }
}
