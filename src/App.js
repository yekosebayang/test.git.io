import React from 'react';
import './App.css'
import TableProduct from './view/components/TableProduct'

function App() {  
  return (
    <div className="App">
      {/* <h1>hello world</h1>
      <h2 style={{border: '1px solid red', marginTop: '30px'}}>test styling</h2>
       <p>{
          arr.map(val => {
            return (
              <>
               <p>{val}</p>
               <NewScreen/> 
              </>
            )
          })}
      </p> */}
      <TableProduct/>
    </div>
  )
}

export default App
