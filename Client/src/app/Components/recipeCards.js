import React from 'react'
import Image from 'next/image'

const RecipeCards = (data) => {
  // Picture of ingredient
  // name of ingredient
  // Ingredients required - Ingredients on hand
  // Estimated cooking time

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
      <UsedIngredients />
    </div>
  )
}

export default RecipeCards