import React from "react";
import { ExpensesList } from "./components/Expenses/ExpensesList";
import { Form } from "./components/Form/Form";
import GlobalStyle from "./globalStyles";

export const App = () => (
  <>
    <GlobalStyle />
    <div>
        <h2>Welcome to App</h2>
        <Form />
        <ExpensesList />
    </div>
  </>
  
);