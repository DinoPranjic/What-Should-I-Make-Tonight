import React, { useEffect } from 'react';
import { Recipe } from '../constants';
import { RecipeWrapper, LeftWrapper, RightWrapper, InstructionsWrapper, RecipeHeader, RecipeButton } from './RecipeCard.styles';

const RecipeCard: React.FC<Recipe> = ({name, image, origin, category, source, youtube, instructions, ingredients, measurements}) => {
  const formattedImage = `${image}/preview`
  const formattedSource = (source && new URL(`${source}`)) || null;

  const formattedInstructions = instructions.match(/(.*?(?:\.|\?|!))(?: |$)/g);

  useEffect(() => {
    document.getElementById('recipe')?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return(
    <RecipeWrapper id='recipe'>
      <LeftWrapper>
        <h3>You should make...</h3>
        <img src={formattedImage} alt=''></img>
        <RecipeHeader>{name}</RecipeHeader>
        <p>Country of Origin: {origin}</p>
        <p>Category: {category}</p>
        {formattedSource && <RecipeButton><a href={source} target='blank'>{formattedSource?.hostname}</a></RecipeButton>}
        <RecipeButton>
        <a href={youtube} target='blank'>Watch on YouTube</a>
        </RecipeButton>
        </ LeftWrapper>
        <RightWrapper>
          <RecipeHeader>Ingredients</RecipeHeader>
        <ul>
        {ingredients.map((item, i) => (
          <li key={`${item}-${i}`}>{measurements[i]} {item}</li>
        ))}
        </ul>
        <RecipeHeader>How to make:</RecipeHeader>
        <InstructionsWrapper>
        <ol type='1'>
          {formattedInstructions?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        </InstructionsWrapper>
        </RightWrapper>
    </ RecipeWrapper>
  )
}

export default RecipeCard;