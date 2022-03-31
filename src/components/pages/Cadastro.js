import styles from './Cadastro.module.css'
import CadastroForm from '../cadastro/CadastroForm'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Cadastro(){
  let navigate = useNavigate()

  function createAluno(aluno){
    
      axios.post('https://localhost:5001/aluno', aluno)
      .then(function (response) {
        navigate("/aluno", {state :{message: 'Aluno cadastrado com sucesso!'}})
      })
      .catch(function (error) {
        console.log(error);
      });

    
  }

    return(
        <div className={styles.cadastro_container}>
            <h1>Cadastro de Aluno</h1>
               <CadastroForm handleSubmit={createAluno} btnText="Cadastrar Aluno"/>
        </div>
    )
}