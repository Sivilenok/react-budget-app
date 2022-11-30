import styled from "styled-components";

export const StyledExpensesList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledExpensesListInput = styled.input`
    padding: 16px 20px;
    margin-bottom: 20px;
    font-size: 14px;
    border-radius: 10px;
    transition: .3s;
    box-shadow: 4px 4px 10px #00000025;

    :focus {
        box-shadow: 4px 4px 5px #000000;
    }
`;


export const StyledExpensesListItemWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    font-size: 16px;
`;

export const StyledExpensesListItem = styled.span`
    display:flex;
    align-items: center;
    padding: 3px 12px;
    background: #23C9FF;
    border-radius: 10px;

    font-size: 12px;
    color: #FFFFFF;
`;
