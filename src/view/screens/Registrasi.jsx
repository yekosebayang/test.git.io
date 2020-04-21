import React from "react"
import Axios from "axios"

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

    // postDataHandler = () => {
    //     const { usernameInput , passwordInput , roleInput} = this.state

    //     Axios.post(`${API_URL}users`,{
    //         username: usernameInput,
    //         password: passwordInput,
    //         role: roleInput
    //     })
    // }

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
                        <input onClick={this.getDataHandler} 
                        type="button" value="register"
                        disabled={isLoading}/>
                    </div>
                </div>
            </div>
        )
    }          
}

export default Registrasi