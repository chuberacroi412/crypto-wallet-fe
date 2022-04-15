import Logo from '../logo/Logo'
import './Banner.css'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';

export default function Banner() {
    return (
        <div className='banner-wrapper'>
            <section className='banner-header '>
                <Logo />
                <div className='banner-sub-menu'>
                    <p>What is Peach</p>
                    <p>Wallet action</p>
                    <p>Buy ETH</p>
                </div>
                <div className='banner-hub'>
                    <div>
                        <HubOutlinedIcon />
                    </div>
                    <p>Peach Hub</p>
                </div>
            </section>
            <section>
                <div className='banner-slogan-textarea'>
                    <p className='banner-slogan'>
                        Ethereum's Original Wallet
                    </p>
                    <p>Peach is a free, client-side interface helping you interact with the Ethereum blockchain. Our easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so much more.</p>
                </div>
            </section>
            <section className='banner-button-action'>
                <button className='banner-button banner-button-create'>Create A New Wallet</button>
                <button className='banner-button'>Access My Wallet</button>
            </section>
        </div>
    )
}