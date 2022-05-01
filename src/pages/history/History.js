import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import './History.css'

export default function History() {
    return (
        <>
            <Nav/>
            <div className='history'>
                <Menu transaction={true}/>
            </div>
        </>
    )
}