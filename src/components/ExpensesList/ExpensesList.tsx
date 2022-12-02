import { useEffect, useState } from "react";
import { IExpense } from "../../context";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";
import { StyledEmptyList, StyledExpensesList } from "./styles";

interface IProps {
  expenseList: IExpense[];
}

export const ExpensesList = () => {
  const { expenses, searchValue } = useExpensesContext();
  const [searchExpenses, setSearchExpenses] = useState(expenses);
  useEffect(() => {
    setSearchExpenses(expenses.filter((exp) => exp.name.toLowerCase().includes(searchValue)));
  }, [searchValue, expenses]);

  if (!searchExpenses.length) {
    return <StyledEmptyList>Oooops!🙈</StyledEmptyList>;
  }
  return (
    <StyledExpensesList>
      {searchExpenses.map(({ name, cost, id }) => (
        <ExpensesListItem key={id} title={name} cost={cost} id={id} />
      ))}
    </StyledExpensesList>
  );
};