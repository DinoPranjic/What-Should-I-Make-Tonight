import React from 'react';
import { Recipe } from '../App'
import { RecipeWrapper, LeftWrapper, RightWrapper, InstructionsWrapper } from './RecipeCard.styles';

const RecipeCard: React.FC<Recipe> = ({name, image, origin, category, source, youtube, instructions, ingredients, measurements}) => {
  const formattedImage = `${image}/preview`
  const formattedSource = source && new URL(`${source}`) || null;

  const formattedInstructions = instructions.match(/(.*?(?:\.|\?|!))(?: |$)/g);

  return(
    <RecipeWrapper>
      <LeftWrapper>
        <h3>You should make...</h3>
        <img src={formattedImage}></img>
        <h2>{name}</h2>
        <p>Country of Origin: {origin}</p>
        <p>Category: {category}</p>
        {formattedSource && <p><button><a href={source} target='blank'>{formattedSource?.hostname}</a></button></p>}
        <button className='youtube'>
        <a href={youtube} target='blank'>Watch on YouTube</a>
        </button>
        </ LeftWrapper>
        <RightWrapper>
          <h2>Ingredients</h2>
        <ul>
        {ingredients.map((item, i) => (
          <li key={`${item}-${i}`}>{measurements[i]} {item}</li>
        ))}
        </ul>
        <h2>How to make:</h2>
        <InstructionsWrapper>
        <ul>
          {formattedInstructions?.map((step, i) => (
            <li key={i}>{i + 1}. {step}</li>
          ))}
        </ul>
        </InstructionsWrapper>
        </RightWrapper>
    </ RecipeWrapper>
  )
}

export default RecipeCard;