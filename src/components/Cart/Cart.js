import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  //The useContext accepts the value provided by React. createContext and then re-render the component
  //whenever its value changes but you can still optimize its performance by using memoization. Example: Program to demonstrate the use of useContext Hook.
  const CartCtx = useContext(CartContext); //we are passing cart contetxt to get access of the cart context
  console.log("test", CartCtx);
  const totalAmount = `${CartCtx?.totalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes[".button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
