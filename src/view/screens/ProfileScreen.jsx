import React from "react"
import Axios from "axios"
import {API_URL} from "../../constants/API"


class ProfileScreen extends React.Component{
    state = {
        username: "",
        role: "",
        fullname: "",
        id: 0
    }
    deleteDataHandler = () => {
    const { id } = this.state

        Axios.delete(`${API_URL}users/${id}`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    componentDidMount = () => {
        let userId = this.props.match.params.id 
        Axios.get(`${API_URL}users/${userId}`)
        .then((res) => { 
            console.log(res)
            const { id, username, role, fullName } = res.data;
            this.setState({
                username: username,
                fullname: fullName,
                role: role,
                id: id
            })
        })
        .catch((err) => {
            console.log(err)
        })
        console.log("bukan AXIOS")     
    }

    // Axios.get("http://localhost:3001/users", {
    //     params: {
    //         username: "pikachu", //misalnya nyari uname, dengan nama pikachu
    //         role: "user"
    //     }
    // })
    // .then((res) => { 
    //     //res = response dari API
    //     console.log(res.data.)
    //     // this.setState({userList: res.data})
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
    // console.log("bukan AXIOS")
    // }
    
    render() {
    const { username , role , fullname} = this.state
        if (username === ""){
            return(
                <>
                <h1>hais {this.props.match.params.id}</h1>
                <h1>kamu siapa?</h1>
                </>
            )
        }
        return(
            <div className="container">
                <h1>{username}</h1>
                <h2>welcome, {fullname}</h2>
                <h2>{role}</h2>
                {/* <input type="button" value="Get Data" 
                className="btn btn-success" 
                onClick={this.getDataHandler}/> */}
                <input type="button" value="Delete Data"
                className="btn btn-danger"
                onClick={this.deleteDataHandler}/>
            </div>
        )
        
    }
}

export default ProfileScreen