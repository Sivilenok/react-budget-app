import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useBudgetContext } from "../../context/BudgeContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { IFormData } from "../../types/types";
import { StyledForm, StyledFormInput, StyledFormButton } from "./styles";
import { v4 } from "uuid";

export const Form = () => {
  const { setNewExpense } = useExpensesContext();
  const { budget } = useBudgetContext();
  const { 
    register,
    handleSubmit,
    reset, formState: { errors }, 
  } = useForm<IFormData>({ mode: "onBlur"});

  const onSubmit: SubmitHandler<IFormData> = ({ name, cost }) => {
    if (budget > 0) {
      setNewExpense ({id: v4(), name, cost});
      reset()
    }
  };
  
  return (
    <StyledForm>
      <h1>Add Expense</h1>
      
      <StyledFormInput placeholder="enter name..." />
      <StyledFormInput placeholder="enter cost..." />

      <StyledFormButton type="submit">DONE</StyledFormButton>
    </StyledForm>
  );
};
