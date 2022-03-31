import {Link} from 'react-router-dom'
import styles from './LinkButtoon.module.css'

export default function LinkButton({to, text}){
    return(
        <Link className={styles.btn}  to={to}>
            {text}
       </Link>
    )
}