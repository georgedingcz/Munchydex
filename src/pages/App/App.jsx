import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import CreateEatCat from "../EateryCategoryPage/CreateEatCatPage";
import UpdateEatCat from "../EateryCategoryPage/UpdateEatCatPage";
import CreateEatery from "../EateryPage/CreateEatery";
import EateryReview from "../EateryReviewPage/EateryReviewPage";

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
  const [newReview, setNewReview] = useState({
    reviewCategoryID: "",
    reviewUserID: "",
    reviewEateryID: "",
    reviewImage: "",
    reviewDesc: "",
    reviewDate: new Date(),
    reviewPrice: 0,
    reviewScore: 0,
  });
  const [existingCategories, setExistingCategories] = useState([]);
  const [existingEateries, setExistingEateries] = useState([]);
  const [existingReviews, setExistingReviews] = useState([]);

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

  useEffect(() => {
    const fetchEateries = async () => {
      try {
        const response = await fetch("/eateries", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setExistingEateries(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchEateries();
    // console.log(existingEateries[0])
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
                  existingEateries={existingEateries}
                  setExistingEateries={setExistingEateries}
                />
              }
            />
            <Route
              path="/createreview"
              element={
                <EateryReview
                  existingCategories={existingCategories}
                  user={user}
                  newReview={newReview}
                  setNewReview={setNewReview}
                  existingReviews={existingReviews}
                  setExistingReviews={setExistingReviews}
                  existingEateries={existingEateries}
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
