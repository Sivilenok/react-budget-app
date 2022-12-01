import { ChangeEvent, useState } from "react";
import { StyledBudget, StyledHeader } from "./styles";
import { Title } from "../Title/Title";
import { CustomSelect } from "../Select/Select";
import { StyledBudgetCard, StyledBudgetButton, StyledBudgetInput } from "../BudgetCard/styles";
import { StyledRemainingCard } from "../RemainingCard/styles";
import { StyledSpentCard } from "../SpentCard/styles";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";

export const Budget = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false)
  const { 
    budget,
  } = useBudgetContext();

    const useInput = (initValue: string = "") => {
      const [value, setValue] = useState(initValue);
      const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
      return { value, onChange };
  };

  const onSubmitBudget = () => {
    setIsSaved(!isSaved)

  };

  return (
    <StyledBudget>
      <StyledHeader>
          <Title />
            <CustomSelect />
      </StyledHeader>

      
      <StyledBudgetCard>
        <StyledBudgetInput 
          value={budget}
          disabled={isSaved}
          onChange={useState} 
          type="number" 
          placeholder="Enter  budget..." 
        />

        <StyledBudgetButton onClick={onSubmitBudget}>
          {isSaved ? "Edit" : "Save"}
        </StyledBudgetButton>
      </StyledBudgetCard>

      <StyledRemainingCard>
        Remaining: 
      </StyledRemainingCard>
      
      <StyledSpentCard>
        Spent so far: 
      </StyledSpentCard>
    </StyledBudget>
  );
};
