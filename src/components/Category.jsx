import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiBowlOfRice } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <List>
      <Slink to={"/cuisin/Indian"}>
        <GiBowlOfRice />
        <h4>Indian</h4>
      </Slink>
      <Slink to={"/cuisin/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisin/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisin/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisin/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  @media (max-width: 400px) {
    margin: 1rem 0rem;
  }
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);
  @media (max-width: 400px) {
    width: 4rem;
    height: 4rem;
    transform: scale(0.8);
    margin-right: 1rem;
  }
  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 4px;
    @media (max-width: 400px) {
      font-size: 0.5rem;
      margin-top: 8px;
    }
  }
  svg {
    color: white;
    font-size: 2rem;
    margin-top: 10px;
    @media (max-width: 400px) {
      font-size: 1.2rem;
      margin-top: 8px;
    }
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
export default Category;
