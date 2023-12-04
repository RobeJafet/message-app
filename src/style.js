import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    #root {
        width: 100%;
        height: 100vh;
    }

    body {
        color: #0F1828;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        margin: 0;
        padding: 0;
    }

    h1, p {
        margin: 0;
        padding: 0;
    }

    h1{
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
    }

    p{
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
    }

    .tag{
        color: var(--Body-Light, #8A9099);
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .bg-white{
        background: #FFFFFF;
    }

    .bg-off-white{
        background: #F7F7FC;
    }
    
    .flex-col{
        display: flex;
        flex-direction: column;
    }

    .input{
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
    }

`

export const ContainerChatPage = styled.div`
    width: 100%;
    height: 100%;
    background: #F7F7FC;
`