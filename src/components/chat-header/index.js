import React from 'react'
import {Header, HeaderWrapper} from './style'

const ChatHeader = ({name}) => {
    return (
        <HeaderWrapper>
            <Header>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.28799 12L14.298 18.01L15.712 16.596L11.112 11.996L15.712 7.39599L14.298 5.98999L8.28799 12Z" fill="#0F1828"/>
                    </svg>
                </a>
                <h1>{name}</h1>
            </Header>
        </HeaderWrapper>
    )
}

export default ChatHeader