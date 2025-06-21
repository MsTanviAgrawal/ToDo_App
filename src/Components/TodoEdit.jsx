import React from 'react'
 import './Todo.css'

const TodoEdit = ({list, deleteItem, editItem, updateItemValue, saveItem}) => {
  return (
   

    <ul className="todo-list">
      {list.map((item) => (
        <li key={item.id} className="todo-item">
          {item.isEditing ? (
            <>
              <input
                type="text"
                value={item.value}
                onChange={(e) => updateItemValue(item.id, e.target.value)}
                className="inline-input"
              />
              <button className="save-btn" onClick={() => saveItem(item.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{item.value}</span>
              <div className="button-group">
                <button className="edit-btn" onClick={() => editItem(item.id)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>

  )
}

export default TodoEdit
