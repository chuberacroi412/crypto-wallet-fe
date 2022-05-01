import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import './SendCoin.css'

export default function SendCoin() {
    return (
        <>
            <Nav/>
            <div className='send'>
                <Menu send={true}/>
            </div>
        </>
    )
}