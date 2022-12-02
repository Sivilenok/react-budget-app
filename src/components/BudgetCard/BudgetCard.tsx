import { useState } from "react";
import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput } from "../../hooks";
import { StyledTitleText } from "../Title/styles";
import {
  StyledBudgetCard,
  StyledBudgetInput,
  StyledBudgetButton,
} from "./styles";

export const BudgetCard = () => {
  const { setBudget, budget } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();
  const inputBudget = useInput();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const onSubmitBudget = () => {
    setIsSaved(!isSaved);
  };

  return (
    <StyledBudgetCard>
      <StyledBudgetInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
      <StyledTitleText />
      <StyledBudgetButton onClick={onSubmitBudget}>
        {isSaved ? "Edit" : "Save"}
      </StyledBudgetButton>
    </StyledBudgetCard>
  );
};