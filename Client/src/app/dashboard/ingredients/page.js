import React from 'react'
import Link from 'next/link';

const Ingredients = () => {
  return (
    <div>
      <div>
        {/* userFirstTime = True: render this statement */}
        <div>Lets get started by adding ingredients you already have!</div>
        <div>
          Search for ingredients search box
        </div>
        {/* Have drop down functionality */}
      </div>
      <div>
        {/* Have list of ingredients entered */}
        {/* userFirstTime = false: make get request to server and pull all ingredients user has first */}
        Edit Button
      </div>
      <div>
        <div>
          {/* Future feature disregard for now - userFirstTime = True: 3 dots indicating the page stage 1/3  */}
        </div>
        <div>
          post request to backend
          {/* Submit button */}
          <Link href="/dashboard">Submit</Link>
        </div>
        
      </div>



    </div>
  )
}

export default Ingredients