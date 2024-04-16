import React from 'react'
import { GiHotMeal } from "react-icons/gi";
export const CreateAccount = () => {
  return (
    <div className='text-black p-4 ml-2 opacity-90'>
      <div className="flex flex-col space-y-6 ">
        <h1 className='text-3xl font-bold mx-6'>Create Account</h1>
        <p class="flex items-center ">
            <span className='inline mr-3'><GiHotMeal /></span>
            Save ingredients for easy shopping
        </p>
        <p class="flex items-center">
            <span className='inline mr-3'><GiHotMeal /></span>
            Schedule recipes to your calendar
        </p>
        <p class="flex items-center">
            <span className='inline mr-3'><GiHotMeal /></span>
            Create weekly meal plans and shopping lists based on your saved recipes
        </p>
        <p class="flex items-center">
            <span className='inline mr-3'><GiHotMeal /></span>
            Manage your recipes based on ingredients
        </p>
        <p class="flex items-center">
            <span className='inline mr-3'><GiHotMeal /></span>
            Invite your friends to join your plan
        </p>
      </div>
    </div>
  )
}