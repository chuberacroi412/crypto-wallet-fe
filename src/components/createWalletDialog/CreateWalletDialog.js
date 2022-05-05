import './CreateWalletDialog.css'
import { useEffect, useState} from "react";

export default function CreateWalletDialog({closeDialogButtonAction}) {
    const baseUrl = 'http://localhost:3001'
    const createWalletUrl = baseUrl + '/user/wallet'

    const [publicKey, setPublicKey] = useState('')
    const [privateKey, setPrivateKey] = useState('')

    useEffect(() => {

        async function loadKeyPair() {
            const res = await fetch(createWalletUrl, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
    
            if(res.status == 200) {
                const data = await res.json()
    
                setPublicKey(data.publicKey)
                setPrivateKey(data.privateKey)
            }
        }

        loadKeyPair()
        
    },[])

    return (    
        <div className='create-wallet-dialog'>
            <div>
                <p className='create-wallet-dialog-title'>Save your private key to somewhere</p>
                <div>
                    <div className='create-wallet-dialog-info-block'>
                        <p className='create-wallet-dialog-info-block-title'>Your private key : </p>
                        <p>{privateKey}</p>
                    </div>
                    <div className='create-wallet-dialog-info-block'>
                        <p className='create-wallet-dialog-info-block-title'>Your public key :</p>
                        <p>{publicKey}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='create-wallet-dialog-button create-wallet-dialog-button-close' onClick={() => closeDialogButtonAction()}>Close</button>
            </div>
        </div>
    )
}