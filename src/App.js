import BlogList from './BlogList';
import Blog from './Blog';
import NavBar from './NavBar';
import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css/";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => setPosts(json));
    setIsLoading(false);
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

      {isLoading && <div>Loading...</div>}
      </Switch>
    </Router>
    
  );
}

export default App;
