import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";
import { Component } from "react";

class AddExpense extends Component {
  render() {
    return (
      <div className="new-expense">
        <ExpenseForm addExpenseHandler={this.props.addExpenseHandler} />
      </div>
    );
  }
}

export default AddExpense;
