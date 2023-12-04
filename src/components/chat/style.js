import styled, {css} from 'styled-components'

export const ChatContainer = styled.div`
    background: #F7F7FC;
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    height: max-content;
`
export const MyMessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    align-items: center;
    svg{
        cursor: pointer;
    }
`

export const MyMessage = styled.div`
    padding: 12px 18px;
    background: transparent;
    color: #595F69;
    border: 1px solid #E8E9EB;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 5px;
`
export const TheirMessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-self: flex-end;
    align-items: center;
    cursor: pointer;
`

export const TheirMessage = styled.div`
    background: #D84D4D;
    color: #FFFFFF;
    padding: 12px 18px;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 5px;
`