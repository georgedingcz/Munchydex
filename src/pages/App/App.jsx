import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import Auth from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import EatCat from "../EateryCategoryPage/EatCatPage";
import Eatery from "../EateryPage/EateryPage";
import EateryReview from "../EateryReviewPage/EateryReviewPage";
import EditPass from "../EditPassPage/EditPassPage";
import IndvCat from "../EateryCategoryPage/IndvCatPage";
import IndvEat from "../EateryPage/IndvEatPage";
import IndvReview from "../EateryReviewPage/IndvReviewPage";

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${day} ${months[monthIndex]} ${year}`;
  };

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
    handleChange,
    formatDate,
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
        } else {
          console.log("Failed to get categories");
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
        const response = await fetch(`/eateries/category/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setExistingEateries(data);
        } else {
          console.log("Failed to get eateries for one category");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOneCatEateries();
  }, [forEateryFetch]);

  return (
    <main className="App">
      <NavBar {...reusedProps} />
      <Routes>
        <Route path="/" element={<HomePage {...reusedProps} />} />
        <Route path="/authpage" element={<Auth {...reusedProps} />} />
        <Route path="/eatcat/:id" element={<IndvCat {...reusedProps} />} />
        <Route path="/eatery/:id" element={<IndvEat {...reusedProps} />} />
        <Route path="/review/:id" element={<IndvReview {...reusedProps} />} />
        {user ? (
          <>
            {/* <Route path="/editpass" element={<EditPass {...reusedProps} />} /> */}
            <>
              {user.isAdmin ? (
                <>
                  <Route path="/eatcat" element={<EatCat {...reusedProps} />} />
                </>
              ) : (
                <>
                  <Route path="/eatery" element={<Eatery {...reusedProps} />} />
                  <Route
                    path="/review"
                    element={<EateryReview {...reusedProps} />}
                  />
                </>
              )}
            </>
          </>
        ) : (
          <></>
        )}
      </Routes>
    </main>
  );
}

export default App;
