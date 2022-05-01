import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';

import './Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <Nav />
            <div className='dashboard'>
                <Menu className='dashboard-left-content' dashboard={true}/>
                <div className='dashboard-content'>
                    <div className='dashboard-item'>
                        <AccountCircleOutlinedIcon fontSize='large'/>
                        <div>
                            <p className='dashboard-item-title'>Address</p>
                            <p>0x1456789asfah893h8918f</p>
                        </div>                
                    </div>
                    <div  className='dashboard-item dashboard-item-2'>
                        <AccountBalanceWalletOutlinedIcon fontSize='large'/>
                        <div>
                            <p className='dashboard-item-title'>Balance</p>
                            <p>0 ETH</p>
                        </div>
                    </div>
                    <div  className='dashboard-item dashboard-item-3'>
                        <CellTowerOutlinedIcon fontSize='large'/>
                        <div>
                            <p className='dashboard-item-title'>Network</p>
                            <p>Lorem is a dummy text</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}