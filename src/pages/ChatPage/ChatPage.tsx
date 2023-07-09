import React from 'react'
import './ChatPage.css'
import { Nav } from '../../components/Nav/Nav'
import { TextBox } from '../../components/TextBox/TextBox'
import { ChatDisplay } from '../../components/ChatDisplay/ChatDisplay'

export const ChatPage = () => {
    return (
        <div className='chat'>
            <div className='chat_nav'>
                <Nav />
            </div>
            <div className='chat_dispaly'>
                <ChatDisplay />
            </div>
            <div className='chat_txt'>
                <TextBox />
            </div>
        </div>

    )
}
