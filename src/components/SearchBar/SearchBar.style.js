import styled from "styled-components";

// Mixins
const formBorders = `
    border: 1px solid rgba(0, 0, 0, .25);
    border-radius: 15px;
`;

export const SearchBarStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
`;

export const SearchBarInputStyle = styled.input`
    ${formBorders}
    padding: 5px 15px;
`;

export const SearchBarProductsStyle = styled.ul`
    margin-top: 45px;
    padding: 0;

    li {
        margin: 7.5px;
    }
`;

export const SearchClearButtonStyle = styled.button`
    ${formBorders}
    background: #fff;
    margin-left: 15px;
    padding: 5px 25px;

    &:hover {
        cursor: pointer;
    }
`;