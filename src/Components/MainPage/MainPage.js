import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
const [confirmEmail, setConfirmEmail] = useState("")

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeConfirmEmail = (event) => {
  setConfirmEmail(event.target.value)
}

const sendData = () => {
  if (name.length === 0 || age.length === 0 || email.length === 0) {
    alert("Todos os campos são obrigatórios") 
  }
  if (age<18) {
    alert("Deve ser maior de idade")
  }
  if (name.length<10 || name.length>30) {
    alert("Nome com mínimo de 10 caracteres e no máximo 30")
  }
  if (!email.includes("@usuario.com")) {
    alert("Permitido apenas no domínio @usuario.com")
  }
  if (confirmEmail!==email) {
    alert("Confirmação de e-mail incorreta")
  }
  if(!(name.length === 0 || age.length === 0 || email.length === 0)&&!(age<18)&&!(name.length<10 || name.length>30)&&(email.includes("@usuario.com"))&&!(confirmEmail!==email)){
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  setFormFlow(2)}
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
      name={name}
      onChangeName={onChangeName}

      age={age}
      onChangeAge={onChangeAge}

      email={email}
      onChangeEmail={onChangeEmail}

      confirmEmail={confirmEmail}
      onChangeConfirmEmail={onChangeConfirmEmail}

      sendData={sendData}
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage