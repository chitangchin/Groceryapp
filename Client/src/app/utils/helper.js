import { testRecipe } from "../dummyData";

export function findRecipe(value) {
    return testRecipe.find(element => element['id'] === parseInt(value,10));
}