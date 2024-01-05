import './TextBox.css'
import { BsSendFill } from 'react-icons/bs';
import io from 'socket.io-client';
import { useState, useEffect, useCallback } from "react";

const socket = io("http://localhost:3001");

let UserId: string

socket.on('connect', () => {
    UserId = socket.id
    console.log("UserId: ", UserId)
})



interface Props {
    setDisplayMessage: (content: string, host_sender: boolean) => void
}

export const TextBox = ({ setDisplayMessage }: Props) => {

    const [message, setMessage] = useState<string>('')
    const [messageEmpty, setMessageEmpty] = useState<boolean>(false)
    const [firstRender, setFirstRender] = useState<boolean>(true)
    const [socketID, setSocketID] = useState<string>('')

    // useState [Obj, setObj] = useState<{message: string}>({} as {message: string})

    const sendMessage = () => {
        const tempMessage: string = message.trim()
        if (tempMessage.length !== 0) return socket.emit("send_message", { message });
        setMessageEmpty(true)
    }


    useEffect(() => {

            console.log("socket.id: ", socket.id)
            // return
            socket.on('recieve_message', (data: { message: string, id: string }) => {
                console.log('socketID: ', socketID )
                // data.
                const from_host_sender: boolean =  UserId === data.id
                setDisplayMessage(data.message, from_host_sender )
            })

    }, [socket])


    return (
        <div className='TextboxContent '>
            <input placeholder='Enter A Message' className={`TextboxContent_input ${messageEmpty ? 'TextboxContent_input_empty' : ''}`} onChange={(e) => {
                const { value } = e.target
                setMessage(value)


            }} onClick={() => setMessageEmpty(false)} />
            <div className='TextboxContent_send' onClick={() => {
                sendMessage()
            }}>
                <BsSendFill className='TextboxContent_send--BsSendFill' /> send
            </div>
        </div>
    )
}



























    // const watchForSocketChage = useCallback
    // useEffect(() => {
    //     if (!firstRender) return

    //     console.log(socket.id)
    //     // setSocketID(socket.id)
    //     setFirstRender(false)
    //     // console.log('socketID', socketID)

    // }, [firstRender])

    // useEffect(() => {

    //     // const set_first_render = async () => {await setFirstRender(false)}
    //     if (socketID === '' && socket) {
    //         // console.log(socket)
    //         setSocketID(socket.id)
    //         console.log(socket)
    //         // console.log()
    //         return
    //     }

    //     if (socketID !== '' && socket) {
    //         console.log("socket.id: ", socket.id)
    //         // return
    //         socket.on('recieve_message', (data: { message: string, id: string }) => {
    //             console.log('socketID: ', socketID )
    //             // data.
    //             setDisplayMessage(data.message)
    //         })
    //     } else {
    //         console.log('socketID DNE')
    //     }

    // }, [socket])
