import { createContext, useContext, useState } from "react";
import { IExpenseContext, IExpensesContextProviderProps } from "../../types/types";


 export const ExpensesContext = createContext<IExpenseContext>(
  {} as IExpenseContext
);

const useExpensesContextValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
        () => ({
            expenses: [
                {
                    id: 1234567,
                    title: "Lopata",
                    cost: 100,
                },
            ],
            setNewExpense: newExpense => {
                setExpensesContext(ctx => ({
                    ...ctx,
                    expenses: [...ctx.expenses, newExpense],
                }));
            },
            deleteExpense: (id: number) => {
                setExpensesContext(ctx => ({
                    ...ctx,
                    expenses: ctx.expenses.filter(exp => exp.id !== id),
                }));
            }
        })
    );

    return expensesContext;
};

export const useExpensesContext = () => 
    useContext<IExpenseContext>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};

