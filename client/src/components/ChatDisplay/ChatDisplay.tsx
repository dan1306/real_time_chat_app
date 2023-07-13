import React from 'react'
import './ChatDisplay.css'
import { BiSolidUser } from 'react-icons/bi';
import { GiWalkieTalkie } from 'react-icons/gi'
import { Search } from '../Search/Search';

interface Props {
    message: string
}

export const ChatDisplay = ({ message }: Props) => {
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

                        </div>
                    </li>
                </ul>
            </div>
            <div className='ChatDispaly-content'>

                <div className='ccc'>
                    <div style={{
                        // margin: 0
                        // backgroundColor: 'black'
                    }}>
                        <span style={{
                            display: 'inline-block',
                            width: '37.5%',

                        }}>
                            {/* <p style={{
                                backgroundColor: 'yellow'
                            }}>ad</p> */}
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '25%',
                            textAlign: 'center',
                        }}>
                            <p style={{
                                backgroundColor: 'red',
                                fontSize: '.7rem'
                            }}>
                                Tue, May 23, 7:28 PM
                            </p>
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '37.5%',
                            textAlign: 'right',

                            // alignContent: 
                        }}>
                            {/* <p style={{
                                backgroundColor: 'yellow'

                            }}>
                                12 asfaf

                            </p> */}
                        </span>
                    </div>
                    <div style={{
                        // margin: 0
                        // backgroundColor: 'black'
                    }}>
                        <span style={{
                            display: 'inline-block',
                            width: '37.5%',


                        }}>
                            {/* <p style={{
                                backgroundColor: 'yellow'
                            }}>ad</p> */}
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '25%',
                            textAlign: 'center',
                            backgroundColor: 'red'
                        }}>
                            {/* <p style={{
                                backgroundColor: 'yellow'

                            }}>
                            </p> */}
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '37.5%',
                            textAlign: 'right',
                            // backgroundColor: 'yellow'
                            // alignContent: 
                        }}>
                            <p style={{
                                // padding: '0 rem',
                                backgroundColor: 'yellow',
                                width: '100%',
                                overflowWrap: 'break-word'
                            }}>
                                12 asfaf safsaffaf asfsfs fdgf s

                            </p>
                        </span>
                    </div>
                    <div style={{
                        // margin: 0
                        // backgroundColor: 'black'
                    }}>
                        <span style={{
                            display: 'inline-block',
                            width: '37.5%',


                        }}>
                            {/* <p style={{
                                backgroundColor: 'yellow'
                            }}>ad</p> */}
                            <p style={{
                                padding: '0 .3rem',
                                backgroundColor: 'green',
                                width: '100%',
                                overflowWrap: 'break-word'
                            }}>
                                12 asfaf safsaffaf asfsfs fdgf s

                            </p>
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '25%',
                            textAlign: 'center',
                            backgroundColor: 'red'
                        }}>
                            {/* <p style={{
                                backgroundColor: 'yellow'

                            }}>
                            </p> */}
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '37.5%',
                            textAlign: 'right',
                            // backgroundColor: 'yellow'
                            // alignContent: 
                        }}>
                            {/* <p style={{
                                backgroundColor: 'yellow',
                                width: '100%',
                                overflowWrap: 'break-word'
                            }}>
                                12 asfaf safsaffaf asfsfs fdgf s

                            </p> */}
                        </span>
                    </div>
                    {
                        message || 'chat_dispaly_content'
                    }
                </div>
            </div>
        </>
    )
}
