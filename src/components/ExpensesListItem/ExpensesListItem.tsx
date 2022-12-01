import { useCurrencyContext} from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesListContext/ExpensesListContext";
import { StyledExpensesListCrossButton, StyledExpensesListItem } from "./styles";
import { StyledTitleText } from "../Title/styles";

interface IProps {
    name: string;
    cost: number;
    id: string;
}

export const ExpensesListItem = ({ name, cost, id}: IProps) => {
    const { currentCurrency } = useCurrencyContext();
    const { deleteExpense } = useExpensesContext();
    const handleDelete = () => {
        deleteExpense(id);
    };
    return (
        <StyledExpensesListItem>
            <StyledTitleText>{name}</StyledTitleText>
            <StyledExpensesListCrossButton onClick={handleDelete}/>
        </StyledExpensesListItem>
    )
};
