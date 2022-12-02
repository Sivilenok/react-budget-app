import styled from "styled-components";

export const StyledBudgetCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
  margin-bottom: 20px;
  background-color: #7cc6fe;
  border-radius: 10px;
`;

export const StyledBudgetInput = styled.input`
  width: 60%;
  font-size: 20px;
  font-weight: 500;

  ::placeholder {
    color: #FFFFFF60;
  }
`;

export const StyledBudgetButton = styled.button`
  padding: 10px 25px;
  border-radius: 10px;
  background: #FFFFFF;

  font-size: 14px;
  font-weight: 500;
`;
