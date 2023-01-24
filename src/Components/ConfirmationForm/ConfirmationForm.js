import React, { useState } from 'react'
import { Form, Input } from '../MainPage/styles'

const ConfirmationForm = () => {

  const [date, setDate] = useState("")
  const [fone, setFone] = useState("")
  const [cor, setCor] = useState("")

  function onChangeDate(event) {
    setDate(event.target.value)
  }

  function onChangeFone(event) {
    setFone(event.target.value)
  }

  function onChangeCor(event) {
    setCor(event.target.value)
  }

  function enviaDados() {
    if (date.length === 0 || fone.length === 0 || cor.length === 0) {
      alert("Todos os campos são obrigatórios")
    }
    else {
      alert("Dados enviados")
      setDate("")
      setFone("")
      setCor("")
      alert("Dados enviados")
    }
  }

  return (
    <Form>
      <label>
        Data de Nascimento:
        <Input type="date" value={date} onChange={onChangeDate} />
      </label>
      <label>
        Número de Telefone:
        <Input type="number" value={fone} onChange={onChangeFone} />
      </label>
      <label>
        Cor:
        <select value={cor} onChange={onChangeCor} placeholder="Selecione">
          <option></option>
          <option value="negro">Negro</option>
          <option value="pardo">Pardo</option>
          <option value="amarelo">Amarelo</option>
          <option value="indígena">Indígena</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
      </label>
      <button onClick={enviaDados}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm