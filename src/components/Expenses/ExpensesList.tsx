import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";

export const ExpensesList = () => {
    const { expenses, deleteExpense } = useExpensesContext();

    return (
      <div>
          <ul>
              {expenses.map(({ id, title, cost }) => {
                  return (
                    <li key={id} onClick={() => deleteExpense(id)}>
                        {title} = {cost}
                    </li>
                  );
              })}    
        </ul>
      </div>
    );
};
  