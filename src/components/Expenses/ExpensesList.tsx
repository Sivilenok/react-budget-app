import { useEffect } from "react";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
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

    return (
      <StyledExpensesList>
        <h1>Expenses</h1>

        <StyledExpensesListInput placeholder="search..." />

          {expenses ? (<ul>
              {expenses?.map(({ id, title, cost }) => {
                  spentAmount += cost;

                  return (
                    <StyledExpensesListItem 
                      key={id} 
                      onClick={() => deleteExpense(id)}
                    >
                      <StyledExpensesListItemWrapper>
                          {title}

                          <StyledExpensesListItemCost>
                            ${cost}
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
  