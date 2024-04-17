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
  
  export async function getServerSideProps({ params }) {
    const { slug } = params;
  
    // Fetch data for the specific post using slug
    const response = findRecipe(slug.split("-").pop());
    const recipe = response.json();
  
    return {
      props: { recipe },
    };
  }

*/

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

export default function Recipe_Page() {
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