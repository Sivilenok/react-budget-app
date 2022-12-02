import { useBudgetContext, useCurrencyContext, useExpensesContext } from "../../context";
import { StyledRemainingCard } from "./styles";

export const RemainingCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaining = budget - expenses.reduce((total, { cost }) => total + +cost, 0);

  const isOverSpending = remaining < 0;

  return (
    <StyledRemainingCard $isOverSpending={isOverSpending}>
        {isOverSpending
          ? `Overspending by ${currentCurrency.value}${Math.abs(remaining)} `
          : `Remaining: ${currentCurrency.value}${remaining}`}
    </StyledRemainingCard>
  );
};
  

      
   