import { React, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import {useNavigate } from 'react-router-dom'
function Search() {
  const [input, setInput] = useState("");
  const navigation = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
//     console.log(inputt)
    navigation("/Searched/"+input)
  };
  return (
    <>
      <FormStle onChange={submitHandle}>
        <div>
          <FaSearch></FaSearch>
          <input type="text"
           value={input}
           onChange={(e) => setInput(e.target.value)} 
            />
        </div>
      </FormStle>
    </>
  );
}
const FormStle = styled.form`
  margin: 1rem 10rem;
  @media (max-width: 400px) {
    margin: 1rem 1.5rem;
}
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    @media (max-width: 400px) {
font-size: 1rem;
padding: 1rem 2.5rem;
border-radius: 0.8rem;
width: 100%;  
}
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    @media (max-width: 400px) {
      font-size: 1rem;
}
  }
`;
export default Search;
