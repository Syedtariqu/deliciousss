import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import {Link} from 'react-router-dom'
import India from "../pages/India";
function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {

    const check = localStorage.getItem('popular');
    if(check){
      setPopular(JSON.parse(check));
    } else{
      // const api = await fetch(
      //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=Indian`
      //   );
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=Chinese`
        );
      const data = await api.json();

      localStorage.setItem('popular',JSON.stringify(data.results))
      setPopular(data.results);
    
    }

  };
  return (
    <Wrapper>
    {/* <India/> */}
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
       
            767: {
              perPage: 2,
              gap: "0.8rem",
            },
          },
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {popular.map((recipe,index) => {
          return (
            <>
              <SplideSlide key={recipe.id}>
                <Card >
                <Link to={'/recipe/'+recipe.id}>
                  <p >{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            </>
          );
        })}
      </Splide>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 2rem 0rem;
`;
const Card = styled.div`
  min-height: 18rem;
  border-radius: 2rem;
  overflow: hidden;
  @media (max-width: 400px) {
    min-height: 15rem;
}
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 400px) {
      font-weight: 500;
    font-size: 0.8rem;
}
  }
`;
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
export default Popular;
