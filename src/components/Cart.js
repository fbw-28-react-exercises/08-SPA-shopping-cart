import React,{useContext} from 'react'
import {MyContext} from "../App"

export default function Cart() {

    const {cartData,setCartData} = useContext(MyContext)



    return (
        <div>
           <h1>Total: $ 0</h1>
           <button>Checkout</button>
        </div>
    )
}
