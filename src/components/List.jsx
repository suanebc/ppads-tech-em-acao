import React from 'react'
import edit from '../img/edit/edit.png';
import trash from '../img/trash/trash.png';
const List = ({todo, removeToDo, completeToDo}) => {

  return (
      <div 
      className='list-container' 
      style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className='list-text'>
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div className='list-div-button'>
              <button className='list-button' type="submit" onClick={()=> completeToDo(todo.id)}><img src={edit}/></button>
              <button className='list-button' type="submit" onClick={() => removeToDo(todo.id)}><img src={trash}/></button>
            </div>
          </div>

  )
}

export default List