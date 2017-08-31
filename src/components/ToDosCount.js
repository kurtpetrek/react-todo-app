import React from 'react';

export default function ToDosCount(props) {
  return (
    <div className="well well-sm">
      <h4>Total Todos: {props.toDosCount}</h4>
    </div>
  )
}
