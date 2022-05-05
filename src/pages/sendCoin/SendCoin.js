import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import { useEffect, useState} from "react";
import { useNavigate  } from 'react-router-dom';
import './SendCoin.css'

export default function SendCoin() {

    const checkWalletExistedUrl = 'http://localhost:3001/user/wallet'
    const checkBalanceUrl = 'http://localhost:3001/user/balance'
    const sendCoinUrl = 'http://localhost:3001/user/transaction'

    const [publicKey, setPublicKey] = useState('')
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(0)
    const [toAddr, setToAddr] = useState('')
    

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

        async function CheckLogin() {
            if(localStorage.getItem('userPublicKey') == null) {
                navigate('/')
            }
            else {
                setPublicKey(localStorage.getItem('userPublicKey'))
                setBalance(await LoadBalance(localStorage.getItem('userPublicKey')))
            }
        }

        CheckLogin()   
        
    },[])

    async function IsAddressExisted(addressToCheck) {
        const res = await fetch(checkWalletExistedUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userPublicKey': addressToCheck
            })
        })
        
        if(res.status == 200) {
            const result = await res.json()

            return result
        }
        
        return false
    }

    async function SendButtonAction() {
        if(amount > balance || amount <= 0) {
            alert('Amount value is invalid')
            return 
        }

        if(!(await IsAddressExisted(toAddr))) {
            alert('Address is invalid')
            return
        }

        fetch(sendCoinUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'from': publicKey,
                'to': toAddr,
                'amount': amount
            })
        })

        navigate('/dashboard')

    }

    return (
        <>
            <Nav/>
            <div className='send'>
                <Menu className='send-left-content' send={true} />
                <div className='send-content'>
                    <div className='send-dialog'>
                        <div className='send-dialog-item'>
                            <div>
                                <label htmlFor='type'>Type</label>
                                <input id='type' value='ETH - Ethereum' readOnly />
                            </div>
                            <div>
                                <label htmlFor='amount'>Amount</label>
                                <input id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} type='number' min='0' placeholder='1223'/>
                            </div>
                        </div>
                        <div className='send-dialog-address'>
                            <label htmlFor='address'>To Address</label>
                            <input id='address' value={toAddr} onChange={(e) => setToAddr(e.target.value)} placeholder='0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D' />
                        </div>
                        <div>
                            <button className='send-button send-button-clear'>Clear</button>
                            <button className='send-button send-button-send' onClick={SendButtonAction}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}