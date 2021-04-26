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
    data.docs.forEach(item=>{
      setBlogs([...blogs,item.data()])
    })
  }
  
  return (
    <div className="App">
      {
        blogs && blogs.map(blog=>{
          return(
            <ul key={blog.note}>
                <li>{blog.note}</li>
            </ul>
          )
        })
      }
    </div>
  );
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
