import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

class Navbar extends React.Component{
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
                <div>Selamat Datang {this.props.user.username}</div> 
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(Navbar);
  
