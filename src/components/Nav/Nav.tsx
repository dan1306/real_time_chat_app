import React from 'react'
import './Nav.css'
import { BsWechat } from 'react-icons/bs';

export const Nav = () => {
    return (
        <div className='NavContent'>
            <div className='NavContent_logo'>
                <div className='NavContent_logo--icon'>
                    <BsWechat color='white' size={'3rem'} />
                </div>
                <h1 className='NavContent_logo--title'>
                    ChatMeUP
                </h1>
            </div>
            <div className='NavContent_status'>
                <div>NavContent_status</div>
                <div>NavContent_status</div>

            </div>
        </div>
    )
}
