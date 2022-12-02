import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { StyledBudgetInput } from "../BudgetCard/styles";
import { StyledTitleText } from "../Title/styles";
import { StyledExpensesListCrossButton, StyledExpensesListItem } from "./styles";

interface IProps {
  title: string;
  cost: number;
  id: string;
}

export const ExpensesListItem = ({ title, cost, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <StyledExpensesListItem>
      <StyledTitleText>{title}</StyledTitleText>
      <StyledBudgetInput>
        {currentCurrency.value}
        {cost}
      </StyledBudgetInput>
      <StyledExpensesListCrossButton onClick={handleDelete}>
      </StyledExpensesListCrossButton>
    </StyledExpensesListItem>
  );
};
