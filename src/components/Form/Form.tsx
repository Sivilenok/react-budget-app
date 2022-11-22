import React from "react";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";

export const Form = () => {
  const { setNewExpense } = useExpensesContext();

  const handleSubmit = () => {
    setNewExpense({ id: "1234567", title: "shapka", cost: 80 });
  };
  return (
    <div>
      <h1>Form</h1>
      <button onClick={handleSubmit}>Add new Expense</button>
    </div>
  );
};
