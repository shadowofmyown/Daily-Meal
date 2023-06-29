import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  console.log("numberOfCartItems", CartCtx);
  const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    console.log("curNumber", item);
    return curNumber + item.amount;
  }, 0);
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
