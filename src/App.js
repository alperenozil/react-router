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
  let id = useParams();
  useEffect(() => {
    fetchBlogs();
  }, [])
  const fetchBlogs=async()=>{
    const response=firestore.collection('notes/'+id);
    const data=await response.get();
    const posts=data.docs.map(item=>{
      return {id: item.id, ...item.data()}
    })
    setBlogs([...posts])
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

export default App;
