import { ReactNode } from "react";
import { IExpense } from "../../types/types";

export interface IBudgetContextProviderProps {
  children: ReactNode;
}

export interface IBudgetContext {
  budget: number;
  setBudget: (value: number) => void;
}

export interface IChildrenContext {
  children: ReactNode;
}
