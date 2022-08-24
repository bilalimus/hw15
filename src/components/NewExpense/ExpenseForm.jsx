import { Component } from "react";
import { useState } from "react";
import "./ExpenseForm.css";

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = { titleValue: "", amountValue: "", dateValue: "" };
  }

  render() {
    const getTitle = (e) => {
      this.setState({ titleValue: e.target.value });
    };

    const getAmount = (e) => {
      this.setState({ amountValue: e.target.value });
    };

    const getDate = (e) => {
      this.setState({ dateValue: e.target.value });
    };

    const submitHandler = (e) => {
      e.preventDefault();
      const expenseData = {
        id: Math.random(),
        title: this.state.titleValue,
        amount: this.state.amountValue,
        date: new Date(this.state.dateValue),
      };
      this.props.addExpenseHandler(expenseData);

      this.setState({ titleValue: "" });
      this.setState({ amountValue: "" });
      this.setState({ dateValue: "" });
    };

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={(e) => {
                getTitle(e);
              }}
              type="text"
              value={this.state.titleValue}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={(e) => {
                getAmount(e);
              }}
              type="number"
              min="0.01"
              step="0.01"
              value={this.state.amountValue}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={(e) => {
                getDate(e);
              }}
              type="date"
              min="2021-01-01"
              max="2022-12-31"
              value={this.state.dateValue}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}
// const ExpenseForm = (props) => {
//     const [titleValue, setTitleValue] = useState('')
//     const [amountValue, setAmountValue] = useState('')
//     const [dateValue, setDateValue] = useState('')

//

//     return (
//
//     )
// }

export default ExpenseForm;
