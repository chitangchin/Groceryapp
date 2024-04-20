import { Inter } from "next/font/google";
import "./globals.css";
import { RecipesProvider } from "./Context/recipeContextProvider";
import { IngredientsProvider } from "./Context/ingredientsContext";
import { UsernameProvider } from "./Context/userContext"
import { LoggedInProvider } from "./Context/loggedInContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grocery App",
  description: "Grocery Management tool with built-in Recipe integration and macro counter",
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <LoggedInProvider>
        <UsernameProvider>
        <IngredientsProvider>
        <RecipesProvider>
          {children}
          </RecipesProvider>
        </IngredientsProvider>
        </UsernameProvider>
        </LoggedInProvider>
          </body>
    </html>
  )
}
