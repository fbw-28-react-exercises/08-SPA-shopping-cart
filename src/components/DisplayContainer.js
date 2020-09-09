import React, { useContext } from "react";
import { MyContext } from "../App";

export default function DisplayContainer() {
  const { data, setData, cartData, setCartData } = useContext(MyContext);

  const addToCart = (item) => {
//finding item is already there in cart data or not
    let searchItem = cartData.find(elem=>elem.title===item.title)

    console.log(searchItem)

    //condition 
    if(searchItem){
      //if it is already there
      let indexInCart = cartData.indexOf(searchItem)

      //making copy of our cart data
      let changedCart= [...cartData]

      changedCart[indexInCart].number = changedCart[indexInCart].number+1
      setCartData(changedCart)

     
    }else{
      //if item is not there in cart data
      setCartData([...cartData, { ...item, number: item.number + 1 }]);
        
    }
            //changing inventroy in our main data 
            let indexInData = data.indexOf(item)
            let copyData= [...data]
            copyData[indexInData].inventory=copyData[indexInData].inventory-1
      
            setData(copyData)
  
  
  };

  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <h1>
                {item.title} | ${item.price} | x{item.inventory}
              </h1>
              <button onClick={() => addToCart(item)} disabled={item.inventory===0}>{item.inventory>0?"Add to Cart" : "Sold out" } </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
