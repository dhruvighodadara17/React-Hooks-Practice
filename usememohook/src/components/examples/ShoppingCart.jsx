import React, { useState, useMemo } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 1000, quantity: 2 },
    { id: 2, name: "Phone", price: 500, quantity: 3 },
  ]);

  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <div>
      <h2>Total Price: ${totalPrice}</h2>
      <ul>
        {cart.map((item) => (
          <div style={{backgroundColor:"lightgreen", width:"fit-content", padding:"1.5em", margin:"1em"}} key={item.id}>
            <p><b>Product Name: </b>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total:- ${item.price * item.quantity}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
