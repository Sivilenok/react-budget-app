import ReactDOM from "react-dom/client";
import App from "./App";
import { BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider } from "./context";
import GlobalStyle from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <>
      <GlobalStyle />
      <CurrencyContextProvider>
        <BudgetContextProvider>
         <ExpensesContextProvider>
            <App />
         </ExpensesContextProvider>
        </BudgetContextProvider>
      </CurrencyContextProvider>
    </>,
);
