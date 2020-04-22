import React from "react"
import Axios from "axios"

import {connect} from 'react-redux'
import {registerHandler} from '../../redux/actions'
import {API_URL} from "../../constants/API"

class Registrasi extends React.Component{
    state = 
        {
            username: "",
            fullname: "",
            password: "",
            roleInput: "",
            rpassword: "", 
            redirect: false,
            isLoading: false

        }

    getDataHandler = () => {
        const { usernameInput , passwordInput , rpassword , roleInput , fullnameInput} = this.state

        Axios.get(`${API_URL}users` ,{
            params: {
            username: usernameInput,
            }
        })
        .then((res) => {
            if (passwordInput !== rpassword){
                alert("Password harus sama")
            }
            else{
                if (res.data.length === 1){
                    alert("data sudah terdaftar")
                }
                else {
                    Axios.post(`${API_URL}users`,{
                        username: usernameInput,
                        password: passwordInput,
                        fullName: fullnameInput,
                        role: roleInput
                    })
                    alert("data berhasil didaftarkan")
                }
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    regisHandlerRedux = () => {
        const { usernameInput , passwordInput , rpassword , roleInput , fullnameInput} = this.state
        const dataPost = {
            username: usernameInput,
            password: passwordInput,
            fullName: fullnameInput,
            role: roleInput
        }
        if (passwordInput !== rpassword){
            alert("Password harus sama")
        }
        else{
            this.props.onRegis(dataPost)
        }
    }

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value})
    }
       
    render(){
        const {isLoading} = this.state
        return(
            <div>
                <div className="card col-3">
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(e) => this.inputHandler(e, "usernameInput")}
                            type="text" 
                            placeholder="Username"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(e) => this.inputHandler(e, "fullnameInput")}
                            type="text" 
                            placeholder="Fullname"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(e) => this.inputHandler(e, "roleInput")}
                            type="text" 
                            placeholder="Role"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(e) => this.inputHandler(e, "passwordInput")}
                            type="text" 
                            placeholder="Password"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(e) => this.inputHandler(e, "rpassword")}
                            type="text" 
                            placeholder="Repeat Password"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <input onClick={this.regisHandlerRedux} 
                        type="button" value="register"
                        disabled={isLoading}/>
                        <p>{this.props.user.errMsg}</p>
                    </div>
                </div>
            </div>
        )
    }          
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}
const mapDispatchToProps = {
    onRegis: registerHandler,
}
export default connect(mapStateToProps, mapDispatchToProps)(Registrasi)