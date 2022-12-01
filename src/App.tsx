import React, { ReactNode, createContext } from "react";
import { Budget } from "./components/Budget/Budget";
import { ExpensesList } from "./components/Expenses/ExpensesList";
import { Form } from "./components/Form/Form";
import { Wrapper } from "./wrapper";

const App = () => {
  return (
    <Wrapper>
        <Budget />
        <ExpensesList expensesList={[]} />
        <Form />
      </Wrapper>
  );
};

export default App;
