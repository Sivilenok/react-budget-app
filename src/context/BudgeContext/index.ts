import { ReactNode } from "react";

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