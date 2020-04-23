import React from "react"
import Cookie from 'universal-cookie'

import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {logoutHandler} from '../../redux/actions'

const cookieObject = new Cookie()

class Navbar extends React.Component{

    logOut= () =>  {
        const userData = { 
            id: 0,
            username: "",
            password: "",
            role: "",
            fullName: "",
        }
        this.props.onLogout(userData)
        cookieObject.remove("authData","/")
    }

    render(){
        return(
            <div
            className="d-flex justify-content-around align-items-center"
            style={{height: "80px"}}>
                <a href="/Counter">gapake Link</a>
                {/* <a href="">Ini Navbar</a>
                <a href="">Ini Navbar</a> */}
                <Link to="/regis">with link</Link>
                <Link to="/todo">To Do</Link> 
                <div>
                    {this.props.user.username == ''? 
                        (<div>Silahkan Login</div>)
                        :
                        (
                        <div>
                            Selamat Datang, {this.props.user.username}
                            <input 
                            className="ml-1 p-1 fluid btn btn-danger" 
                            type="button" 
                            value="LogOut"
                            onClick={this.logOut}/>
                        </div> 
                        )
                    }
                </div> 
                <div>
                    <div className="">
                        <Link className="p-2" to="/">Login</Link>
                        <Link to="/regis">Regis</Link>
                    </div>
                </div>
            </div>
        )
    }
}

// export default Navbar
const mapDispatchToProps = {
    onLogout: logoutHandler,
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
  
