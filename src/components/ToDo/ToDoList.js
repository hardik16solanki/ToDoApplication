import React, { Component } from 'react'
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush list">
                {
                    this.props.list.map((item) =>
                        <ToDoItem key={item.id} item={item} />
                    )
                }
            </ul>
        )
    }
}
