
// App.js
import React from 'react'
import './App.css';
import HomePage from './components/HomePage';

import CartContext from './context/cart/CartContext';
import CartState from './context/cart/CartState';


/* 
<🦄🦄me_2023-0822-context_api-basic_frame-folder>
🍀App.js에 Provider, initialState, reducer, state 모두 넣음      

1. createContext : ㄱcontext만듬 (ㄱcontext.js)

2 Provider, 변수 : <ㄱcontext.Provider value={{ㄴ,ㄷ}}> 있는곳에 변수 넣음 (App.js)

3. useContext : 사용하는곳에서 const{ㄴ,ㄷ}=useContext(ㄱcontext) 넣고 변수 사용 (Footer.js)


<🦄🦄me_2023-0822-2-context_api-basic_frame2-folder_seperated-ver>
🍀CartState.js 파일 따로 만들어서 Provider, initialState, reducer, state 따로 옮겨서 정리하기
   
🍀initialState 최상단에 선언 제일 먼저하기
*/


const App = () => {  

  return (
    <div>   
      <CartState>
        app
        <HomePage/>
      </CartState>
    </div>
    )
  }
  
  export default App



  
  //🍀🍀🍀 CartContext   
  
    // // 🍉action type
    // const SHOW_HIDE_CART = "SHOW_HIDE_CART";
    // const ADD_TO_CART = "ADD_TO_CART";
    // const REMOVE_ITEM = "REMOVE_ITEM";

    // // 🍀reducer
    // const CartReducer = (state, action) => {

    //     switch (action.type) {    
    //             case SHOW_HIDE_CART: {
    //               return {
    //                 ...state,
    //                 showCart: !state.showCart, /* 🍀show & hide Btn */
    //               };
    //             }
      
    //       /* 🍀...spread operator 
    //           + new item add */
    //       case ADD_TO_CART: {
    //               return {
    //                 ...state,
    //                 cartItems: [...state.cartItems, action.payload],
    //               };
    //             }
      
    //       /* 🍀remove: 
    //         .filter
    //         item._id 빼고 새로 리스트 만듬 */
    //       case REMOVE_ITEM: {
    //               return {
    //                 ...state,
    //                 cartItems: state.cartItems.filter(
    //                   (item) => item._id !== action.payload
    //                   ),
    //                 };
    //               }
    //       default:
    //         return state;
    //     }
    // };
    
    // // 🍀initialState

    // const initialState ={
    //   showCart:false,
    //   cartItems:[],   /* cart */
    //   test:"hi test",
    // }
    
    // const [state, dispatch] = useReducer(CartReducer, initialState);
    // console.log(state.cartItems)
    
    // // 🍉dispatch
    // const addToCart = (item) => {    
    //   dispatch({ type: ADD_TO_CART, payload: item });    
    // };
    
    // const showHideCart = () => {    
    //   dispatch({ type: SHOW_HIDE_CART });    
    // };
    
    // const removeItem = (id) => {    
    //   dispatch({ type: REMOVE_ITEM, payload: id });    
    // };      




// 🍀🍀
  // <CartContext.Provider value={{
  //   showCart:state.showCart,  
  //   cartItems:state.cartItems,  
  //   test:state.test,  
  //   addToCart,showHideCart,removeItem,
  // }}>       
  //     <HomePage/>  
  //   </CartContext.Provider>