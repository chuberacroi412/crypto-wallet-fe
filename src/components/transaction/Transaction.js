import './Transaction.css'

export default function Transaction({fromAddr, toAddr, amount, status}) {

    function ParseStatusCodeToText(code) {
        if(code == 0)
            return 'pendding'
        if(code == 1)
            return 'complete'
    }

    const statusText = ParseStatusCodeToText(status)
    return (
        <div className={'transaction ' + statusText}>
            <div className='block-info'>
                <p className='block-info-title'>From address: </p>
                <p>{fromAddr}</p>
            </div>
            <div className='block-info'>
                <p className='block-info-title'>To address: </p>
                <p>{toAddr}</p>
            </div>
            <div className='block-info'> 
                <p className='block-info-title'>Amount: </p>
                <p>{amount} ETH</p>
            </div>
            <div className='block-info'>
                <p className='block-info-title'>Status: </p>
                <p>{statusText}</p>
            </div>
        </div>
    )
}