import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import './History.css'
import Transaction from '../../components/transaction/Transaction'
import { useEffect, useState} from "react";
import { useNavigate  } from 'react-router-dom';

export default function History() {

    const [publicKey, setPublicKey] = useState('')
    const [history, setHistory] = useState(0)
    const checkHistoryUrl = 'http://localhost:3001/user/history'

    const navigate = useNavigate()

    useEffect(() => {
        async function LoadHistory(userPublicKey) {

            const completeUrl = checkHistoryUrl + '/' + userPublicKey

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
                setHistory(await LoadHistory(localStorage.getItem('userPublicKey')))
            }
        }

        CheckLoginAndLoadInfor()   
        
    },[])

    return (
        <>
            <Nav/>
            <div className='history'>
                <Menu className='history-left-content' transaction={true}/>
                <div className='history-content'>
                    {console.log(history)}
                    {history.length > 0 ? 
                    <>
                    {history.map((item, i) => (
                        <Transaction key={i} fromAddr={item.from} toAddr={item.to} amount={item.amount} status={1}/>
                    ))}
                    </>
                    : <></>}
                </div>
            </div>
        </>
    )
}