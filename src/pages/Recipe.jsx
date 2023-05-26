import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [active,setActive] = useState('Instraction')
  const fetchData = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, [params.name]);
  return (
     <DetailsWrapper>
          <div>
               <h2>{details.title}</h2>
               <img src={details.image} alt="" srcset="" />
          </div>
          <Info>
          <div>
               <Button className={active === "Instraction" ? "active" : ""} onClick={()=>setActive("Instraction")}>Instraction</Button>
               <Button className={active === "Ingredient" ? "active" : ""} onClick={()=>setActive("Ingredient")}>Ingredient</Button>
               </div>
              {active=== "Instraction" &&
              (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h2 dangerouslySetInnerHTML={{__html: details.instraction}}></h2>
               </div>
)}
              {active=== "Ingredient" &&
              (
             <ul>
              {details.extendedIngredients.map((ingredient)=>{
                return(
                <li key={ingredient.id}>{ingredient.original}</li>
                )
              })}
             </ul>
)}
             
          </Info>
     </DetailsWrapper>
  );
}
const DetailsWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  div{
    display: flex;
    flex-direction: column;
    ${'' /* justify-content: center; */}
align-items: center;
  }
  img{
    margin-right: 1rem;
    ${'' /* width: 100% */}
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.div`
   padding: 1rem 2rem;
   color: #313131;
   background: white;
   border: 2px solid black;
   margin-right: 2rem;
   font-weight: 700;
   cursor: pointer;
`;
const Info = styled.div`
margin-left : 2rem;
div{
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
}
h3{
    font-size : 1rem;
    line-height: 1.5rem;
    margin-top : 2rem
  }
h2{
    ${'' /* font-size : 3rem; */}
    ${'' /* line-height: 2rem; */}
  }
`
export default Recipe;
