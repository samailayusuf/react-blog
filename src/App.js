import './App.css';
import BlogList from './BlogList';
import Blog from './Blog';
import NavBar from './NavBar';
import {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First blog title',
      body: 'First text body',
    }
  ])

  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => setPosts(json));
  }, [])

  console.log(posts)

  return (
    

    <Router>
      <Switch>
      <div className="App">
        <NavBar/> 
        <Route path="/" exact>
          <BlogList posts = {posts}/>
        </Route>
        <Route path="/blog/:id">
          <Blog posts = {posts}/>
        </Route>
      </div>
      </Switch>
    </Router>
    
  );
}

export default App;
