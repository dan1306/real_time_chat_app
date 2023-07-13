import './TextBox.css'
import { BsSendFill } from 'react-icons/bs';
import io from 'socket.io-client';
import { useState, useEffect } from "react";

const socket = io("http://localhost:3001");

interface Props {
    setDisplayMessage: (msg: string) => void
}

export const TextBox = ({setDisplayMessage}: Props) => {

    const [message, setMessage] = useState('')

    // useState [Obj, setObj] = useState<{message: string}>({} as {message: string})

    const sendMessage = () => {
        socket.emit("send_message", { message });
    }

    useEffect(() => {
        socket.on('recieve_message', (data: { message: string }) => {
            console.log(data.message)
            setDisplayMessage(data.message)
        })
    }, [socket])

    return (
        <div className='TextboxContent'>
            <input placeholder='Enter A Message' className='TextboxContent_input' onChange={(e) => {
                const { value } = e.target
                setMessage(value)


            }} />
            <div className='TextboxContent_send' onClick={() => {
                // alert(message)
                sendMessage()
            }}>
                <BsSendFill className='TextboxContent_send--BsSendFill' /> send
            </div>
        </div>
    )
}
