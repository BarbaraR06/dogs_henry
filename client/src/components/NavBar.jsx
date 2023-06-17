import {Link} from 'react-router-dom'
import styles from '../css/NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Link to='/'> LANDING </Link>
            <Link to='/home'> HOME </Link>
            <Link to='/create'> NEW DOG </Link>
        </div>
    )
}

export default NavBar;