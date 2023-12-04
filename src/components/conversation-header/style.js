import styled from "styled-components";

export const Header = styled.div`
    width: auto;
    background: #FFFFFF;
    padding: 35px;
    border-bottom: 1px solid #E8E9EB;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebebf2;
    svg{
        display: block;
    }
    a{
        position: relative;
        svg{
            display: block;
        }
        &:hover{
            cursor: pointer;
        }
    }
    `;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index:2;
`;

export const ModalContainer = styled.div`
    width: 50%;
    background: #FFFFFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:3;
    padding: 15px;
    h1{
        color: #0F1828;
    }
    form{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        margin-top: 100px;
        justify-content: space-between;
    }
    input{
        background: #F7F7FC;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        height: 30px;
        width: 90%;
        color: #4A4A4A;
        &:focus-visible {
            outline: 1px solid #0F1828;
        }
    }
    button{
        background: transparent;
        height: auto;
        border: none;
        svg{
            display: block;
        }
        &:hover{
            cursor: pointer;
        }
    }
`;

export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: auto;
`;

