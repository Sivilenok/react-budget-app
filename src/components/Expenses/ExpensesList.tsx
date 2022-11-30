import { useState } from "react";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { IExpense } from "../../types/types";
import { StyledExpensesListItem } from "../ExpensesListItem/styles";
import { StyledExpensesListInput } from "./styles";
import { StyledExpensesList } from "../Expenses/styles";

interface IProps {
  expensesList: IExpense[];
}

export const ExpensesList = ({ expensesList }: IProps) => {    
    return (
      <StyledExpensesList>
        <h1>Expenses</h1>

        <StyledExpensesListInput placeholder="search..." />
        {expensesList.map(({ name, cost, id }) => (
          <StyledExpensesListItem key={id} name={name} cost={cost} id={id} />
        ))}
          
      </StyledExpensesList>
    );
};
  