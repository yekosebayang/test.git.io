import React from "react"
import Axios from "axios"

import {Link, Redirect} from "react-router-dom"

class LoginScreen extends React.Component{
    state = 
        {
            usernameInput: "",
            passwordInput: "",
            redirect: false
        }
    InputHandler = (e, field) => {
        this.setState({ [field]: e.target.value })
    }
    getDataHandler = () => {
    
    const { usernameInput , passwordInput} = this.state

    Axios.get("http://localhost:3001/users" ,{
        params: {
            username: usernameInput,
            password: passwordInput
        }
    })
    .then((res) => { 
        console.log(res.data)
        console.log(res.data.length)
        if (res.data.length == 0){
            alert("Username tidak ditemukan / password tidak sesuai")
        }
        else{
            this.setState({redirect: true})
        }
    })
    .catch((err) => {
        console.log(err)
        
    })
    console.log("bukan AXIOS")
    }

    render(){
              // return <Redirect to={`/profile/${currentUsername}`} />;
        const { redirect , usernameInput } = this.state
        if (redirect == true){
            return <Redirect to={`/profile/${usernameInput}`}/>
        }
        else {
            return(
                <div>
                    <div className="card center">
                        <h3>Login</h3>
                        <input type="text" placeholder="Username"
                        onChange={(e) => this.InputHandler(e, "usernameInput")}
                        />
                        <input type="text" placeholder="Password"
                        onChange={(e) => this.InputHandler(e, "passwordInput")}
                        />
                        <input type="button" value="Login"
                        className="btn btn-primary"
                        onClick={this.getDataHandler}/>
                    </div>
                </div>
            )
        }
    }
}

export default LoginScreen
