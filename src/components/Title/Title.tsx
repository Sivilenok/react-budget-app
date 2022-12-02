import { StyledTitleText } from "./styles";

interface IProps {
  label: string;
}

export const Title = ({ label }: IProps) => {
  return <StyledTitleText>{label}</StyledTitleText>
};
