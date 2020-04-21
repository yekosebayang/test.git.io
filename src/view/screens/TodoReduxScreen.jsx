import React from 'react'
import {connect} from 'react-redux'
import {todoInputHandler , userInputHandler , todoClickHandler} from '../../redux/actions'

class TodoReduxScreen extends React.Component {
    render() {
        return(
            <div className="container">
                <h1>Todo Screen</h1>
                <h2>{this.props.todo.todoInput}</h2>
                <input type="text"
                className="form-control"
                placeholder="input Todo Item"
                onChange={(e) => this.props.onChangeTodo(e.target.value)}/>
                <br/>
                <input type="text"
                className="form-control"
                placeholder="input Username"
                onChange={(e) => this.props.onChangeUser(e.target.value)}/> 
                {/* e target value untuk memberikan value, jika tidak value dari <input> yang akan dikirim */}
                <input type="button"
                className="btn btn-primary"
                value="add todo"
                onClick={(e) => this.props.onClickTodo(this.props.todo.todoInput)}/>
                <h2>{this.props.todo.todoList.map((val) => {
                    return <p>{val}</p>
                })}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        todo: state.haha,
        user: state.user
    }
}
const mapDispatchToProps = {
    onChangeTodo: todoInputHandler,
    onChangeUser: userInputHandler,
    onClickTodo: todoClickHandler,
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen) //objek jika memiliki nama yang sama, gausah di ...: ...