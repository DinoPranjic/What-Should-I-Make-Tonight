import React, { useState, ChangeEvent} from 'react';
import { findRandomRecipe } from './API';
import RecipeCard from './components/RecipeCard';
import { GlobalStyle, Wrapper, CategoryWrapper } from './App.styles';
import { Recipe } from './constants';

function App() {
  const categories = [
    {value: 'Breakfast', text: 'Breakfast 🍳'},
    {value: 'Seafood', text: 'Seafood 🐟'},
    {value: 'Beef', text: 'Beef 🥩'},
    {value: 'Chicken', text: 'Chicken 🐔'},
    {value: 'Dessert', text: 'Dessert 🧁'},
    {value: 'Lamb', text: 'Lamb 🍖'},
    {value: 'Pasta', text: 'Pasta 🍝'},
    {value: 'Pork', text: 'Pork 🐷'},
    {value: 'Side', text: 'Side 🍟'},
    {value: 'Starter', text: 'Starter 🧆'},
    {value: 'Vegan', text: 'Vegan 🌿'},
    {value: 'Vegetarian', text: 'Vegetarian 🥗'}
  ];

  const [ recipe, setRecipe ] = useState<Recipe[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [chosenCategory, setChosenCategory] = useState(categories[0].value);

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setChosenCategory(e.currentTarget.value);
  }


  const getRecipe = async (category: string) => {
    setLoading(true);
    setRecipe([]);

    const newRecipe = await findRandomRecipe(category);

    setRecipe(newRecipe);
    setLoading(false);

  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>What Should I Eat Tonight?</h1>
        <CategoryWrapper>
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
        {!loading ? <button className='new-recipe' onClick={() => {getRecipe(chosenCategory)}}>Feed me!</button> : null}
        {loading ? <button className='new-recipe'>Loading...</button>: null}
        </CategoryWrapper>
        {!loading && recipe.length !== 0 ? (
          <RecipeCard 
            name={recipe[0].name}
            image={recipe[0].image}
            origin={recipe[0].origin}
            category={recipe[0].category}
            source={recipe[0].source}
            youtube={recipe[0].youtube}
            instructions={recipe[0].instructions}
            ingredients={recipe[0].ingredients}
            measurements={recipe[0].measurements}
            />
        ): null}
      </Wrapper>
    </>
  );
}

export default App;
