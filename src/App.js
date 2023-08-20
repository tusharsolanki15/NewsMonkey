import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component{
  pageSize = 6
  render() {
    return (
      <div>
      <BrowserRouter>
      <NavBar/> 
      <Routes>  
        <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general" bagColor="primary"/>}/>
        <Route exact path='/business'element={<News key="business" pageSize={this.pageSize} country="in" category="business"  bagColor="secondary"/>} />
        <Route exact path='/entertainment'element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" bagColor="success"/>} />
        <Route exact path='/general'element={<News key="general" pageSize={this.pageSize} country="in" category="general" bagColor="primary"/>} />
        <Route exact path='/health'element={<News key="health" pageSize={this.pageSize} country="in" category="health"  bagColor="danger"/>}/>
        <Route exact path='/science'element={<News key="science" pageSize={this.pageSize} country="in" category="science" bagColor="info"/>} />
        <Route exact path='/sports'element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"  bagColor="success"/>}/>
        <Route exact path='/technology'element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" bagColor="info"/>} />
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

