import { useState } from 'react';

import botao from '../img/botao/botao-add.png'

const Register = ({addToDo}) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addToDo(value, category)
    setValue("")
    setCategory("")
  };

  return (
    <div className ='register'>
      <form onSubmit={handleSubmit} className='form'>
        <input 
        type="text"
         placeholder='Digite o Título de sua tarefa'
         value={value} 
         onChange={(e) => setValue(e.target.value)}/>
        <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="OUTROS">OUTROS</option>
          <option value="TRABALHO">TRABALHO</option>
          <option value="SAÚDE">SAÚDE</option>
          <option value="PESSOAL">PESSOAL</option>
          <option value="EDUCAÇÃO">EDUCAÇÃO</option>
        </select>
        <button type="submit"><img src={botao}/></button>
      </form>
    </div>
  )
}

export default Register;