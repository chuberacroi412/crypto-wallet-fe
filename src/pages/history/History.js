import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import './History.css'
import Transaction from '../../components/transaction/Transaction'

export default function History() {
    return (
        <>
            <Nav/>
            <div className='history'>
                <Menu className='history-left-content' transaction={true}/>
                <div className='history-content'>
                    <Transaction fromAddr='0x1111' toAddr='0x2222' amount={21} status={0}/>
                    <Transaction fromAddr='0x1111' toAddr='0x2222' amount={21} status={1}/>
                    <Transaction fromAddr='0x1111' toAddr='0x2222' amount={21} status={1}/>
                </div>
            </div>
        </>
    )
}