import React from "react"
import {Link} from "react-router-dom"

import {loginHandler} from '../../redux/actions'
class Register extends React.Component{
    state = 
        {
            username: "",
            password: "",
            rpassword: "", 
            usernameSimpan: ["passwordTest"],
            passwordSimpan: ["passwordTest"],
            usernameInput: "",
            passwordInput: "",
            edit: false

        }
        
    render(){

        const deleteArr = (idx) => {
            let temp = [...usernameSimpan]
            let temp2 = [...passwordSimpan]
            temp.splice(idx,1)
            this.setState({usernameSimpan: temp})
            this.setState({passwordSimpan: temp2})
        }

        const editArr = (idx) => {
            edit = true    
        }

        const renderArr = () => {
            return usernameSimpan.map((val, idx) => {
                // if (edit == false){
                //     return (
                //       <tr>
                //         <td>{usernameSimpan[idx]}</td>
                //         <td><input className="btn btn-primary" type="button" value="Edit" onClick={() => editArr(idx)}/></td>     
                //       </tr>)
                // }
                // else if (edit == true){
                //     return (
                //       <tr>
                //         <td>{usernameSimpan[idx]}</td>
                //         <td><input className="btn btn-danger" type="button" value="Delete" onClick={() => deleteArr(idx)}/>
                //          </td>     
                //       </tr>)
                // }
                return (
                          <tr>
                            <td>{usernameSimpan[idx]}</td>
                            <td>
                                <Link to={"/profile/" + usernameSimpan[idx]}>
                                    {/* <input className="btn btn-primary" type="button" value="LOGIN" onClick={() => editArr(idx)}/> */}
                                    <input className="btn btn-primary" type="button" value="LOGIN"/>
                                </Link>
                            </td>     
                          </tr>)  
            })
        }
            
        const { edit, username, password , rpassword , usernameSimpan , passwordSimpan , usernameInput , passwordInput} = this.state

        const inputHandler = (event, field) => {
            if (field != "register" && field != "login"){
                this.setState({ [field]: event.target.value})}
            
            else if (field == "register"){
                if (password != rpassword){
                    {alert("tidak boleh ada field kosong, dan password harus sama")}
                    {alert("tidak boleh ada field kosong, dan password harus sama")}
                }
                for (let i=0; i<usernameSimpan.length; i++){
                    if (username == usernameSimpan[i]){
                        alert(usernameInput + " sudah terdaftar")
                        break}
                    else if (i == usernameSimpan.length-1 ){
                        this.setState({ usernameSimpan: [...usernameSimpan, username]})
                        this.setState({ passwordSimpan: [...passwordSimpan, password]})
                        alert(username + " berhasil terdaftar")
                    }
                }
            }

            else if (field == "login"){
                for (let i=0; i<usernameSimpan.length; i++){
                    if (usernameInput == usernameSimpan[i] && passwordInput == passwordSimpan[i] ){
                        alert("hallo " + usernameInput)
                        break
                    }
                    if (usernameInput == usernameSimpan[i] && passwordInput != passwordSimpan[i] ){
                        alert("password salah")
                    }
                    else if (i == usernameSimpan.length-1 ){
                        alert("id tidak terdaftar")
                    }
                }
            
            }
        }
        

        return(
            <div>
                <div className="card col-3">
                    {/* <input onClick={testing} type="button" value="console.log"/> */}
                    <div className="text-center">
                        <p>
                            <input
                            value={username}
                            onChange={(event) => inputHandler(event, "username")}
                            type="text" 
                            placeholder="UserName"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(event) => inputHandler(event, "password")}
                            type="text" 
                            placeholder="Password"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(event) => inputHandler(event, "rpassword")}
                            type="text" 
                            placeholder="Repeat Password"
                            />
                        </p>
                    </div>
            
                    <div className="text-center">
                        <input onClick={(event) => inputHandler(event, "register")} type="button" value="register"/>
                    </div>

            </div>

            {/* <div>
                <h3 className="text-center"> Login </h3>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(event) => inputHandler(event, "usernameInput")}
                            type="text" 
                            placeholder="UserName"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            <input
                            onChange={(event) => inputHandler(event, "passwordInput")}
                            type="text" 
                            placeholder="Password"
                            />
                        </p>
                    </div>
                    <div className="text-center">
                        <input onClick={(event) => inputHandler(event, "login")} type="button" value="login"/>
                    </div>
            </div>            */}

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td colspan="2"><strong>Pilih</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderArr()}
                    </tbody>
                </table>
            </div>

            
        </div>
        )
    }
}

export default Register