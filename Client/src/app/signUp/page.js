import React from 'react';
import Link from 'next/link';

const SignUp = () => {
  return (
    //Global Div
    <div>
      {/*Sign Up and Login Div*/}
      <div>
        Sign up Test
        {/*Sign Up Div*/}
        <div>
          {/* Add input fields for signing up */}
          user name
          <input>
          </input>
          Password
          <input>
          </input>
          {/* if post request successful then link to ingredient page */}
          <button>
            submit
            </button>
            {/* here is link: */}
            <Link href="/dashboard/ingredients">Ingredients</Link>
        </div>
        {/*End Sign Up and Login Div*/}
      </div>
    </div>
    //^ Global Div End
  )
}

export default SignUp