import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import { firestore } from './firebase';
function App() {
  const [blogs,setBlogs]=useState([])
  useEffect(() => {
    fetchBlogs();
  }, [])
  const fetchBlogs=async()=>{
    const response=firestore.collection('notes');
    const data=await response.get();
    const posts=data.docs.map(item=>{
      return {id: item.id, ...item.data()}
    })
    setBlogs([...posts])
  }
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <BlogPost />
        </Route>
      </Switch>
    </Router>
    
    // <div className="App">
    //   {
    //     blogs && blogs.map(blog=>{
    //       return(
    //         <ul key={blog.note}>
    //             <li>{blog.note}</li>
    //         </ul>
    //       )
    //     })
    //   }
    // </div>
  );
}

function BlogPost() {
  let { id } = useParams();
  if (id.length<10) return <div>Now showing less than 10 {id}</div>;
  if (id.length>10) return <div>Now showing bigger than 10 {id}</div>;
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}



export default App;
