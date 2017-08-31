import React from 'react';

export default function ToDoItem(props) {
  return (
    <li className="list-group-item">
      <h3 style={{overflow: 'auto'}}>
        {props.toDo}
        <button
          className="btn btn-default btn-danger pull-right"
          onClick={ props.onDeleteButtonClick }
          value={props.index}
        >
          Delete
        </button>
      </h3>
    </li>
  )
}
