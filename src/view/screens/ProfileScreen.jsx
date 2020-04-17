import React from "react"
import Axios from "axios"
import {API_URL} from "../../constants/API"


class ProfileScreen extends React.Component{
    state = {
        username: "",
        role: "",
        fullname: "",
        id: ""
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

        Axios.get("http://localhost:3001/users")
        .then((res) => { 
            //res = response dari API
            for (let i = 0; i < res.data.length; i++){
                if (res.data[i].username == this.props.match.params.username){
                    alert(res.data[i].id)
                    this.setState({username: res.data[i].username})
                    this.setState({username: res.data[i].fullname})
                    this.setState({role: res.data[i].role})
                    this.setState({id: res.data[i].id})
                }
            }
            // console.log(res.data[0].id)
            // console.log(res.data.length)
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
        if (username == ""){
            return(
                <h1>kamu siapa?</h1>
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