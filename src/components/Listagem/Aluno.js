import styles from './Aluno.module.css'
import { useLocation } from 'react-router-dom'
import Message from "../layout/Message";
import Container from "../layout/Container"
import LinkButton from '../layout/LinkButton'
import AlunoCard from './AlunoCard';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from '../layout/Loading'

export default function Aluno() {

    const [alunos, SetAlunos] = useState([])
    const location = useLocation()
    const [removeLoading, setRemoveLoading] = useState(false)
    const [alunoMessage, setAlunoMessage] = useState('')

    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        axios.get('https://localhost:5001/aluno')
        .then( (response) => {
          SetAlunos(response.data)
          setRemoveLoading(true)
        })
        .catch(function (error) {
          console.log(error);
        });

    }, [])

    function removeAluno(id){
      axios.delete(`https://localhost:5001/aluno/${id}`)
      .then( () => {
        SetAlunos(alunos.filter((aluno) => aluno.id !== id))
        setAlunoMessage('Aluno removido com sucesso')
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    return (
        <div className={styles.aluno_container}>
            <div className={styles.title_container}>
                <h1>Alunos Cadastrados</h1>
                <LinkButton to="/cadastro" text="Cadastro de Aluno" />
            </div>

            {message && <Message type="sucess" msg={message} />}
            {alunoMessage && <Message type="sucess" msg={alunoMessage} />}
            <Container customClass="start">
            {alunos.length > 0 && 
                    alunos.map((aluno) => (
                       <AlunoCard 
                         key={aluno.id}
                         id={aluno.id}
                         nome={aluno.nome}
                         handleRemove={removeAluno}
                       /> 
                    ))}
            {!removeLoading && <Loading/>}
            {removeLoading && alunos.length === 0 && (
              <p>Não há alunos Cadastrados!</p>
            )}
            </Container>
        </div>
    )
}