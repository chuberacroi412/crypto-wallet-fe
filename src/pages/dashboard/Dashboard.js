import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import { useEffect, useState} from "react";
import { useNavigate  } from 'react-router-dom';

import './Dashboard.css'

export default function Dashboard() {

    const [publicKey, setPublicKey] = useState('')
    const [balance, setBalance] = useState(0)
    const checkBalanceUrl = 'http://localhost:3001/user/balance'

    const navigate = useNavigate()

    useEffect(() => {
        async function LoadBalance(userPublicKey) {

            const completeUrl = checkBalanceUrl + '/' + userPublicKey

            const res = await fetch(completeUrl, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if(res.status == 200) {
                return await res.json()
            }
        }
        async function CheckLoginAndLoadInfor() {
            if(localStorage.getItem('userPublicKey') == null) {
                navigate('/')
            }
            else {
                setPublicKey(localStorage.getItem('userPublicKey'))
                setBalance(await LoadBalance(localStorage.getItem('userPublicKey')))
            }
        }

        CheckLoginAndLoadInfor()   
        
    },[])

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
                            <p>{publicKey}</p>
                        </div>                
                    </div>
                    <div  className='dashboard-item dashboard-item-2'>
                        <AccountBalanceWalletOutlinedIcon fontSize='large'/>
                        <div>
                            <p className='dashboard-item-title'>Balance</p>
                            <p>{balance} ETH</p>
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