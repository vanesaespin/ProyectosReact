import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Posts = ()=> {
  const [posts, setPosts]=useState ([]);

  const {userId} = useParams();
  useEffect(() => {
    fetchDatos();
  }, []);

  const fetchDatos = async () => {
    try{
      const url = `https://jsonplaceholder.typicode.com/posts/${userId}/comments`;
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      console.log(JSON.stringify(json));
      setPosts(json);
    }
    catch (error){
      console.log("error: "+error);
    } 
  }

  return (
    <ul>
      {posts.map(({name,email,body},i) =>
        <li id = {`post${i}`} key = {name}> 
            <h2>{name}</h2>
            <h4>{email}</h4>
            <p>{body}</p>
           
        </li>
)}
    </ul>
  )
}

export default Posts;