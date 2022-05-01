import Menu from '../../components/menu/Menu'
import Nav from '../../components/nav/Nav'
import './Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <Nav />
            <div className='dashboard'>
                <Menu dashboard={true}/>
            </div>
        </>
        
    )
}