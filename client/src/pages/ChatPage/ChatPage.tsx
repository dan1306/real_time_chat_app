import React, { useEffect } from 'react'
import './ChatPage.css'
import { Nav } from '../../components/Nav/Nav'
import { TextBox } from '../../components/TextBox/TextBox'
import { ChatDisplay } from '../../components/ChatDisplay/ChatDisplay'
import { useState } from 'react'

export const ChatPage = () => {

    const [message, setMessage] = useState<string[]>([])

    const setDisplayMessage = (msg: string) => {
        // setMessage(curr => [...curr, msg])
        console.log(msg)
    }

    // useEffect(() => {
    //     console.log(message)
    // }, [message])



    return (
        <div className='chat'>
            <div className='chat_nav'>
                <Nav />
            </div>
            <div className='chat_dispaly'>
                <ChatDisplay message={message} />
            </div>
            <div className='chat_txt'>
                <TextBox setDisplayMessage={setDisplayMessage} />
            </div>
        </div>

    )
}
