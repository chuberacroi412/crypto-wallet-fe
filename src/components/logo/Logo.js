import './Logo.css'

export default function Logo({isPink}) {
    return (
        <div className='logo-wrapper'>
            <img className='logo' alt='logo' src="https://assets.coingecko.com/coins/images/15376/large/PEECH-token-logo-200.png?1620692908" width='65' height='55'/>
            {isPink ?
                <h1 className='logo-text-pink'>PEACH</h1>
                :
                <h1 className='logo-text'>PEACH</h1>
            }
            
            
        </div>
    )
}