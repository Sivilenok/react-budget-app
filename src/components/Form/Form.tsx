import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { IFormData, useBudgetContext, useExpensesContext } from "../../context";
import { Title } from "../Title/Title";
import { StyledForm, StyledFormButton, StyledFormInput } from "./styles";

export const Form = () => {
  const { setNewExpense } = useExpensesContext();
  const { budget } = useBudgetContext();
  const { 
    register,
    handleSubmit,
    reset,    
    formState: { errors },
  } = useForm<IFormData>({ mode: "onBlur"});

  const onSubmit: SubmitHandler<IFormData> = ({ name, cost }) => {
    if (budget > 0) {
      setNewExpense ({id: v4(), name, cost});
      reset()
    }
  };
  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <Title label="add expense" />
    <StyledFormInput
      {...register("name", {
        required: "Name is required",
        minLength: { value: 4, message: "Minimum characters 4" },
      })}
      type="text"
      placeholder="enter name ..."
    />
    <StyledFormInput
      {...register("cost", {
        required: "Price is required",
        minLength: { value: 2, message: "Minimum characters 2" },
      })}
      type="number"
      placeholder="enter cost ..."
    />
    <StyledFormButton />
  </StyledForm>
);
};


