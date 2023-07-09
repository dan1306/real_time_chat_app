import React from 'react'
import './TextBox.css'
import {BsSendFill} from 'react-icons/bs';

export const TextBox = () => {
    return (
        <div className='TextboxContent'>
            <input placeholder='Enter A Message' className='TextboxContent_input' />
            <div className='TextboxContent_send'>
                <BsSendFill className='TextboxContent_send--BsSendFill' /> send
            </div>
        </div>
    )
}
