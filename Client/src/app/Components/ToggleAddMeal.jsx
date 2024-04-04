import React from 'react';
import Link from 'next/link';
import styles from './BottomMenu.module.css'; // Make sure to import your CSS module
 import { useRouter } from "next/navigation";

const ToggleAddMeal = ({ isOpen, onClose }) => {
    console.log("its working");
   



    const router = useRouter();


    function recipes() {
        console.log("recipes");
     
       
        router.push('/Recipes');
    }

  return (
    <>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.links}>
          {/* Use Link component from Next.js to navigate */}
            
          
         
          <Link href="/link1">
           <button type="button">Template Plans</button><hr></hr>
          </Link>
         
          <button type="button" onClick={recipes}>Recipes</button><hr></hr>
         
          <Link href="/link3">
           <button type="button">Products</button><hr></hr>
            </Link>
         
          <Link href="/link4">
           <button type="button">Note</button>
                  </Link>
                  <hr></hr>
          <Link href="/link5">
           <button type="button">Course</button><hr></hr>
          </Link>
          
          
        </div>
      </div>
    </>
  );
};

export default ToggleAddMeal;