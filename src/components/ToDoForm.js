import React, { Component } from 'react';

export default class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const toDo = this.inputRef.value;
    this.props.onNewToDoItem(toDo);
    this.inputRef.value = '';
  };

  handleRefInputEvent = (inputRef) => {
    this.inputRef = inputRef;
  };

  render(){
    return (
      <form className="form-group" onSubmit={this.handleFormSubmit}>
        <input className="form-control" type="text" placeholder="Add ToDo item" ref={this.handleRefInputEvent}/>
      </form>
    );
  }
}
