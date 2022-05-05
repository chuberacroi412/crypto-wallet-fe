import './Nav.css'
import Logo from '../logo/Logo'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { useNavigate } from 'react-router-dom'

export default function() {

    const navigate = useNavigate()

    function logout() {
        if(localStorage.getItem('userPublicKey') != null) {
            localStorage.removeItem('userPublicKey')
            navigate('/')
        }
    }

    return(
       <div className='nav'>
            <Logo isPink={true}/>
            <div className='nav-right-content'>
                <p className='nav-text'>Buy ETH</p>
                <p className='nav-text' onClick={logout}>Logout</p>
                <NotificationsActiveOutlinedIcon className='nav-icon' />
            </div>
       </div>
    )
}