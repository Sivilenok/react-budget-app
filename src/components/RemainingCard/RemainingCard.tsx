import { StyledRemainingCard } from "./styles";
import { createContext, ReactNode, useContext, useState } from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";

const { currentCurrency } = useCurrencyContext();
const { remaining } = useBudgetContext();
export const RemainingCard = () => {
  if (remaining < 0) {
    return (
      <StyledRemainingCard redcolor>
        Overspending by {currentCurrency.value}
        {Math.abs(remaining)}
      </StyledRemainingCard>
    );
  }
    return (
      <StyledRemainingCard>
        Remaining: {currentCurrency.value}
        {remaining}
      </StyledRemainingCard>
    );
};

      
   