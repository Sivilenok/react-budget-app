import { Title } from "../Title/Title";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { StyledExpenses } from "./styles";
import { Search } from "../Search/Search";
import { useInput } from "../../hooks";
import { useExpensesContext } from "../../context";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();

  return (
    <StyledExpenses>
      <Title label={"Expenses"} />
      <Search {...search} />
      <ExpensesList />
    </StyledExpenses>
  );
};