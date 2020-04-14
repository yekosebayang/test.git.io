import React from "react"

class InputScreen extends React.Component{
    state = {
        username: "",
        email: "",
        txtarea: ""
    }
    render(){
        const { username, email, txtarea } = this.state

        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value})
        }
        return(
            <div>
                <h1>Input Screen</h1>
                <h3>username: {username}</h3>
                <h3>email: {email}</h3>
                <input
                onChange={(event) => inputHandler(event, "username")}
                // onChange={inputHandler}
                type="text" 
                value=""
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
                
            </div>
        )
    }
}

export default InputScreen