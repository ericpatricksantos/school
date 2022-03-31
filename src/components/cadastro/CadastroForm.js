import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'
import { useState } from 'react'

export default function CadastroForm({handleSubmit, btnText, alunoData}) {

    const [aluno, setAluno] = useState(alunoData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(aluno)
    }

    function handleChange(e){
        setAluno({...aluno, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Aluno"
                name="nome"
                placeholder="Insira o nome do aluno" 
                handleOnChange={handleChange}
                value={aluno.nome ? aluno.nome : '' }
            />
           <SubmitButton text={btnText}/>
        </form>
    )
}