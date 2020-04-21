import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import './App.css'
import './bootstrap.css'

import BookCard from './view/components/BookCard.jsx'

import CounterScreen from './view/screens/CounterScreen.jsx'
import Register from './view/screens/Register.jsx'
import LifeCycle from './view/screens/LifeCycle.jsx'
import InputScreen from './view/screens/InputScreen.jsx';
import Registrasi from './view/screens/Registrasi';
import LoginScreen from './view/screens/LoginScreen';
import ProfileScreen from './view/screens/ProfileScreen';

import Brave from './view/images/brave.png'
import CrazyRich from './view/images/crazyRich.png'
import Educated from './view/images/educated.png'
import Handmaid from './view/images/handmaid.png'
import PageNotFound from './view/screens/PageNotFound';
import Navbar from './view/components/Navbar';
import TodoReduxScreen from './view/screens/TodoReduxScreen';


function App() {  
  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: CrazyRich,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

  const renderArrBooks = () => {
    return arrBooks.map((val) => {
        return <BookCard kartuBuku = {val}/>
    })
}

  return (
    // <div>
    //   <h1 className="App">hello world</h1>
    //   {/* <div className="container">
    //     <div className> */}
    //       {/* {renderArrBooks()} */}
          
    //     {/* </div>
    //   </div> */}
    //   <LifeCycle/>
    // </div>
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/profile/:id" component={ProfileScreen}/>
        <Route exact path="/regis" component={Registrasi}/>
        {/* <Route exact path="/counter" component={CounterScreen}/> */}
        {/* <Route exact path="/lifeCycle" component={LifeCycle}/> */}
        <Route exact path="/input" component={InputScreen}/>
        <Route exact path="/" component={LoginScreen}/>
        <Route exact path="/todo" component={TodoReduxScreen}/>
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
