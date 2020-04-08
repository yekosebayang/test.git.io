import React from 'react';



const TombolA = () => {
    const kpncet = () => {
        alert("tilut")
    }

    let hello = "testing"
    return(
        <div>
            <p><input onClick={kpncet} type="button" value="lalulalang"/></p>
            <p>hello</p>
            {hello}
        </div>

    )
}
 
const NewScreen = () => {
    return(
        <div>
            <h1>Halo! ini screen baru</h1>
            <TombolA/>
        </div>
    )
}

export default NewScreen