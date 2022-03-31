import styles from './AlunoCard.module.css'
import {Link} from 'react-router-dom'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

export default function AlunoCard({id, nome, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.aluno_card}>
            <h4>{nome}</h4>
            <p>O aluno {nome} está matriculado na nossa instituição!</p>
            <div className={styles.aluno_card_actions}>
                <Link to={`/aluno/${id}`}>
                    <BsPencil/>Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/>Excluir
                </button>
            </div>
        </div>
    )
}