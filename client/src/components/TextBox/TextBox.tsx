import './TextBox.css'
import { BsSendFill } from 'react-icons/bs';
import io from 'socket.io-client';
import { useState, useEffect, useCallback } from "react";

const socket = io("http://localhost:3001");

interface Props {
    setDisplayMessage: (msg: string) => void
}

export const TextBox = ({setDisplayMessage}: Props) => {

    const [message, setMessage] = useState<string>('')
    const [messageEmpty, setMessageEmpty] = useState<boolean>(false)


    // useState [Obj, setObj] = useState<{message: string}>({} as {message: string})

    const sendMessage = () => {
        const tempMessage: string = message.trim()
        if (tempMessage.length !== 0) return socket.emit("send_message", { message });
        setMessageEmpty(true)
    }

    // const watchForSocketChage = useCallback

    useEffect(() => {
        socket.on('recieve_message', (data: { message: string, id: string }) => {
            console.log(data.message)
            // data.
            setDisplayMessage(data.message)
        })
    }, [socket])

    return (
        <div className='TextboxContent '>
            <input placeholder='Enter A Message' className={`TextboxContent_input ${messageEmpty ? 'TextboxContent_input_empty' : '' }`} onChange={(e) => {
                const { value } = e.target
                setMessage(value)


            }} onClick={()=> setMessageEmpty(false)} />
            <div className='TextboxContent_send' onClick={() => {
                sendMessage()
            }}>
                <BsSendFill className='TextboxContent_send--BsSendFill' /> send
            </div>
        </div>
    )
}
