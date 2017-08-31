import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList(props){
  var toDoList = [];
  var toDos = props.toDos;
  toDos.forEach(function(value, i){
    toDoList.push( <ToDoItem toDo={value} index={i} onDeleteButtonClick={props.onDeleteButtonClick}  />);
  });
  return (
    <ul className="list-group">
      {toDoList}
    </ul>
  )
}
