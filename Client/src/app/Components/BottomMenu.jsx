import React from 'react';
import Link from 'next/link';
import styles from './BottomMenu.module.css'; // Make sure to import your CSS module

const BottomMenu = ({ isOpen, onClose }) => {
  console.log("its working");

  return (
    <>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.links}>
          {/* Use Link component from Next.js to navigate */}
            
          
         
          <Link href="/link1">
           <button type="button">Start Next Plan</button><hr></hr>
          </Link>
          <Link href="/link2">
          <button type="button">Add Items to plan</button><hr></hr>
          </Link>
          <Link href="/link3">
           <button type="button">Edit Plan details</button><hr></hr>
            </Link>
         
          <Link href="/link4">
           <button type="button">Switch to Category Layout</button>
          </Link>
          <Link href="/link5">
           <button type="button">Delete All Items</button><hr></hr>
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default BottomMenu;