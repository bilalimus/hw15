import { Component } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

class ExpenseItem extends Component {
  render() {
    return (
      <div className="expense-item">
        <ExpenseDate date={this.props.date} />
        <div className="expense-item__description">
          <h2>{this.props.title}</h2>
          <div className="expense-item__price">{this.props.amount} сом</div>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
