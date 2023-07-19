import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import EatCat from "../EateryCategoryPage/EatCatPage";
import UpdateEatCat from "../../yetToRemove/UpdateEatCatPage";
import CreateEatery from "../EateryPage/CreateEateryPage";
import EateryReview from "../EateryReviewPage/EateryReviewPage";
import UpdateEatery from "../EateryPage/UpdateEateryPage";

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
        {user ? (
          <>
            {user.isAdmin ? (
              <>
                <Route
                  path="/eatcat"
                  element={
                    <EatCat
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
                  path="/updateeatery"
                  element={
                    <UpdateEatery
                      existingCategories={existingCategories}
                      newEatery={newEatery}
                      setNewEatery={setNewEatery}
                      existingEateries={existingEateries}
                      setExistingEateries={setExistingEateries}
                    />
                  }
                />
              </>
            ) : (
              <>
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
            )}
          </>
        ) : (
          <Route path="/authpage" element={<AuthPage setUser={setUser} />} />
        )}
      </Routes>
    </main>
  );
}

export default App;

// {/* <Route
//   path="/updateeatcat"
//   element={
//     <UpdateEatCat
//       newCategory={newCategory}
//       setNewCategory={setNewCategory}
//       existingCategories={existingCategories}
//       setExistingCategories={setExistingCategories}
//     />
//   }
// /> */}
