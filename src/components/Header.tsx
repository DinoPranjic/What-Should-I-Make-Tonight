import { Categories, categories } from "../constants";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { CategoryWrapper } from "../App.styles";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  div {
    display: flex;
    justify-content: center;
  }
`;

interface IHeader {
  getRecipe: (category: Categories) => void;
  loading: boolean;
}

const Header = ({ getRecipe, loading }: IHeader) => {
  const [chosenCategory, setChosenCategory] = useState(categories[0].value);

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setChosenCategory(e.currentTarget.value as Categories);
  }

  return (
      <CategoryWrapper>
        <HeaderContainer>
        <h1>What Should I Eat Tonight?</h1>
        <div>
        <select value={chosenCategory} onChange={(e) => {handleSelection(e)}}>
            <option disabled={true} value=''>
              Select a Category
            </option>
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.text}
              </option>
            ))}
          </select>
        {!loading ? <button className='new-recipe' onClick={() => { getRecipe(chosenCategory) }}>Feed me!</button> : null}
        {loading ? <button className='new-recipe'>Loading...</button>: null}
        </div>
        </HeaderContainer>
      </CategoryWrapper>
  )
}

export default Header;