import React, { ReactNode, createContext } from "react";
import { Budget } from "./components/Budget/Budget";
import { ExpensesList } from "./components/ExpensesList/ExpensesList";
import { Form } from "./components/Form/Form";
import { Wrapper } from "./wrapper";

export const App = () => {
  return (
    <Wrapper>
        <Budget />
        <ExpensesList />
        <Form />
      </Wrapper>
  );
};
