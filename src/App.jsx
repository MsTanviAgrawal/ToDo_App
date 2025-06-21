import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoEdit from './Components/TodoEdit'
import './Components/Todo.css'

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

const addItem = () => {
    if (userInput.trim() !== "") {
      setList([...list, { id: Date.now(), value: userInput, isEditing: false }]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  const editItem = (id) => {
    setList(list.map(item =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    ));
  };

  const updateItemValue = (id, newValue) => {
    setList(list.map(item =>
      item.id === id ? { ...item, value: newValue } : item
    ));
  };

  const saveItem = (id) => {
    setList(list.map(item =>
      item.id === id ? { ...item, isEditing: false } : item
    ));
  };


  return (
    <>
      <div>
      <TodoForm
        userInput={userInput}
        setUserInput={setUserInput}
        addItem={addItem}
      />
      <TodoEdit
        list={list}
        deleteItem={deleteItem}
        editItem={editItem}
        updateItemValue={updateItemValue}
        saveItem={saveItem}
        />
      </div>
    </>
  )
}

export default App
