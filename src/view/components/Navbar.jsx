import React from "react"
import {link, Link} from "react-router-dom"

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
                <Link to="/input">notice the different</Link> 
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

export default Navbar