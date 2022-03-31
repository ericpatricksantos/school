import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.jpeg'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container >
                <Link to="/"> <img src={logo} alt="School" height="50" /></Link>
                <ul  className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/aluno">Aluno</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}