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

  const [existingCategories, setExistingCategories] = useState([]);
  const [existingEateries, setExistingEateries] = useState([]);
  const [existingReviews, setExistingReviews] = useState([]);

  const [forCategoryFetch, setForCategoryFetch] = useState(false);
  const [forEateryFetch, setForEateryFetch] = useState(false);
  const [forReviewFetch, setForReviewFetch] = useState(false);

  const [newMegaState, setNewMegaState] = useState({
    userID: "",
    categoryID: "",
    eateryID: "",
    reviewID: "",

    categoryName: "",
    categoryImage: "",
    categoryDesc: "",

    eateryName: "",
    eateryLocation: "",
    eateryImage: "",
    eateryReviewStatus: "",

    reviewTitle: "",
    reviewImage: "",
    reviewDesc: "",
    reviewDate: new Date(),
    reviewPrice: 0,
    reviewScore: 0,
  });

  const handleChange = (evt) => {
    setNewMegaState({
      ...newMegaState,
      [evt.target.name]: evt.target.value,
    });
  };

  const reusedProps = {
    user,
    setUser,
    existingCategories,
    setExistingCategories,
    existingEateries,
    setExistingEateries,
    existingReviews,
    setExistingReviews,
    forCategoryFetch,
    setForCategoryFetch,
    forEateryFetch,
    setForEateryFetch,
    forReviewFetch,
    setForReviewFetch,
    newMegaState,
    setNewMegaState,

    handleChange
  };

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

  useEffect(() => {
    const fetchOneCatEateries = async () => {
      try {
        const id = newMegaState.categoryID;
        const response = await fetch(`/eateries/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setExistingEateries(data);
        } else {
          console.log("Problem with the response");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOneCatEateries();
  }, [forEateryFetch]);

  return (
    <main className="App">
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/homepage" element={<HomePage {...reusedProps} />} />
        {user ? (
          <>
            {user.isAdmin ? (
              <>
                <Route path="/eatcat" element={<EatCat {...reusedProps} />} />
                <Route path="/eatery" element={<Eatery {...reusedProps} />} />
              </>
            ) : (
              <>
                <Route
                  path="/createreview"
                  element={<EateryReview {...reusedProps} />}
                />
              </>
            )}
          </>
        ) : (
          <Route path="/authpage" element={<AuthPage {...reusedProps} />} />
        )}
      </Routes>
    </main>
  );
}

export default App;
