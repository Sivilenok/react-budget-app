import { ReactNode } from "react";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  id: string;
  name: string;
  cost: number;
}

export interface IExpenseContext {
  expenses: IExpense[] | [];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}

export interface IBudgetContext {
  budget: number;
  remaining: number;
  spending: number;
  setBudget: (newBudget: number) => void;
  setRemaining: () => void;
  setSpending: (spending: number) => void;
}

export interface IFormData {
  name: string;
  cost: number;
}

export interface IChildrenContext {
  children: ReactNode;
}