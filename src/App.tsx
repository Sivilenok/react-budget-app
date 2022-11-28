import React, { ReactNode, createContext } from "react";
import { Budget } from "./components/Budget/Budget";
import { ExpensesList } from "./components/Expenses/ExpensesList";
import { Form } from "./components/Form/Form";
import { Wrapper } from "./wrapper";
import { ExpensesContextProvider } from "./context/ExpensesListContext/ExpensesListContext";
import { BudgetContextProvider } from "./context/BudgeContext/BudgetContext";
import { AppContext } from "./context/AppContex/AppContex";

const App = () => {
  return (
    <AppContext>
      <Wrapper>
        <Budget />
        <ExpensesList />
        <Form />
      </Wrapper>
    </AppContext>
  );
};

export default App;
