import React, { useState } from 'react';
import { findRandomRecipe } from './API';
import RecipeCard from './components/RecipeCard';
import Header from './components/Header';
import { GlobalStyle, Wrapper } from './App.styles';
import { Recipe, Categories } from './constants';

function App() {
  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  const getRecipe = async (category: Categories) => {
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
        <Header getRecipe={getRecipe} loading={loading} />
        {!loading && recipe.length ? (
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
