import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  id: number;
  title: string;
  cost: number;
}

export interface IExpenseContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: number) => void;
}

export interface IBudgetContext {
  budget: string | number;
  remaining: number;
  spending: number;
  setBudget: (budget: string | number) => void;
  setRemaining: (remaining: number) => void;
  setSpending: (spending: number) => void;
}
