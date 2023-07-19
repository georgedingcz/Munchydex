import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import EatCat from "../EateryCategoryPage/EatCatPage";
import Eatery from "../EateryPage/EateryPage";
import EateryReview from "../EateryReviewPage/EateryReviewPage";

function App() {
  const [user, setUser] = useState(getUser());
  const [newCategory, setNewCategory] = useState({
    categoryName: "",
    categoryImage: "",
    categoryDesc: "",
    categoryID: ""
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

  const [forCategoryFetch, setForCategoryFetch] = useState(false)
  const [forEateryFetch, setForEateryFetch] = useState(false)

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
  }, [forCategoryFetch]);

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
                      setForCategoryFetch={setForCategoryFetch}
                      forCategoryFetch={forCategoryFetch}
                    />
                  }
                />
                <Route
                  path="/eatery"
                  element={
                    <Eatery
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

// {/* <Route
//   path="/updateeatery"
//   element={
//     <UpdateEatery
//       existingCategories={existingCategories}
//       newEatery={newEatery}
//       setNewEatery={setNewEatery}
//       existingEateries={existingEateries}
//       setExistingEateries={setExistingEateries}
//     />
//   }
// /> */}