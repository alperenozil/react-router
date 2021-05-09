import './App.css';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
function Shop() {
  const { id } = useParams();
    return(
      <div>
        <h1>Shop</h1>
        <h2>{id}</h2>
      </div>
    )

}

export default Shop;
