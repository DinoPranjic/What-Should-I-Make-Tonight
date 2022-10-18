import React, { useState } from 'react';
import { fetchRecipe } from './API';
import RecipeCard from './components/RecipeCard';
import { GlobalStyle, Wrapper } from './App.styles';

export type Recipe = {
  name: string;
  image: string;
  origin: string;
  category: string;
  source: string;
  youtube: string;
  instructions: string;
  ingredients: string[];
  measurements: string[];
}

function App() {
  const [ recipe, setRecipe ] = useState<Recipe[]>([])
  const [ loading, setLoading ] = useState(false);

  const getRecipe = async () => {
    setLoading(true);
    setRecipe([]);

    const newRecipe = await fetchRecipe();

    setRecipe(newRecipe);
    setLoading(false);

  }
  console.log(recipe);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>What Should I Make Tonight?</h1>
        {!loading ? <button className='newRecipe' onClick={getRecipe}>New Recipe</button> : null}
        {loading ? <p>Finding a recipe...</p>: null}
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
