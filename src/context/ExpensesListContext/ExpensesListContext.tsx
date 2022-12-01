import { createContext, useContext, useState } from "react";
import { IExpenseContext, IChildrenContext } from "./index";

const ExpensesContext = createContext<IExpenseContext>(
  {} as IExpenseContext
);

export const useExpensesContext = () => useContext(ExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
      expenses: [],
    
      setNewExpense: (exp) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses, exp],
        }));
      },
      deleteExpense: (id) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: ctx.expenses.filter((exp) => exp.id !== id),
        }));
      },
    })
  );

  return expensesContext;
};

export const ExpensesContextProvider = ({ children }: IChildrenContext) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
