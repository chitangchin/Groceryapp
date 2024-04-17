"use clinet";

import { useRouter } from 'next/router';

import Image from 'next/image';

import { findRecipe } from '@/app/utils/helper';

/*
const Post = ({ post }) => {
    const router = useRouter();
  
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  };
  
*/

export async function getServerSideProps({ params }) {
  console.log("in props");
  const { recipe } = params;
  
  // Fetch data for the specific post using slug
  const response = findRecipe(recipe.split("-").pop());
  const recipe_data = response.json();

  return {
    props: {
      recipe_data
    },
  };
}



/*
export default function Recipe_Page({ recipe }) {
    console.log("ASDfas");

    const router = useRouter(); 

    const { reciape } = router.query;

    console.log(reciape);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
          <h1>{recipe.title}</h1>
        </div>
    )
}
*/

export default function Recipe_Page({ recipe_data }) {

  console.log("ASDfas");

  /*

  const router = useRouter(); 

  const { reciape } = router.query;

  console.log(reciape);
  */

  if (router.isFallback) {
      return <div>Loading...</div>;
  }

  return (
      <div>
        <h1>{recipe_data.title}</h1>
      </div>
  )
}