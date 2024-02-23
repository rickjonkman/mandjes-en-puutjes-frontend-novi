
import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/general-pages/LandingPage.jsx";
import LoginPage from "./pages/general-pages/LoginPage.jsx";
import RegisterPage from "./pages/general-pages/RegisterPage.jsx";
import DashboardPage from "./pages/personal-pages/DashboardPage.jsx";
import ProfilePage from "./pages/personal-pages/ProfilePage.jsx";
import GroceriesMain from "./pages/groceries-pages/GroceriesMain.jsx";
import GroceriesShoppingMode from "./pages/groceries-pages/GroceriesShoppingMode.jsx";
import GroceriesLists from "./pages/groceries-pages/GroceriesLists.jsx";
import RecipesAll from "./pages/recipes-pages/RecipesAll.jsx";
import RecipePage from "./pages/recipes-pages/RecipePage.jsx";
import RecipeSurprise from "./pages/recipes-pages/RecipeSurprise.jsx";

function RecipesMain() {
  return null;
}

function App() {


  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/general/login" element={<LoginPage />} />
        <Route path="/general/register" element={<RegisterPage />} />

        <Route path="/personal/dashboard" element={<DashboardPage />} />
        <Route path="/personal/profile" element={<ProfilePage />} />

        <Route path="/groceries/main" elegit ment={<GroceriesMain />} />
        <Route path="/groceries/shopping-mode" element={<GroceriesShoppingMode />} />
        <Route path="/groceries/lists" element={<GroceriesLists />} />

        <Route path="/recipes/main" element={<RecipesMain />} />
        <Route path="/recipes/all" element={<RecipesAll />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="/recipes/surprise" element={<RecipeSurprise />} />
      </Routes>
    </>
  )
}

export default App
