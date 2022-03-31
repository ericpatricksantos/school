import styles from './DetalheAluno.module.css'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import CadastroForm from '../cadastro/CadastroForm'
import Message from "../layout/Message";

export default function DetalheAluno() {

    const { id } = useParams()
    const [showAlunoForm, setShowAlunoForm] = useState(false)
    const [aluno, setAluno] = useState([])
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {

        axios.get(`https://localhost:5001/aluno/${id}`)
        .then( (response) => {
            setAluno(response.data)
        })
        .catch(error => console.log);

    }, [id])
   
    function toggleAlunoForm(){
        setShowAlunoForm(!showAlunoForm)
    }

    function editPost(aluno){
    
      if(aluno.nome.length < 1){
            setMessage(' O nome não pode ser vazio ')
            setType('error')
            return false
      }
   
      axios.patch(`https://localhost:5001/aluno`, aluno)
      .then( (response) => {
        setAluno(response.data)
        setShowAlunoForm(false)
        setMessage(' Aluno atualizado ')
        setType('sucess')
      })
      .catch(error => console.log);
    }

    return (
        <>
        {aluno.nome ? (
            <div className={styles.aluno_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message}/>}

                    <div className={styles.details_container}>
                        <h1>Informações do Aluno</h1>
                        <button className={styles.btn} onClick={toggleAlunoForm}>
                            { !showAlunoForm ? 'Editar Aluno' : 'Fechar'}
                        </button>
                        
                        {!showAlunoForm ? (
                            <div className={styles.aluno_info}>
                                <p>
                                    <span>Nome:</span> {aluno.nome}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.aluno_info}>
                                <CadastroForm
                                 handleSubmit={editPost} 
                                 btnText="Concluir edição"
                                  alunoData={aluno}/>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        ) : (<Loading/>)}
        </>
    )
}