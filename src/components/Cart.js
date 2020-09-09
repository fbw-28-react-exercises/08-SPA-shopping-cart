import React, { useContext, useState ,useEffect} from "react";
import { MyContext } from "../App";

export default function Cart() {
  const { cartData, setCartData } = useContext(MyContext);

 
  const [total,setTotal]=useState(0)

    useEffect(()=>{
            let sum = cartData.reduce((acc,item)=>{
                    acc= acc + item.price * item.number
                    return acc
            },0)
            setTotal(sum)
    },[cartData])

  return (
    <div>
      <h1>Total: $ {total}</h1>
      {cartData.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.title} | ${item.price} | x{item.number}
            </h1>
            <button>remove item</button> <button>remove all</button>
          </div>
        );
      })}
      <button>Checkout</button>
    </div>
  );
}
