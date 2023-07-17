import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import CreateEatCat from "../EateryCategoryPage/CreateEatCatPage";
import UpdateEatCat from "../EateryCategoryPage/UpdateEatCatPage";
import CreateEatery from "../EateryPage/CreateEatery";

function App() {
  const [user, setUser] = useState(getUser());
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
    categoryImage: "",
    categoryDesc: "",
  });
  const [newEatery, setNewEatery] = useState({
    eateryCategory: "",
    eateryName: "",
    eateryLocation: "",
    eateryImage: "",
    eateryReviewStatus: "",
  });
  const [existingCategories, setExistingCategories] = useState([]);
  const [existingEateries, setExistingEateries] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setExistingCategories(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  

  return (
    <main className="App">
      <NavBar setUser={setUser} user={user} />

      <Routes>
        <Route
          path="/homepage"
          element={
            <HomePage
              existingCategories={existingCategories}
              setExistingCategories={setExistingCategories}
            />
          }
        />
        <Route path="/authpage" element={<AuthPage setUser={setUser} />} />

        {user ? (
          <>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route
              path="/createeatcat"
              element={
                <CreateEatCat
                  newCategory={newCategory}
                  setNewCategory={setNewCategory}
                  existingCategories={existingCategories}
                  setExistingCategories={setExistingCategories}
                />
              }
            />
            <Route
              path="/updateeatcat"
              element={
                <UpdateEatCat
                  newCategory={newCategory}
                  setNewCategory={setNewCategory}
                  existingCategories={existingCategories}
                  setExistingCategories={setExistingCategories}
                />
              }
            />
            <Route
              path="/createeatery"
              element={
                <CreateEatery
                  existingCategories={existingCategories}
                  newEatery={newEatery}
                  setNewEatery={setNewEatery}
                />
              }
            />
          </>
        ) : (
          <></>
        )}
      </Routes>
    </main>
  );
}

export default App;
