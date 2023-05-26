import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {Link,useParams} from 'react-router-dom'
function India() {
     // const [cuisine,setCuisine] = useState([]);
     // let params = useParams();
     const getCuisin =async(name)=>{
   
   
       const api = await fetch(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=Chinese`
         );
       const data = await api.json();
       console.log(data);

       
 
   }
     useEffect(() => {
       getCuisin();
     }, []);
  return (
    <div>India</div>
  )
}

export default India