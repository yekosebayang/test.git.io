import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

class InputScreen extends React.Component{
    state = {
        username: "",
        email: "",
        txtarea: ""
    }
    render(){
        const { username, email, txtarea } = this.state

        const inputHandler = (event, field) => {
            let username = this.setState({ [field]: event.target.value})
        }
        return(
            <div>
                <h1>{this.props.haloDunia.todoInput}</h1>
                <h1>Input Screen</h1>
                <h3>username: {username}</h3>
                <h3>email: {email}</h3>
                <input
                onChange={(event) => inputHandler(event, "username")}
                type="text" 
                placeholder="User Name"/><br/>
                <input
                onChange={(event) => inputHandler(event, "email")}
                type="text" 
                value=""
                placeholder="email"/><br/>
                <textarea 
                onChange={(event) => inputHandler(event, "txtarea")}
                name="" 
                id="" 
                cols="30" 
                rows="10"></textarea>
                <p>{txtarea.length}/140</p>
                <Link to={"/profile/" + username}>
                    <input type="button" value="login"
                    className="btn btn-primary"/>
                </Link>
                
            </div>
        )
    }
}

// export default InputScreen
const mapStateToProps = (state) => {
    return{
        haloDunia: state.haha
    }
}

export default connect(mapStateToProps)(InputScreen);