import { createContext, useContext, useState } from "react";
import {
  IExpense,
  IExpenseContext,
  IExpensesContextProviderProps,
} from "../../types/types";

export const ExpensesContext = createContext<IExpenseContext>(
  {} as IExpenseContext
);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
      expenses: [],
    
      setNewExpense: (newExpense: IExpense) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses, newExpense],
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

export const useExpensesContext = () =>
  useContext<IExpenseContext>(ExpensesContext);

export const ExpensesListContext = ({
  children,
}: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
