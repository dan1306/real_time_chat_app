import React from 'react'
import './ChatPage.css'
import { Nav } from '../../components/Nav/Nav'
import { TextBox } from '../../components/TextBox/TextBox'

export const ChatPage = () => {
    return (
        <div className='chat'>
            <div className='chat_nav'>
                <Nav />
            </div>
            <div className='chat_dispaly'>
            chat_dispaly
            </div>
            <div className='chat_txt'>
                <TextBox />
            </div>
        </div>

    )
}
