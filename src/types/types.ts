import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  id: string;
  title: string;
  cost: number;
}

export interface IExpenseContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}
