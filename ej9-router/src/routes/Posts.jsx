import React from "react";
import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";

const Posts = (params) =>{
    const [posts, setPosts]=useState ([]);
    let { userId } = useParams();

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

    <>
    <h2>Página de posts del usuario con id: {userId}</h2>
    <ul>
    { posts.map(({name,email,body},i) =>
       <li id = {`post${i}`} key = {name}> 
            <h3>{name}</h3>
            <h5>{email}</h5>
            <p>{body}</p>
       </li>
    )} 
  </ul>
  </>
  );
}
export default Posts;