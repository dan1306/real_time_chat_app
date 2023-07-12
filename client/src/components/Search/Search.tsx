import './Search.css'
import { BsSearch } from 'react-icons/bs'

export const Search = () => {
  return (
    <div style={{
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
    </div>
  )
}
