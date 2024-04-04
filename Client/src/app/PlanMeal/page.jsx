"use client"
import React, { useState } from "react";
import BottomMenu from '../Components/BottomMenu';
import ToggleAddMeal from "../Components/ToggleAddMeal";

export default function PlanMeal() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddMealMenuOpen, setIsAddMealMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsAddMealMenuOpen(false); // Close add meal menu when opening main menu
    };

    const toggleAddMeals = () => {
        setIsAddMealMenuOpen(!isAddMealMenuOpen);
        setIsMenuOpen(false); // Close main menu when opening add meal menu
    };

    console.log("Hello, start planning your meals");

    return (
        <>
            <h1>Plan your meals</h1>
            <div>
                <button type="button" onClick={toggleMenu}>Menu</button>
                {isMenuOpen && <BottomMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
            </div>
            <div>
                <button type="button" onClick={toggleAddMeals}>Add meals to your plan</button>
                {isAddMealMenuOpen && <ToggleAddMeal isOpen={isAddMealMenuOpen} onClose={toggleAddMeals} />}
            </div>
        </>
    );
}