"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecipeCards = (data) => {

  const [invalidImg, setInvalidImg] = useState(false);

  const Recipe_Path = () => {
    const formattedTitle = data.data.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    const path_result = `${formattedTitle}-${data.data.id}`;
    return path_result;
  }

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

        
        
        <Link href={`dashboard/recipes/${encodeURIComponent(Recipe_Path())}`}>

          <h1>{data.data.title}</h1>
          <h2>{Recipe_Path()}</h2>
        </Link>

        <Link
            href={{
              pathname: 'dashboard/recipes/' + Recipe_Path()
            }}
          >
        <h1>{data.data.title}</h1>
        <p>asfd</p>
          <h2>{Recipe_Path()}</h2>
        </Link>
      
      


        <h2>Missing Ingredients</h2>
        <MissingIngredients />
        <h2>Ingredients You own</h2>
        <UsedIngredients /></>}
    </div>
  )
}

export default RecipeCards