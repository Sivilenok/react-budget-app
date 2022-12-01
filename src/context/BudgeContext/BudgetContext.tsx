import { createContext, useContext, useState } from "react";
import { IBudgetContext, IChildrenContext } from "./index";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);
export const useBudgetContext = () => useContext(BudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setBudget: (newBudget) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: newBudget,
      }));
    },
  }));
  return budgetContext;
};

export const BudgetContextProvider = ({ children }: IChildrenContext) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
