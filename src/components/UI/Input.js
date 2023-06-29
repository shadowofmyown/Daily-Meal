import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  //<input {...props.input} /> like this bcz it will ensure that all properties are available
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.input.id}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
