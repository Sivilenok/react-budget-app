import React from "react";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { StyledForm, StyledFormInput, StyledFormButton } from "./styles";

export const Form = () => {
  const { setNewExpense } = useExpensesContext();

  const handleSubmit = () => {
    setNewExpense({ id: 1234567, title: "shapka", cost: 80 });
  };
  return (
    <StyledForm>
      <h1>Add Expense</h1>
      
      <StyledFormInput placeholder="enter name..." />
      <StyledFormInput placeholder="enter price..." />

      <StyledFormButton onClick={handleSubmit}>DONE</StyledFormButton>
    </StyledForm>
  );
};
