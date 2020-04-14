import React from "react"

class RegisLogin extends React.Component{
    state = 
        {
            username: "",
            password: "",
            rpassword: "", 
            usernameSimpan: ["passwordTest"],
            passwordSimpan: ["passwordTest"],
            usernameInput: "",
            passwordInput: "",
        }
        
    render(){
        let hello = "Hello"

        const testing = () => {
            alert(usernameSimpan[1])
        }
            
        const { username, password , rpassword , usernameSimpan , passwordSimpan , usernameInput , passwordInput} = this.state

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
                <div>
                    {/* <input onClick={testing} type="button" value="console.log"/> */}
                    <div className="text-center">
                        <p>
                            <input
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

            <div>
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
            </div>           
        </div>
        )
    }
}

export default RegisLogin