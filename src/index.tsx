import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { AppContextProvider } from "./context/AppContex/AppContext";
import { BudgetContext } from "./context/BudgeContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { CurrencyContext } from "./context/CurrencyContext/CurrencyContext";
import { ExpensesListContext } from "./context/ExpensesListContext/ExpensesListContext";


const providers = [
  BudgetContext,
  CurrencyContext,
  ExpensesListContext,
];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <>
      <GlobalStyle />
      <AppContextProvider components={providers}>
        <App />
      </AppContextProvider>
    </>,
);
