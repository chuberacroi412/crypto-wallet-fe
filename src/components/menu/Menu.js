import './Menu.css'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { useNavigate  } from 'react-router-dom';

export default function Menu({dashboard, send, transaction}) {

    const navigate = useNavigate()
    const changePage = (url) => {
        navigate(url)
    }

    const dashboardActive = dashboard ? ' menu-item-active' : ''
    const sendActive = send ? ' menu-item-active' : ''
    const transactionActive = transaction ? ' menu-item-active' : ''
    return (
        <div className='menu'>
            <div className={'menu-item' + dashboardActive} onClick={() => changePage('/dashboard')}>
                <DashboardCustomizeOutlinedIcon/>
                <p>Dashboard</p>
            </div>
            <div className={'menu-item' + sendActive} onClick={() => changePage('/sendCoin')}>
                <CurrencyExchangeOutlinedIcon/>
                <p>Send coin</p>
            </div>
            <div className={'menu-item' + transactionActive} onClick={() => changePage('/history')}>
                <HistoryOutlinedIcon/>
                <p>Transaction history</p>
            </div>
        </div>
    )
}