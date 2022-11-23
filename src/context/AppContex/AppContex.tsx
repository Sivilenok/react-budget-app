import { ReactNode, useContext, useState } from "react";
import { BudgetContextProvider } from "../BudgeContext/BudgetContext";
import { ExpensesContextProvider } from "../ExpensesListContext/ExpensesListContext";

export const AppContext = ({ children }: {children: ReactNode}) => (
    <BudgetContextProvider>
        <ExpensesContextProvider>
            {children}
        </ExpensesContextProvider>
    </BudgetContextProvider>
)
