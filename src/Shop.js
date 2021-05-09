import './App.css';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { firestore } from './firebase';

function Shop({location}) {
  const [blogs,setBlogs]=useState([])
  const { id } = useParams();
  const response=firestore.collection(id);
  useEffect(() => {  
    fetchBlogs('notes');
  }, [])
  const fetchBlogs=async(name)=>{
    console.log(name)
    const data=await response.get();
    const posts=data.docs.map(item=>{
      return {id: item.id, ...item.data()}
    })
    setBlogs([...posts])
  }
    return(
      <div>
        <h1>Shop</h1>
        <h2>{id}</h2>
        <div className="App">
          {
            blogs && blogs.map(blog=>{
              return(
                <h3>{blog.note}</h3>
              )
            })
          }
        </div>
      </div>
    )

}

export default Shop;
