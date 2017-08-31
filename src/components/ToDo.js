import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDosCount from './ToDosCount';

export default class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDos: []
    };
  }

  handleNewToDoItem = (toDo) => {
    this.setState(function(prevState) {
      var toDos = prevState.toDos.concat(toDo);
      return {
        toDos: toDos
      }
    });
  };

  handleDeleteButtonClick = (event) => {
    var index = Number(event.target.value);

    this.setState(function(prevState){
      var toDos = [...prevState.toDos];
      toDos.splice(index, 1);
      return {
        toDos: toDos
      }
    });
  }

  render(){
    var {toDos} = this.state;
    return (
      <div>
        <ToDoForm onNewToDoItem={this.handleNewToDoItem} />
        <ToDoList
          toDos={toDos}
          onDeleteButtonClick={this.handleDeleteButtonClick}
        />
        <ToDosCount toDosCount={toDos.length} />
      </div>
    )
  }
}
