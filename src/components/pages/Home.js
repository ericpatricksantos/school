import styles from './Home.module.css'
import escola from '../../img/escola.jpg'
import LinkButton from '../layout/LinkButton'
export default function Home(){
    return(
        <section className={styles.home_container}>
                <h1>Bem Vindo a <span>School</span></h1>
                <p>Matricule seu filho na nossa Escola</p>
                <LinkButton to="/cadastro" text="Cadastro de Aluno"/>
                <img src={escola} alt="escola"/>
        </section>
    )
}