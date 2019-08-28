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
            errors: {},
            filter : "All"
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.filterList = this.filterList.bind(this);
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

    filterList(){
        let list;
        switch(this.state.filter){
            case "All":
                list = this.props.todo.todos;
                console.log(list);
                break;
            case "Completed":
                list = this.props.todo.todos.filter((item)=> item.completed===true);
                break;
            case "Active":
                list = this.props.todo.todos.filter((item)=> item.completed===false);
                break;
            default:
                list = this.props.todo.todos;
        }
        console.log(list);
        return list;
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
                        <input type="submit" className="btn btn-primary col-sm-2 add" value="Add ToDo" />

                    </div>
                    {
                        errors.todoName && (
                            <div className="text-danger">
                                <small> {errors.todoName} </small>
                            </div>
                        )

                    }
                     
                </form>
                {
                // <div style={{width: "65%",marginTop:"10px"}}>
                //     <div className="row">
                //         <button 
                //             className={this.state.filter==="All"?"btn btn-primary col-md-2":"btn btn-default col-md-2"}
                //             onClick={() => this.setState({filter:"All"})}>
                //             All</button>
                //         <button 
                //             style={{marginLeft:"10px"}}
                //             className={this.state.filter==="Completed"?"btn btn-primary col-md-2":"btn btn-default col-md-2"}
                //             onClick={() => this.setState({filter:"Completed"})}>Completed</button>
                //         <button 
                //             style={{marginLeft:"10px"}}
                //             className={this.state.filter==="Active"?"btn btn-primary col-md-2":"btn btn-default col-md-2"}
                //             onClick={() => this.setState({filter:"Active"})}>Active</button>
                //     </div>
                // </div>
                
                }
                {
                    // <ToDoList list={this.filterList} />
                }
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