import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const[progress, setProgress] = useState(0)
  
    return (
      <div>
      <BrowserRouter>
      <NavBar/> 
      <LoadingBar height={3} color='#f11946' progress={progress}/>
      <Routes>  
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" bagColor="danger"/>}/>
        <Route exact path='/business'element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"  bagColor="secondary"/>} />
        <Route exact path='/entertainment'element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" bagColor="success"/>} />
        <Route exact path='/general'element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" bagColor="success"/>} />
        <Route exact path='/health'element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"  bagColor="danger"/>}/>
        <Route exact path='/science'element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" bagColor="info"/>} />
        <Route exact path='/sports'element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"  bagColor="success"/>}/>
        <Route exact path='/technology'element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" bagColor="info"/>} />
      </Routes>
      </BrowserRouter>
      </div>
    )
}

export default App;