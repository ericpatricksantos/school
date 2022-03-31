import styles from './Loading.module.css'
import loading from '../../img/loading.svg'

export default function CadastroForm() {
    return (
        <div className={styles.loading_container}>
            <img className={styles.loader} src={loading} alt="loading"/>
        </div>
    )
}