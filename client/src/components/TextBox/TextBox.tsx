import './TextBox.css'
import { BsSendFill } from 'react-icons/bs';
import io from 'socket.io-client';
import { useState, useEffect } from "react";

const socket = io("http://localhost:3001");

export const TextBox = () => {

    // useState [Obj, setObj] = useState<{message: string}>({} as {message: string})

    const sendMessage = () => {
        socket.emit("send_message", { message: "HELLO WORLD" });
    }

    useEffect(() => {
        socket.on('recieve_message', (data: {message: string}) => {
            alert(data.message)
        })
    }, [socket])

    return (
        <div className='TextboxContent'>
            <input placeholder='Enter A Message' className='TextboxContent_input' />
            <div className='TextboxContent_send' onClick={() => sendMessage()}>
                <BsSendFill className='TextboxContent_send--BsSendFill' /> send
            </div>
        </div>
    )
}
