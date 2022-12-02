import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { CustomSelect } from "../Select/Select";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";
import { StyledBudget, StyledHeader } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <StyledHeader>
        <Title label="Budget App" />
        <CustomSelect />
      </StyledHeader>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBudget>
  );
};
