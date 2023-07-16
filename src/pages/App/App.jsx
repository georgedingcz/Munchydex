import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import EateryCategoryPage from "../EateryCategoryPage/EateryCategoryPage";

function App() {
  const [user, setUser] = useState(getUser());
  const [category, setCategory] = useState({
    categoryName: "",
    categoryImage: "",
    categoryDesc: "",
  });

  return (
    <main className="App">
      <NavBar setUser={setUser} user={user} />
      {user ? (
        <>
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/eatcat" element={<EateryCategoryPage category={category} setCategory={setCategory}/>}/>
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/authpage" element={<AuthPage setUser={setUser} />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
