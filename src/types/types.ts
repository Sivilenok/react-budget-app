import { ReactNode } from "react";
import { Currency } from "../config/currency";

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

export interface IExpense {
  id: string;
  name: string;
  cost: number;
}

export interface IFormData {
  name: string;
  cost: number;
}

export interface IChildrenContext {
  children: ReactNode;
}

export interface ICurrencyOption {
  value: Currency;
  label: keyof typeof Currency;
}