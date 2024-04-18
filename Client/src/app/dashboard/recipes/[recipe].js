import { useRouter } from 'next/router';

import { findRecipe } from '@/app/utils/helper';


export async function getServerSideProps({ params }) {
  const { recipe } = params;

  // Fetch data for the specific recipe using ID
  const response = await findRecipe(recipe.split("-").pop());
  const recipe_data = await response.json();

  return {
    props: {
      recipe_data
    },
  };
}

export default function Recipe_Page({ recipe_data }) {
  const router = useRouter();
  const { recipe } = router.query;

  if (router.isFallback || !recipe_data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe_data.title}</h1>
      {/* Render other recipe details */}
    </div>
  )
}