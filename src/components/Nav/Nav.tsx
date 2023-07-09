import React from 'react'
import './Nav.css'
import { BsWechat } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi'
import { BsBellFill, BsPeopleFill } from 'react-icons/bs';
// import {FaPeopleGroup} from 'react-icons/fa'

export const Nav = () => {
    return (
        <div className='NavContent'>
            <div className='NavContent_logo'>
                <div className='NavContent_logo--icon'>
                    <BsPeopleFill color='white' size={'3rem'} />
                </div>
                <h1 className='NavContent_logo--title'>
                    ChatMeUP
                </h1>
            </div>
            <div className='NavContent_status'>
                <div className='NavContent_status--BsWechat'>
                    <BsWechat size={'1.5rem'} color={'#A2FF86'} />
                </div>
                <div className='NavContent_status--BsBellFill'>
                    <BsBellFill size={'1.3rem'} color={'#B6EAFA'} />
                </div>
                <div className='NavContent_status--BiSolidUser'>
                    <BiSolidUser size={'1.5rem'} color={'#C4DFDF'} />
                </div>
            </div>
        </div>
    )
}
