import { ReactNode } from "react";
import { IExpense } from "../../types/types";

export interface IExpenseContext {
    expenses: IExpense[];
    setNewExpense: (expense: IExpense) => void;
    deleteExpense: (id: string) => void;
    searchExpense: (name: string) => void;
    searchValue: string;
}

export interface IChildrenContext {
    children: ReactNode;
}

