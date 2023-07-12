import React, { useState } from 'react'
import './Nav.css'
import { BsWechat } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi'
import { BsBellFill, BsPeopleFill } from 'react-icons/bs';
// import {FaPeopleGroup} from 'react-icons/fa'

export const Nav = () => {

    const [newNotification, setnewNotification] = useState(false)


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
                <div className='NavContent_status--BsWechat' style={{ display: 'flex', flexDirection: 'column' }}>
                    <BsWechat size={'1.5rem'} color={'#A2FF86'} />
                    <div className='NavContent_status--BsWechat--Dropdown'>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                </div>
                <div className='NavContent_status--BsBellFill'>
                    <BsBellFill size={'1.3rem'} color={'#B6EAFA'} onMouseOver={(): void => setnewNotification(!newNotification)} />
                    <div className={`${newNotification ? 'NavContent_status--BsBellFill--notificationIndicator' : ''}`}></div>
                    <div className='NavContent_status--BsBellFill--Dropdown'>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                </div>
                <div className='NavContent_status--BiSolidUser'>
                    <BiSolidUser size={'1.5rem'} color={'#C4DFDF'} />
                    <div className='NavContent_status--BiSolidUser--Dropdown'>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
