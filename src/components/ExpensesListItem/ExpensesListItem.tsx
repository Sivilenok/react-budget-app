import { useCurrencyContext} from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { useState } from "react";
import { StyledExpensesListCrossButton, StyledExpensesListItem } from "./styles";
import { StyledTitleText } from "../Title/styles";
import { StyledBudget } from "../Budget/styles";
import { StyledBudgetButton } from "../BudgetCard/styles";

interface IProps {
    name: string;
    cost: number;
    id: string;
}

const { expenses, deleteExpense } = useExpensesContext();
const [filtredExpenses, setFiltredExpenses] = useState();

export const ExpensesListItem = ({ name, cost, id}: IProps) => {
    const { currentCurrency } = useCurrencyContext();
    const { deleteExpense } = useExpensesContext();
    const handleDelete = () => {
        deleteExpense(id);
    };
    return (
        <StyledExpensesListItem>
            <StyledTitleText>{name}</StyledTitleText>
            <StyledBudget>
                {currentCurrency.value}
                {cost}
            </StyledBudget>
            <StyledExpensesListCrossButton onClick={handleDelete}/>
        </StyledExpensesListItem>
    )
};
