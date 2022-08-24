import { Component } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

class App extends Component {
  constructor() {
    super();
    this.state = {
      expenses: [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2023, 7, 14),
        },
        {
          id: "e2",
          title: "New TV",
          amount: 799.49,
          date: new Date(2019, 2, 12),
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2020, 2, 28),
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
        },
        {
          id: "e5",
          title: "Phone",
          amount: 450,
          date: new Date(2022, 5, 12),
        },
      ],
    };
  }

  addExpenseHandler(newData) {
    this.setState((prevState) => {
      return {
        expenses: [...prevState.expenses, newData]
      }
    })
  }

  render() {
    

    return (
      <div>
        <AddExpense addExpenseHandler={this.addExpenseHandler.bind(this)} />
        <Expenses expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
