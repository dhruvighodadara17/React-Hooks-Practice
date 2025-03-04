import React, { useReducer, useState } from "react";

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingItem = state.find((item) => item.id === action.product.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  // Calculate total price correctly considering quantity
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price}
          </p>
          <button onClick={() => dispatch({ type: "ADD", product })}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ${item.price * item.quantity}
              <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
                Remove
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    id: item.id,
                    quantity: Number(e.target.value),
                  })
                }
                min="1"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h2>Total: ${total}</h2>
    </div>
  );
};

export default ShoppingCart;
