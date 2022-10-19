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
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }

 h2 {
    color: #89D389;
  }

`;

export const RightWrapper = styled.div`
  flex: 0.6;

  p {
    font-size: 1rem;
  }

  ul,li { list-style-type: none;
        list-style-position:inside;
        margin:0;
        padding:0; 
      }

  h2 {
    color: #89D389;
  }

`;

export const InstructionsWrapper = styled.div`
  text-align: start;

`