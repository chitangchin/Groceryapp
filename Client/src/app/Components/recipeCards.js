"use client";
import { useState } from 'react';
import Image from 'next/image'

const RecipeCards = (data) => {

  const [invalidImg, setInvalidImg] = useState(false);

  const MissingIngredients = () => {
    return data.data.missedIngredients.map((item, i) => <li key={item.id}>{item.name}</li>)
  }

  const UsedIngredients = () => {
    return data.data.usedIngredients.map((item, i) => <li key={item.id}>{item.name}</li>)
  }

  return (
    <div>
      <Image
        src={data.data.image}
        alt="recipeImage"
        width={0}
        height={0}
        style={{ width: '0', height: '0' }}
        onError={() => {
          setInvalidImg(true);
        }}
      />
      {invalidImg ? <></> : <><Image
        src={data.data.image}
        alt="recipeImage"
        width={100}
        height={100}
        style={{ width: 'auto', height: 'auto' }}
      />
        <h1>
          {data.data.title}
        </h1>
        <h2>Missing Ingredients</h2>
        <MissingIngredients />
        <h2>Ingredients You own</h2>
        <UsedIngredients /></>}
    </div>
  )
}

export default RecipeCards