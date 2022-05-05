import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import { useEffect, useState} from "react";
import { useNavigate  } from 'react-router-dom';
import './SendCoin.css'

export default function SendCoin() {

    const checkWalletExistedUrl = 'http://localhost:3001/user/wallet'

    const [publicKey, setPublicKey] = useState('')
    const [amount, setAmount] = useState(0)
    const [toAddr, setToAddr] = useState('')
    const checkHistoryUrl = 'http://localhost:3001/user/history'

    const navigate = useNavigate()

    useEffect(() => {

        function CheckLogin() {
            if(localStorage.getItem('userPublicKey') == null) {
                navigate('/')
            }
            else {
                setPublicKey(localStorage.getItem('userPublicKey'))
            }
        }

        CheckLogin()   
        
    },[])

    function SendButtonAction() {

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
                                <input id='amount' type='number' min='0' placeholder='1223'/>
                            </div>
                        </div>
                        <div className='send-dialog-address'>
                            <label htmlFor='address'>To Address</label>
                            <input id='address' placeholder='0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D' />
                        </div>
                        <div>
                            <button className='send-button send-button-clear'>Clear</button>
                            <button className='send-button send-button-send'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}