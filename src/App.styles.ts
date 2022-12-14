import styled, { createGlobalStyle } from "styled-components";
import backgroundImg from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    background-image: url(${backgroundImg});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .new-recipe {
    cursor: pointer;
    background: #89D389;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 16px;
    font-weight: 900;
  }

  select {
    height: 40px;
    margin-right: 20px;
    font-size: 16px;
    color: #fff;
    background-color: #89D389;
    border-radius: 10px;
    border: 2px solid #fff;
    opacity: 0.9;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: black;

  }

  h1 {
    background-image: linear-gradient(180deg, #fff, #89D389);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }


`