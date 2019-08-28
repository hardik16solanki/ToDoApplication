import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updateToDo,deleteToDo } from '../../actions/todoActions';
import { connect } from 'react-redux';


class ToDoItem extends Component {
    constructor() {
        super();
        this.state = {
            showUpdate: false,
            updatedName: "",
            updateErrors:{}
        };
        this.updateShow = this.updateShow.bind(this);
        this.trackUpdate = this.trackUpdate.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.cancelCliked = this.cancelCliked.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillRecieveProps(nextProps){
        if(nextProps.updateErrors){
            this.setState({updateErrors:nextProps.updateErrors});
        }
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

    updateStatus(e) {

        this.props.item.completed = e.target.checked;
        this.props.updateToDo(this.props.item, this.props.history);
        console.log(this.props.item.todoName,this.props.item.completed);
    }
    cancelCliked(){
        this.setState({ updatedName: "", showUpdate: !this.state.showUpdate });
    }
    deleteItem = id =>{this.props.deleteToDo(id)}

    render() {
        const {updateErrors} = this.state;
        return (
            <li className="list-group-item">
                <div className="form-check-label" >
                <label>
                    <input type="checkbox"
                        className="form-check-input"
                        style={{ marginRight: "10px" }}
                        onClick={this.updateStatus}
                        checked = {this.props.item.completed}
                    />
                    <span
                        className={this.props.item.completed ? "itemName strike" : "itemName"}
                        >
                        {this.props.item.todoName}
                    </span>
                </label>
                    {
                        updateErrors.todoName && (
                            <div className="text-danger" style={{float:"right"}}>
                                <small>ab{updateErrors.todoName} </small>
                            </div>
                        )
                    }
                    <span className="btn btn-primary icons"  onClick={() => this.deleteItem(this.props.item.todoName)}>
                        <i className="glyphicon glyphicon-trash"></i>
                    </span>
                    <span
                        className={this.state.showUpdate ? "btn btn-primary icons invisible" : "btn btn-primary icons"}
                        onClick={this.updateShow}>
                        <i className="glyphicon glyphicon-edit"></i>
                    </span>
                    <form onSubmit={this.updateShow} className={this.state.showUpdate ? "updateform" : "invisible updateform"}>
                        <span>
                            <input type="text"
                                defaultValue={this.props.item.todoName}
                                onChange={this.trackUpdate}
                                style={{ marginRight: "10px" }} />
                            <input type="submit" className="btn btn-primary button" value="Update" />
                            <input type="button" className="btn btn-danger button" value=" Cancel"  onClick={this.cancelCliked}/>
                        </span>
                    </form>
                    
                </div>
            </li>
            // <h2> TO Do Item</h2>
        )
    }
}

ToDoItem.propTypes = {
    updateToDo: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    updateErrors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    updateErrors: state.updateErrors
});

export default connect(mapStateToProps, { updateToDo,deleteToDo })(ToDoItem)