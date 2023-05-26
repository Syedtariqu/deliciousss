import React, { useEffect, useState } from "react";
import {Link,useParams} from 'react-router-dom'
import styled from "styled-components";
import {motion} from 'framer-motion'
function Searched() {
     const [searchRecipe,setSearchRecipe] = useState([]);
     let params = useParams();
     const getSearch =async(name)=>{

          const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
            );
          const data = await api.json();
          // console.log(data);
          setSearchRecipe(data.results)
       }
       useEffect(() => {
          getSearch(params.search);
        }, [params.search]);
  return (
     <Grid
        animate={{opacity:1}}
   initial={{opacity:0}}
   exit={{opacity:0}}
   transition={{duration:0.5}}>
     {searchRecipe.map((item)=>{
       return(
         <Card key={item.id}>
         <Link to={'/recipe/'+item.id}>
         <img src={item.image} alt={item.title} />
         <h4>{item.title}</h4>
         </Link>
         </Card>
       )
     })}
    </Grid>
  )
}
const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
grid-gap: 3rem;
`
const Card = styled.div`
img{
     width: 100%;
     border-radius: 2rem;
}
a{
     text-decoration: none;
}
h4{
     text-align: center;
     padding: 1rem;
}
`
export default Searched