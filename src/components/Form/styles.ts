import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledFormInput = styled.input`
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

export const StyledFormButton = styled.button`
    padding: 16px 0;
    border-radius: 10px;
    background: #23C9FF;
    color: #FFFFFF;
    box-shadow: 4px 4px 10px #00000025, inset 1px 2px 5px #FFFFFF;

    :active {
        box-shadow:inset 1px 2px 5px #000000;
    }
`;