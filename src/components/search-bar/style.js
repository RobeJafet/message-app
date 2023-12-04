import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
    margin: 30px;
    position: relative;
    display: flex;
    svg{
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        position: absolute;
        height: 20px;
        width: 20px;
    }
`;


export const SearchBox = styled.input`
    background: #F7F7FC;
    color: #4A4A4A;
    height: 40px;
    width: 100%;
    border: none;
    padding-left: 40px;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    &:focus-visible {
        outline: 1px solid #0F1828;
    }
`;