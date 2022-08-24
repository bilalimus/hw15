import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import { Component } from "react";

class Expenses extends Component {
  

  render() {
    return (
      <div className="expenses">
        {this.props.expenses.map((element) => {
          return (
            <ExpenseItem
              key={element.id}
              title={element.title}
              date={element.date}
              amount={element.amount}
            />
          );
        })}
      </div>
    );
  }
}


export default Expenses;
