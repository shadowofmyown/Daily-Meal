import { Fragment } from "react";
import imgMeal from "../../assets/meals (1).jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Daily Meal</h1>
        <HeaderCartButton onClick={props.onShowCart}   />
      </header>
      <div className={classes["main-image"]}>
        <img alt="" src={imgMeal} />
      </div>
    </Fragment>
  );
};

export default Header;
