import React from 'react'
import './ChatDisplay.css'
import { BiSolidUser } from 'react-icons/bi';
import { GiWalkieTalkie } from 'react-icons/gi'
import { Search } from '../Search/Search';

interface Props {
    message: string
}

export const ChatDisplay = ({message}: Props) => {
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
                            // overflow: 'auto',
                            width: '75%',
                            border: '3px solid #ccc',
                            backgroundColor: '#4E4FEB',
                            borderRadius: '.5rem',
                            // padding: '.4rem'
                        }}>
                            {/* <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                // paddingTop: '.2rem',
                                backgroundColor: '#566175',
                                margin: 0,
                                borderBottom: '3px solid #ADD8E6'
                            }}>
                                <input style={{
                                    width: '90%',
                                    border: 'none',
                                    backgroundColor: '#566175',
                                    color: 'white'
                                }} />
                                <span style={{
                                    padding: '.2rem',
                                    borderLeft: '2px solid #ADD8E6',
                                    cursor: 'pointer'
                                }}>
                                    <BsSearch size={'1rem'} color={'white'} />
                                </span>
                            </div> */}
                            <Search />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <div style={{
                                    width: '50%',
                                    overflow: 'none'
                                }}>
                                    Chat_Group
                                </div>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    justifyContent: ' flex-end',
                                }}>online</div>

                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <div style={{
                                    width: '50%'
                                }}>
                                    Chat Groups DropDown
                                </div>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    justifyContent: ' flex-end',
                                }}>online</div>

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
                            // overflow: 'auto',
                            width: '75%',
                            border: '3px solid #ccc',
                            backgroundColor: '#4E4FEB',
                            borderRadius: '.5rem',
                            // padding: '.4rem'
                        }}>
                            {/* <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                // paddingTop: '.2rem',
                                backgroundColor: '#566175',
                                margin: 0,
                                borderBottom: '3px solid #ADD8E6'
                            }}>
                                <input style={{
                                    width: '90%',
                                    border: 'none',
                                    backgroundColor: '#566175',
                                    color: 'white'
                                }} />
                                <span style={{
                                    padding: '.2rem',
                                    borderLeft: '2px solid #ADD8E6',
                                    cursor: 'pointer'
                                }}>
                                    <BsSearch size={'1rem'} color={'white'} />
                                </span>
                            </div> */}
                            <Search />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <div style={{
                                    width: '50%',
                                    overflow: 'none'
                                }}>
                                    Chat_Group
                                </div>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    justifyContent: ' flex-end',
                                }}>online</div>

                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <div style={{
                                    width: '50%'
                                }}>
                                    Chat Groups DropDown
                                </div>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    justifyContent: ' flex-end',
                                }}>online</div>

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
                </ul>
            </div>
            <div className='ChatDispaly-content'>
                <div className='ccc'>
                    {/* {chat_dispaly_content} */}
                    {
                        message || 'chat_dispaly_content'
                    }
                </div>
            </div>
        </>
    )
}
