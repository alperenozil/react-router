import './App.css';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { firestore } from './firebase';

function Shop() {
  const [blogs,setBlogs]=useState([])
  const { noteid } = useParams();
  fetchBlogs(noteid);
  useEffect(() => {  
    
  }, [])
    return(
      <div>
        <h1>Shop</h1>
        <h2>{noteid}</h2>
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
export async function fetchBlogs(name){
  console.log(name)
  const response=firestore.collection(useParams());
  const data=await response.get();
  const posts=data.docs.map(item=>{
    return {id: item.id, ...item.data()}
  })
  setBlogs([...posts])
}

export default Shop;
