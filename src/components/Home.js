import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createToDo, getToDos } from '../actions/todoActions';
import classnames from 'classnames';
import ToDoList from './ToDo/ToDoList';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            todoName: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
            this.props.getToDos();
        }
    }

    componentDidMount() {
        this.props.getToDos();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const newToDoItem = {
            todoName: this.state.todoName,
            completed: false
        }
        this.props.createToDo(newToDoItem, this.props.history);
        this.setState({ errors: {}, todoName: "" })
        // console.log(newToDoItem);
    }
    render() {
        const { errors } = this.state;
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group row" style={{ marginBottom: "0px" }}>
                        <div className="col-sm-10">
                            <input type="text"
                                className={classnames("form-control", {
                                    "is-invalid": errors.todoName
                                })}
                                placeholder="Add To Do Item"
                                name="todoName"
                                value={this.state.todoName}
                                onChange={this.onChange}
                            />
                        </div>
                        <input type="submit" className="btn btn-primary col-sm-1 add" value="Add" />

                    </div>
                    {
                        errors.todoName && (
                            <div className="text-danger">
                                <small> {errors.todoName} </small>
                            </div>
                        )

                    }

                </form>

                <ToDoList list={this.props.todo.todos} />

            </div >
        )
    }
}


Home.propTypes = {
    createToDo: PropTypes.func.isRequired,
    errros: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    getToDos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    todo: state.todo
})
export default connect(mapStateToProps, { createToDo, getToDos })(Home);