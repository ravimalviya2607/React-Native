import  {ADD_TO_CART, REMOVE_FROM_CART, Remove_From_Cart} from './constants';

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}

export function removeToCart(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}