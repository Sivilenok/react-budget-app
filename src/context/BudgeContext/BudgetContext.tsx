import { createContext, ReactNode, useContext, useState } from "react";
import { IBudgetContext } from "../../types/types";

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setBudget: (newBudget) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: newBudget,
      }));
    },

    remaining: 0,
    setRemaining: () => {
      setBudgetContext((ctx) => ({
        ...ctx,
        remaining: +ctx.budget - ctx.spending,
      }));
    },

    spending: 0,
    setSpending: (newSpending) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        spending: ctx.spending + newSpending,
      }));
    },
  }));
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
