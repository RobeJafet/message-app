import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    text-decoration: none;
    overflow: hidden;
    gap: 25px;
    margin: 0 30px;
    padding: 10px;
    border-radius: 16px;
    &:hover {
        background: #F5F5F5;
        cursor: pointer;
    }
`;

export const ProfilePicture = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 16px;
    background: #D84D4D;
`;

export const ConversationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;