import './App.css';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { firestore } from './firebase';

function Shop({location}) {
  const [blogs,setBlogs]=useState([])
  const { id } = useParams();
  const response=firestore.collection(id);
  useEffect(() => {  
    fetchBlogs();
  }, [])
  const fetchBlogs=async()=>{
    const data=await response.get();
    const posts=data.docs.map(item=>{
      return {id: item.id, ...item.data()}
    })
    setBlogs([...posts])
  }
    return(
        <div className="margin">
          {
            blogs && blogs.map(blog=>{
              return(
                <div className="App">
                  <h3>{blog.note}</h3>
                  <p>{blog.detail}</p>
                </div>
              )
            })
          }
        </div>
    )

}

export default Shop;
