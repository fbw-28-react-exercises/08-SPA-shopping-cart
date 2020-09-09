import React, { useContext } from "react";
import { MyContext } from "../App";

export default function DisplayContainer() {
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>
              <h1>{item.title} | ${item.price} | x{item.inventory}</h1>
              <button>Add to Cart</button>
          </li>;
        })}
      </ul>
    </div>
  );
}
