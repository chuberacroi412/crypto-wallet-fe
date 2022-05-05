import './AccessWalletDialog.css'
import { useNavigate  } from 'react-router-dom';
import { useState} from "react";

export default function AccessWalletDialog({closeDialogButtonAction}) {

    const baseUrl = 'http://localhost:3001'
    const checkWalletExistedUrl = baseUrl + '/user/wallet'

    const navigate = useNavigate()
    const dashboardPage = '/dashboard'

    const [userKey, setUserKey] = useState('')


    const accessButton = () => {
        fetch(checkWalletExistedUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userPublicKey': userKey
            })
        }).then(res => {
            if(res.status == 200) {
                res.json().then(result => {
                    
                    if(result) {
                        localStorage.setItem('userPublicKey', userKey)
                        navigate(dashboardPage)
                    }
                })
            }
            else {
                alert('Something went wrong, try later')
            }
        })
    }

    return (
        <div className='access-wallet-dialog'>
            <div>
                <p className='access-wallet-dialog-title'>Access your wallet</p>
                <input onChange={(e) => setUserKey(e.target.value)} placeholder='Enter your public key' value={userKey}/>
            </div>
            <div>
                <button className='access-wallet-dialog-button access-wallet-dialog-button-close' onClick={() => closeDialogButtonAction()}>Close</button>
                <button className='access-wallet-dialog-button' onClick={() => accessButton()}>Access</button>
            </div>
        </div>
    )
}