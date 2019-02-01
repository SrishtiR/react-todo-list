import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
	removeTodo(id) {
		this.props.removeTodo(id);
	}

	render() {
		return(
			<div className="todoWrapper">
				<button className="removeTodo"
								size="sm" onClick={() => this.removeTodo(this.props.id)}>&times;</button>{this.props.todo.text}
			</div>
			);
	}
}