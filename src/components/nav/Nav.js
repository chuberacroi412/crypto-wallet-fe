import './Nav.css'
import Logo from '../logo/Logo'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

export default function() {
    return(
       <div className='nav'>
            <Logo isPink={true}/>
            <div className='nav-right-content'>
                <p className='nav-text'>Buy ETH</p>
                <p className='nav-text'>Logout</p>
                <NotificationsActiveOutlinedIcon className='nav-icon' />
            </div>
       </div>
    )
}