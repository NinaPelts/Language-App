import { NavLink } from 'react-router-dom';
import './Header.scss'
import logo from '../../assets/images/logo.jpg'

export default function Header() {
    return <div className='header_container'>
        <nav className='navbar'>
            <NavLink className='nav_link' to='/'><img className='logo' src={logo} alt='logo'></img></NavLink>
            <div className="link_container">
            <NavLink className='nav_link' to='/'>Home</NavLink>
            <NavLink className='nav_link' to='/slider'>Cards</NavLink>
            </div>
        </nav>
    </div>;
    }