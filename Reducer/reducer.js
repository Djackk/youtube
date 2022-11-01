import {addToCart} from "./constants";

const initialState={
    cartData:[]
};
export default function cartItems(state=initialState,action){
switch (action.type){
    case addToCart:
        return {
            ...state,
            cartData: action.data
        };
        break;
    default:
        return state
    }
}

