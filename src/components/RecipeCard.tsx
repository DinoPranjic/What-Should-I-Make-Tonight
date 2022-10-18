import React from 'react';
import { Recipe } from '../App'
import { Wrapper } from './RecipeCard.styles';

const RecipeCard: React.FC<Recipe> = ({name, image, origin, category, source, youtube, instructions, ingredients, measurements}) => {
  const formattedImage = `${image}/preview`
  const formattedSource = new URL(`${source}`);

  return(
    <Wrapper>
      <h2>{name}</h2>
      <img src={formattedImage}></img>
      <p>Country of Origin: {origin}</p>
      <p>Category: {category}</p>
      <p>Original Source: <a href={source} target='blank'>{formattedSource.hostname}</a></p>
      <a href={youtube} target='blank'>Watch on YoutTube</a>
      <p>{instructions}</p>
      <ul>
      {ingredients.map((item, i) => (
        <li key={item}>{measurements[i]} {item}</li>
      ))}
      </ul>
    </Wrapper>
  )
}

export default RecipeCard;