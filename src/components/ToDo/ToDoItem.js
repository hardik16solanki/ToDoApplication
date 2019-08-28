import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updateToDo } from '../../actions/todoActions';
import { connect } from 'react-redux';

class ToDoItem extends Component {
    constructor() {
        super();
        this.state = {
            showUpdate: false,
            updatedName: "",
            updateCompleted: false
        };
        this.updateShow = this.updateShow.bind(this);
        this.trackUpdate = this.trackUpdate.bind(this);
        this.updateStatus = this.updateStatus.bind(this);

    }
    updateShow(e) {
        e.preventDefault();
        this.props.item.todoName = this.state.updatedName;
        this.props.updateToDo(this.props.item, this.props.history);
        this.setState({ updatedName: "", showUpdate: !this.state.showUpdate });
    }
    trackUpdate(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ updatedName: e.target.value }, () => console.log(this.state.updatedName));
    }
    updateStatus() {
        // e.preventDefault();
        // e.stopPropagation();

        this.props.item.completed = !this.props.item.completed;
        this.setState({ updateCompleted: this.props.item.completed })
        this.props.updateToDo(this.props.item, this.props.history);
        console.log(this.props.item.todoName);
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox"
                        className="custom-control-input"
                        id="check1" style={{ marginRight: "10px" }}
                        onChange={this.updateStatus}
                    // {this.item.completed ? "checked" : ""} 
                    />
                    <label
                        htmlFor="check1"
                        className={this.props.item.completed ? "custom-control-label strike" : "custom-control-label"}>
                        {this.props.item.todoName}
                    </label>
                    <span className="btn btn-primary icons">
                        <i className="glyphicon glyphicon-trash"></i>
                    </span>
                    <span
                        className={this.state.showUpdate ? "btn btn-primary icons invisible" : "btn btn-primary icons"}
                        onClick={this.updateShow}>
                        <i className="glyphicon glyphicon-edit"></i>
                    </span>
                    <form onSubmit={this.updateShow} className={this.state.showUpdate ? "updateform" : "invisible updateform"}>
                        <input type="text"
                            defaultValue={this.props.item.todoName}
                            onChange={this.trackUpdate}
                            style={{ marginRight: "10px" }} />
                        <input type="submit" className="btn btn-primary" value="Update" />
                    </form>
                </div>
            </li>
            // <h2> TO Do Item</h2>
        )
    }
}

ToDoItem.propTypes = {
    updateToDo: PropTypes.func.isRequired
}
// const mapStateToProps = state => ({

// });

export default connect(null, { updateToDo })(ToDoItem)