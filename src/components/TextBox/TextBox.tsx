import React from 'react'
import './TextBox.css'

export const TextBox = () => {
    return (
        <div className='TextboxContent'>
            <input placeholder='Enter A Message' className='TextboxContent_input' />
            <div className='TextboxContent_send'>
                send
            </div>
        </div>
    )
}
