import './Home.css'
import Banner from "../../components/banner/Banner";

export default function Home() {
    return (
        <div>
            <Banner/>
            <section className='home-features'>
                <p className='home-feature-text'>Features</p>
                <p className='home-feature-title'>Your Gateway to the <br/> Ethereum Blockchain</p>
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
        </div>
    )
}