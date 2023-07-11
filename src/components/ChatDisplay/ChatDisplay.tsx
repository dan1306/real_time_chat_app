import React from 'react'
import './ChatDisplay.css'
import { BiSolidUser } from 'react-icons/bi';
import { GiWalkieTalkie } from 'react-icons/gi'

export const ChatDisplay = () => {
    return (
        <>
            <div className='ChatDispaly-dropdowns'>
                <ul className='ChatDispaly-dropdowns__list'>
                    <li>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: '#F2EFE9'
                        }}>
                            <GiWalkieTalkie size={'1.6rem'} />
                            <h3 style={{
                                marginLeft: '.4rem'
                            }}>
                                Chat Groups
                            </h3>
                        </div>
                        <div style={{
                            height: '9rem', /* Set the desired height */
                            overflow: 'auto',
                            width: '75%',
                            border: '3px solid #ccc',
                            backgroundColor: '#4E4FEB',
                            borderRadius: '.5rem',
                            padding: '.4rem'
                        }}>
                            <div>
                                Chat Groups DropDown
                            </div>
                            <div>
                                Chat Groups DropDown
                            </div>
                            {/* <div>
                                Chat Groups DropDown
                            </div>
                            <div>
                                Chat Groups DropDown
                            </div>
                            <div>
                                Chat Groups DropDown
                            </div>
                            <div>
                                Chat Groups DropDown
                            </div>
                            <div>
                                Chat Groups DropDown
                            </div> */}
                        </div>
                    </li>
                    <li>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            color: '#F2EFE9'
                        }}>
                            <BiSolidUser size={'1.5rem'} />
                            <h3 style={{
                                marginLeft: '.4rem'
                            }}>
                                Users
                            </h3>
                        </div>
                        <div style={{
                            height: '9rem', /* Set the desired height */
                            overflow: 'auto',
                            width: '75%',
                            border: '3px solid #ccc',
                            backgroundColor: '#4E4FEB',
                            borderRadius: '.5rem',
                            padding: '.4rem'
                        }}>
                            Users DropDown
                        </div>
                    </li>
                </ul>
            </div>
            <div className='ChatDispaly-content'>
                <div className='ccc'>
                    chat_dispaly_content
                </div>
            </div>
        </>
    )
}
