import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Experience from './components/Experience';
import Navbar from "./components/Navbar";
import Startup from "./components/Startup";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/' exact  />
        <Route element={<About/>} path='/about' />
        <Route element={<SinglePost/>} path='/post/:slug'/>
        <Route element={<Post/>} path='/post' />
        <Route element={<Experience/>} path='/experience' />
        <Route element={<Startup/>} path="/startups" />
      </Routes>
    </Router>
  )
}

export default App;
