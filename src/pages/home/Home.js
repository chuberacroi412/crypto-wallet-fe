import './Home.css'
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { ArrowCircleRightOutlined } from '@mui/icons-material';


export default function Home() {
    return (
        <div>
            <Banner/>
            <section className='home-section'>
                <p className='home-section-title'>Features</p>
                <p className='home-section-text'>Your Gateway to the <br/> Ethereum Blockchain</p>
                <div className='home-example-dialog'>
                    <p className='home-example-dialog-title'>Buy, send and recevie ETH and ERC20 tokens</p>
                    <div className='home-example-dialog-item'>
                        <div>
                            <label htmlFor='type'>Type</label>
                            <input id='type' value='ETH - Ethereum' readOnly />
                        </div>
                        <div>
                            <label htmlFor='amount'>Amount</label>
                            <input id='amount' value='1337' readOnly />
                        </div>
                    </div>
                    <div className='home-example-dialog-address'>
                        <label htmlFor='address'>To Address</label>
                        <input id='address' value='0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D' readOnly />
                    </div>
                </div>
            </section>
            <section  className='home-section'>
                <p className='home-section-title'>Why Peach</p>
                <p className='home-section-text'>Easy and secrue access to <br/> the Ethereum Blockchain</p>
                <div className='home-features'>
                    <div className='home-features-block home-features-left-block'>
                        <p className='home-features-title'>Friendly to use</p>
                        <p>Access the Ethereum blockchain's original and most-trusted wallet, now with a host of new features all contained in an elegant and friendly interface.</p>
                    </div>
                    <div className='home-features-center-block'>
                        <div className='home-features-block'>
                            <p className='home-features-title'>Swaps, DeFi, DApps, NFTs, Stablecoins</p>
                            <p>Partnered with Bity, Kyber Network, Changelly, and Simplex to allow users to swap fiat to crypto, ETH and BTC, ETH and ERC-20.</p>
                        </div>
                        <div className='home-features-block'>
                            <p className='home-features-title'>Hardware wallet support</p>
                            <p>Peach offers support for all major hardware wallets including Ledger, Trezor, and many more.</p>
                        </div>
                    </div>
                    <div className='home-features-block home-features-right-block'>
                        <p className='home-features-title'>Peach wallet</p>
                        <p>Peach brings a hardware wallet style security to your iOS or Android smart phone, helping you to secure your funds as never before.</p>
                        <div className='home-features-get-started'>
                            <p>Get started</p>
                            <ArrowCircleRightOutlined/> 
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}