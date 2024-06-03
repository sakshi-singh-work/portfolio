import axios from "axios";
import React, { useEffect } from "react";

const Data = () => {
//   async function data() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const data = await response.json();
//     console.log(data);
//   }
 const  data =async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response)
}
  useEffect(()=>{
    data()
  },[])
  return <div></div>;   
};

export default Data;
