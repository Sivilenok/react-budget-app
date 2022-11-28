import styled from "styled-components";
import { Colors } from "../../config/colors";

interface IProps {
  redcolor?: boolean;
}

export const StyledRemainingCard = styled.div`
  display: flex;
  padding: 38px 20px;
  margin-bottom: 20px;
  background-color: ${(props: IProps) => (props.redcolor ? Colors.Red : Colors.Viol)};
  color: ${(props: IProps) => (props.redcolor ? "#fff" : "#000000")};
  border-radius: 10px;

  font-size: 20px;
  font-weight: 500;
`;

