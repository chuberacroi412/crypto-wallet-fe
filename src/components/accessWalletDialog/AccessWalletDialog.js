import './AccessWalletDialog.css'

export default function AccessWalletDialog({closeDialogButtonAction}) {

    return (
        <div className='access-wallet-dialog'>
            <div>
                <p className='access-wallet-dialog-title'>Access your wallet</p>
                <input placeholder='Enter your public key'/>
            </div>
            <div>
                <button className='access-wallet-dialog-button access-wallet-dialog-button-close' onClick={() => closeDialogButtonAction()}>Close</button>
                <button className='access-wallet-dialog-button'>Access</button>
            </div>
        </div>
    )
}