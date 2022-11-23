import React, { useState } from "react";
import { StyledBudget, StyledHeader } from "./styles";
import { Title } from "../Title/Title";
import { CustomSelect } from "../Select/Select";
import { StyledBudgetCard, StyledBudgetButton, StyledBudgetInput } from "../BudgetCard/styles";
import { StyledRemainingCard } from "../RemainingCard/styles";
import { StyledSpentCard } from "../SpentCard/styles";
import { CurrencyContextProvider } from "../../context/CurrencyContext/CurrencyContext";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";

export const Budget = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false)
  const { 
    budget,
    remaining,
    spending,
    setBudget, 
    setRemaining,
    setSpending,
  } = useBudgetContext();


  const onSubmitBudget = () => {
    setIsSaved(!isSaved)

  };

  return (
    <StyledBudget>
      <StyledHeader>
          <Title />
          
          <CurrencyContextProvider>
            <CustomSelect />
          </CurrencyContextProvider>
      </StyledHeader>

      <StyledBudgetCard>
        <StyledBudgetInput 
          value={budget}
          disabled={isSaved}
          onChange={event => setBudget(event.target.value)} 
          type="number" 
          placeholder="Enter  budget..." 
        />

        <StyledBudgetButton onClick={onSubmitBudget}>
          {isSaved ? "Edit" : "Save"}
        </StyledBudgetButton>
      </StyledBudgetCard>

      <StyledRemainingCard>
        Remaining: ${remaining}
      </StyledRemainingCard>
      
      <StyledSpentCard>
        Spent so far: ${spending}
      </StyledSpentCard>
    </StyledBudget>
  );
};