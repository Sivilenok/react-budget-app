import { ReactNode } from "react";
import { IExpense } from "../../types/types";

export interface IExpenseContext {
    expenses: IExpense[] | [];
    setNewExpense: (expense: IExpense) => void;
    deleteExpense: (id: string) => void;
}

export interface IChildrenContext {
    children: ReactNode;
}