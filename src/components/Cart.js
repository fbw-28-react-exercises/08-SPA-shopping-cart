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
    let searchItem = cartData.find(({ title }) => title === item.title);
    let index = cartData.indexOf(searchItem);

    let copyCartData = [...cartData];

    if (searchItem.number > 1) {
      copyCartData[index].number = copyCartData[index].number - 1;
      setCartData(copyCartData);
    } else {
      copyCartData.splice(index, 1);
      setCartData(copyCartData);
    }

    //changing in main Data
    let serachItemInData = data.find(({ title }) => title === item.title);
    let indexInData = data.indexOf(serachItemInData);
    let copyData = [...data];
    copyData[indexInData].inventory = copyData[indexInData].inventory + 1;
    setData(copyData);
  };

  const deleteAllItems=(item)=>{
     //changing Cart Data
     let searchItem = cartData.find(({ title }) => title === item.title);
     let index = cartData.indexOf(searchItem);
 
     let copyCartData = [...cartData];

       copyCartData.splice(index, 1);
       setCartData(copyCartData);
 
     //changing in main Data
     let serachItemInData = data.find(({ title }) => title === item.title);
     let indexInData = data.indexOf(serachItemInData);
     let copyData = [...data];
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
