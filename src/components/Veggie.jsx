import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import {Link} from 'react-router-dom'
function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {

    const check = localStorage.getItem('veggie');
    if(check){
      setVeggie(JSON.parse(check));
    } else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=4&tags=vegetarian,dessert`
      );
      const data = await api.json();

      localStorage.setItem('veggie',JSON.stringify(data.results))
      setVeggie(data.results);
    }

  };
  return (
    <Wrapper>
    <h3>Our Vegetarians Picks</h3>
    <Splide
      options={{
        perPage: 3,
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
      {veggie.map((recipe) => {
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
  )
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 20rem;
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
export default Veggie