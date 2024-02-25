
import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/general-pages/LandingPage.jsx";
import LoginPage from "./pages/general-pages/LoginPage.jsx";
import RegisterPage from "./pages/general-pages/RegisterPage.jsx";
import DashboardPage from "./pages/personal-pages/DashboardPage.jsx";
import ProfilePage from "./pages/personal-pages/ProfilePage.jsx";
import GroceriesMain from "./pages/groceries-pages/GroceriesMain.jsx";
import GroceriesShoppingMode from "./pages/groceries-pages/GroceriesShoppingMode.jsx";
import GroceriesListsPage from "./pages/groceries-pages/GroceriesListsPage.jsx";
import RecipesAll from "./pages/recipes-pages/RecipesAll.jsx";
import RecipePage from "./pages/recipes-pages/RecipePage.jsx";
import RecipesMain from "./pages/recipes-pages/RecipesMain.jsx";
import RecipeNew from "./pages/recipes-pages/RecipeNew.jsx";


function App() {


  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/general/login" element={<LoginPage />} />
        <Route path="/general/register" element={<RegisterPage />} />

        <Route path="/personal/dashboard" element={<DashboardPage />} />
        <Route path="/personal/profile" element={<ProfilePage />} />

        <Route path="/groceries/main" element={<GroceriesMain />} />
        <Route path="/groceries/shopping-mode" element={<GroceriesShoppingMode />} />
        <Route path="/groceries/lists" element={<GroceriesListsPage />} />

        <Route path="/recipes/main" element={<RecipesMain />} />
        <Route path="/recipes/all" element={<RecipesAll />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="/recipes/new" element={<RecipeNew />} />
      </Routes>
    </>
  )
}

export default App
