import styled, {css} from 'styled-components'

export const ContainerFooter = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`

export const Footer = styled.form`
    background: #FFFFFF;
    padding: 35px;
    width: auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
`

export const InputMessage = styled.input`
    background: #F7F7FC;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    grid-column: 2 / span 10;
    color: #4A4A4A;
    &:focus-visible {
        outline: 1px solid #0F1828;
    }
`
export const SendButton = styled.button`
    border: none;
    padding: 0;
    background: none;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`