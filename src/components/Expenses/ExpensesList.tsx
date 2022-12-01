import { IExpense } from "../../types/types";
import { StyledExpensesListItem } from "../ExpensesListItem/styles";
import { StyledExpensesListInput } from "./styles";
import { StyledExpensesList } from "../Expenses/styles";
import { ExpensesListItem } from "../ExpensesListItem/ExpensesListItem";

interface IProps {
  expensesList: IExpense[];
}

export const ExpensesList = ({ expensesList }: IProps) => {    
    return (
      <StyledExpensesList>
        <h1>Expenses</h1>

        <StyledExpensesListInput placeholder="search..." />
        {expensesList.map(({ name, cost, id }) => (
          <ExpensesListItem key={id} name={name} cost={cost} id={id} />
        ))}
          
      </StyledExpensesList>
    );
};
  