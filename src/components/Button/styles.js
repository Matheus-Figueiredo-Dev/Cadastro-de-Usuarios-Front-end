import styled from 'styled-components';

export const Button = styled.button`
    background: ${(props) => (props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent')};
    color: #fff;
    border: 3px solid #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 32px;
    border-radius: 30px;
    width: fit-content;
    cursor: pointer;

    &:hover {
        ${(props) => (props.theme === 'primary' ? 'opacity: 0.7' : 'background: #fff; color: #00008B; border: 3px solid #00008B')};
    }

    &:active {
        opacity: 0.5;
    }
`;
