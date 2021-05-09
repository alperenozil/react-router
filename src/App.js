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
  const { id } = useParams();
  useEffect(() => {
    fetchBlogs();
  }, [])
  const fetchBlogs=async()=>{
    const response=firestore.collection('notes').doc({id});
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
        <Route path="/:id" component={Shop}>
        </Route>
      </Switch>
    </Router>

    /* <div className="App">
      {
        blogs && blogs.map(blog=>{
          return(
            <h3>{blog.note}</h3>
          )
        })
      }
    </div> */

  );
}
export default App;
