import { ReactNode, useContext, useState } from "react";
import { BudgetContextProvider } from "../BudgeContext/BudgetContext";
import { ExpensesListContext } from "../ExpensesListContext/ExpensesListContext";

export const AppContext = ({ children }: {children: ReactNode}) => (
    <BudgetContextProvider>
        <ExpensesListContext>
            {children}
        </ExpensesListContext>
    </BudgetContextProvider>
);