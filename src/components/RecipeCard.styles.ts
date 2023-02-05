import styled from "styled-components";

export const RecipeWrapper = styled.div `
  display: flex;
  justify-content: center;
  max-width: 1100px;
  background: #fff;
  opacity: 0.95;
  border-radius: 10px;
  border: 2px solid #89D389;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-bottom: 10px;
`;

export const LeftWrapper = styled.div`
  flex: 0.4;
  text-align: center;

  p {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }

  img {
    border: 1px solid #89D389;
    border-radius: 2px;
  }


    button {
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
    font-family: 'Roboto', sans-serif;

    :hover {
      background: #7bbe7b;
    }
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }

 h2 {
    color: #89D389;
    font-family: 'Roboto', sans-serif;
  }

`;

export const RightWrapper = styled.div`
  flex: 0.6;

  p {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }

  ul {
        list-style-type: none;
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
      }

  h2 {
    color: #89D389;
    font-family: 'Roboto', sans-serif;
  }

`;

export const InstructionsWrapper = styled.div`
  text-align: start;

  li {
    font-family: 'Roboto', sans-serif;
    line-height: 125%;
    padding-bottom: 5px;
  }

`