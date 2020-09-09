import React, { useState ,createContext} from 'react';
import DisplayContainer from './components/DisplayContainer';
import Cart from './components/Cart';

export const MyContext = createContext(null)

function App() {

const [data,setData]=useState([
  {id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2,number:0},
  {id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10,number:0},
  {id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5,number:0}
])

const [cartData,setCartData]=useState([])

  return (
   
    <MyContext.Provider value={{data,setData, cartData,setCartData}}>
    <div className="App">
     <DisplayContainer/>
     <Cart/>
    </div> 
    </MyContext.Provider>

  );
}

export default App;
