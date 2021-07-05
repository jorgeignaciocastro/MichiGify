import styled from 'styled-components';

const Button = styled.button`
    border: 0;
    border-radius: 5px;
    text-align: center;
    padding: 10px 15px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    background: ${({type}) => type === 'secondary' ? '#4974a5' : '#3ccb58'};
    cursor: pointer;
    & + & {
        margin-left: 10px;
    }
    &:hover {
        background: ${({type}) => type === 'secondary' ? '#91abc9' : '#76da8a'};
    }
    &:active {
        background: ${({type}) => type === 'secondary' ? '#152231' : '#529860'};
    }
`;


export default Button;
