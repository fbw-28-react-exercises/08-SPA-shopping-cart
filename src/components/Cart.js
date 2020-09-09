import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../App";

export default function Cart() {
  const { cartData, setCartData, data, setData } = useContext(MyContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = cartData.reduce((acc, item) => {
      acc = acc + item.price * item.number;
      return acc;
    }, 0);
    setTotal(sum);
  }, [cartData]);

  const removeOneItem = (item) => {
    //changing Cart Data
    //first find the item user clicked in cartData array
    let searchItem = cartData.find(({ title }) => title === item.title);
    //then find index number of that item
    let index = cartData.indexOf(searchItem);
    //make a copy of cartData array,so can manipulate data (that item)
    let copyCartData = [...cartData];

    //checking for the condition, if number of items in our cart is greater than one,we will only reduce number property of that item
    if (searchItem.number > 1) {
      copyCartData[index].number = copyCartData[index].number - 1;
      setCartData(copyCartData);
    } else {
        //otherwise remove that specific item completely
      copyCartData.splice(index, 1);
      setCartData(copyCartData);
    }

    //changing in main Data
    //finding that item in our main data,so can make increment back in our inventory
    let serachItemInData = data.find(({ title }) => title === item.title);
    let indexInData = data.indexOf(serachItemInData);
    //making copy of main Data
    let copyData = [...data];
    //targeting that specific item in our data and increment inventory property by 1.
    copyData[indexInData].inventory = copyData[indexInData].inventory + 1;
    //once we have change our data ,we are setting our state.
    setData(copyData);
  };

  const deleteAllItems=(item)=>{
     //changing Cart Data
     let searchItem = cartData.find(({ title }) => title === item.title);
     let index = cartData.indexOf(searchItem);
 
     let copyCartData = [...cartData];

     //when user click on delete all button, here we dont need any condition ,we will delete complete item from our card.
       copyCartData.splice(index, 1);
       setCartData(copyCartData);
 
     //changing in main Data
     let serachItemInData = data.find(({ title }) => title === item.title);
     let indexInData = data.indexOf(serachItemInData);
     let copyData = [...data];
     //setting our item inventory back to what is was before in main data.
     copyData[indexInData].inventory = copyData[indexInData].inventory + item.number;
     setData(copyData);
  }


  console.log(cartData);
  return (
    <div>
      <h1>Total: $ {total}</h1>
      {cartData.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.title} | ${item.price} | x{item.number}
            </h1>
            <button onClick={() => removeOneItem(item)}>remove one</button>
            <button onClick={()=>deleteAllItems(item)}>remove all</button>
          </div>
        );
      })}
      <button>Checkout</button>
    </div>
  );
}
