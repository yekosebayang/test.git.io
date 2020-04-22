import React from "react"
import Axios from "axios"

import {Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import {loginHandler} from '../../redux/actions'
import { API_URL } from "../../constants/API"

// sweet alert
class LoginScreen extends React.Component{
    state = 
        {
            usernameInput: "",
            passwordInput: "",
            id: 0,
            redirect: false
        }
    InputHandler = (e, field) => {
        this.setState({ [field]: e.target.value })
    }
    // getDataHandler = () => {
    
    // const { usernameInput , passwordInput } = this.state

    // Axios.get(`${API_URL}users` ,{
    //     params: {
    //         username: usernameInput,
    //         password: passwordInput
    //     }
    // })
    // .then((res) => { 
    //     if (res.data.length === 0){
    //         alert("Username tidak ditemukan / password tidak sesuai")
    //     }
    //     else{
    //         this.setState({id: res.data[0].id})
    //         this.setState({redirect: true})
    //         this.props.onChangeUser(usernameInput)
    //     }
    // })
    // .catch((err) => {
    //     console.log(err)
        
    // })
    // console.log("bukan AXIOS")
    // }
    loginHandler = () => {
        const {usernameInput, passwordInput} = this.state

        const userData = { 
            username: usernameInput,
            password: passwordInput
        }
        this.props.onLogin(userData)
        // this.setState({redirect: true})
    }

    render(){
              // return <Redirect to={`/profile/${currentUsername}`} />;
        const { redirect , id } = this.state
        if (redirect === true){
            // return <Redirect to={`/profile/${usernameInput}`}/>
            return <Redirect to={`/profile/${id}`}/>
        }
        else {
            return(
                <div>
                    <div className="card center">
                        <h3>Login</h3>
                        <p>username: {this.props.user.username}</p>
                        <p>{this.props.user.errMsg}</p>
                        <input type="text" placeholder="Username"
                        onChange={(e) => this.InputHandler(e, "usernameInput")}
                        />
                        <input type="text" placeholder="Password"
                        onChange={(e) => this.InputHandler(e, "passwordInput")}
                        />
                        <input type="button" value="Login"
                        className="btn btn-primary"
                        // onClick={this.getDataHandler}/>
                        onClick={this.loginHandler}/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}
const mapDispatchToProps = {
    onLogin: loginHandler,
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen) //objek jika memiliki nama yang sama, gausah di ...: ...
    