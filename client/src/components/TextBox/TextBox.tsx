import './TextBox.css'
import { BsSendFill } from 'react-icons/bs';
import io from 'socket.io-client';
import { useState, useEffect } from "react";

const socket = io("http://localhost:3001");

export const TextBox = () => {

    // useState [Obj, setObj] = useState<{message: string}>({} as {message: string})

    const sendMessage = () => {
        socket.emit("message", "HELLO WORLD");
    }

    useEffect(() => {

        socket.on('new-remote-operartions', ({editorId, op}: {editorId: string, op: string}) => {
            console.log([editorId, op ])
        })

    }, [])

    return (
        <div className='TextboxContent'>
            <input placeholder='Enter A Message' className='TextboxContent_input' />
            <div className='TextboxContent_send' onClick={() => {
                socket.emit('new-operartions', {editorId: 'ion', op: 'asdsaf'})
            }}>
                <BsSendFill className='TextboxContent_send--BsSendFill' /> send
            </div>
        </div>
    )
}
