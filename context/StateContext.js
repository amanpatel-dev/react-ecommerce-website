//context is used to resolve multiple level props passing
import React, { createContext, useContext, useState, useEffect } from "react";
//this is for the pop-up
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities + quantity
    );
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => { 
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    }
    else{
      product.quantity = quantity;
      //array destructuring using the spread operator. For now i not getting how this is working
      setCartItems([...cartItems,{...product}])
      console.log([...cartItems,{...product}])
    }
    toast.success(`${qty} ${product.name} added to cart`)
  };


  const toggleCartItemQuantity=(id,value)=>{
foundProduct=cartItems.find((item)=>item._id===id);
index=cartItems.findIndex((product)=>product._id===id);

if(value=='inc')
{

  setCartItems([...cartItems,{...product,quantity:product.quantity+1}])
  setTotalPrice((prevTotalPrice)=>prevTotalPrice + foundProduct.price)
  setTotalQuantities(prevTotalQuantities=>prevTotalQuantities+1)
}
else if(value==='dec')
{if(foundProduct.quantity>1)
  {
    setCartItems([...cartItems,{...product,quantity:product.quantity-1}])
    setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price)
    setTotalQuantities(prevTotalQuantities=>prevTotalQuantities-1)
  }

}
  }
  //using the previous state for increment.
  const incQty = () => {
    setQty((prevQty) => {
      return prevQty + 1;
    });
  };
  //using the same previous state for decrement
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  //Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalPrice,
        totalQuantities,
        qty,
        setShowCart,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity
      }}
    >
      {children}
    </Context.Provider>
  );
};
// this type of export is going to allow us  to use our state essentially just like a hook
export const useStateContext = () => useContext(Context);
