import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItem.module.css";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    //amountInputRef.current.value is always a string
    console.log("amountInputRef.current", amountInputRef);
    const enteredAmount = amountInputRef.current.value;
    console.log("enteredAmount", enteredAmount);
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    //one pair of curly braces to evaluate the java script expresion and another one is for object
    //inCustom component we cant use ref directly
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
