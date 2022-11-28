import { useState } from "react";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { IFormData, IExpense } from "../../types/types";
import {  
  StyledExpensesList, 
  StyledExpensesListItemCost, 
  StyledExpensesListInput, 
  StyledExpensesListCrossButton, 
  StyledExpensesListItem,
  StyledExpensesListItemWrapper,
} from "./styles";

export const ExpensesList = () => {
    let spentAmount = 0;
    const { expenses, deleteExpense } = useExpensesContext();
    const [filtredExpenses, setFiltredExpenses] = useState();
    
    return (
      <StyledExpensesList>
        <h1>Expenses</h1>

        <StyledExpensesListInput placeholder="search..." />

          {expenses ? (<ul>
              {expenses?.map(({ id, name, cost }) => {
                  spentAmount += cost;

                  return (
                    <StyledExpensesListItem 
                      key={id} name={name} cost={cost} id={id}                    >
                      <StyledExpensesListItemWrapper>
                          {name}

                          <StyledExpensesListItemCost>
                            {cost}
                          </StyledExpensesListItemCost>
                        </StyledExpensesListItemWrapper>

                      <StyledExpensesListCrossButton>
                        X
                      </StyledExpensesListCrossButton>
                    </StyledExpensesListItem>
                  );
              })}    
        </ul>) : "NO EXPENSES"}
      </StyledExpensesList>
    );
};
  