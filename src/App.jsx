import { useState } from 'react';
import './App.css';

import Filter from './components/Filter';
import List from './components/List';
import Register from './components/Register';
import Search from './components/Search';



function App() {
  const [toDos, setToDos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc");

  const addToDo = (text, category) => {
    const newToDos = [... toDos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted:false,
    
      },
    ];
    setToDos(newToDos);

  };

  const removeToDo = (id) => {
    const newToDos = [... toDos];
    const filteredToDos = newToDos.filter(
      todo => todo.id !== id ? todo : null
    );
    setToDos(filteredToDos);
  };

  const completeToDo = (id) => {
    const newToDos = [... toDos];
    newToDos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted ): todo
    );
    setToDos(newToDos);
  };

  return (
    <div className='app'>
      <Register addToDo={addToDo} />

      <div className='div-list'>
        <Search search={search} setSearch={setSearch} />

        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

        <div className='div-to-do-list'>
          {toDos
          .filter((todo) => 
          filter === "All" 
          ? true 
          : filter === "Completed"
          ? todo.isCompleted 
          : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => 
            sort === "Asc" 
              ? a.text.localeCompare(b.text) 
              : b.text.localeCompare(a.text)
          )
          .map((todo) =>(
            <List 
              key={todo.id} 
              todo={todo} 
              removeToDo={removeToDo} 
              completeToDo={completeToDo} />
          ))}
        </div>
      </div>
    </div> 
  ); 
}

export default App;
