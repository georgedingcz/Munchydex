import React, { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import Auth from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import EatCat from "../EateryCategoryPage/EatCatPage";
import Eatery from "../EateryPage/EateryPage";
import EateryReview from "../EateryReviewPage/EateryReviewPage";
import MyAcct from "../MyAcctPage/MyAcct";
import IndvCat from "../EateryCategoryPage/IndvCatPage";
import IndvEat from "../EateryPage/IndvEatPage";
import IndvReview from "../EateryReviewPage/IndvReviewPage";

export const MunchyContext = createContext();

export default function App() {
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
    <MunchyContext.Provider
      value={{
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
      }}
    >
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authpage" element={<Auth />} />
          <Route path="/eatcat/:id" element={<IndvCat />} />
          <Route path="/eatery/:id" element={<IndvEat />} />
          <Route path="/review/:id" element={<IndvReview />} />
          {user ? (
            <>
              <Route path="/myAcct/" element={<MyAcct />} />
              <>
                {user.isAdmin ? (
                  <>
                    <Route path="/eatcat" element={<EatCat />} />
                  </>
                ) : (
                  <>
                    <Route path="/eatery" element={<Eatery />} />
                    <Route path="/review" element={<EateryReview />} />
                  </>
                )}
              </>
            </>
          ) : (
            <></>
          )}
        </Routes>
      </main>
    </MunchyContext.Provider>
  );
}
