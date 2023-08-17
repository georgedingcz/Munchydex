import React, { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import Auth from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import EatCat from "../EateryCategoryPages/EatCatPage";
import Eatery from "../EateryPages/EateryPage";
import EateryReview from "../EateryReviewPages/EateryReviewPage";
import MyAcct from "../MyAcctPage/MyAcct";
import IndvCat from "../EateryCategoryPages/IndvCatPage";
import IndvEat from "../EateryPages/IndvEatPage";
import IndvReview from "../EateryReviewPages/IndvReviewPage";

export const MunchyContext = createContext();

export default function App() {
  const [user, setUser] = useState(getUser());

  const [existingCategories, setExistingCategories] = useState([]);
  const [existingEateries, setExistingEateries] = useState([]);
  const [existingReviews, setExistingReviews] = useState([]);

  const [forCategoryFetch, setForCategoryFetch] = useState(false);
  const [forEateryFetch, setForEateryFetch] = useState(false);
  const [forReviewFetch, setForReviewFetch] = useState(false);
  const [filteredReviewsByCat, setFilteredReviewsByCat] = useState([]);
  const [filteredReviewsByEatery, setFilteredReviewsByEatery] = useState([]);

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

  const handleEatCatSelect = async (evt) => {
    await setNewMegaState({
      ...newMegaState,
      categoryID: evt.target.value,
    });
    setForEateryFetch(!forEateryFetch);
  };

  const handleEatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenEat = existingEateries.find(
      (chosenEatery) => chosenEatery._id === evt.target.value
    );
    setNewMegaState({
      eateryName: chosenEat.name,
      eateryLocation: chosenEat.location,
      eateryImage: chosenEat.image,
      eateryID: chosenEat._id,
    });
  };

  const handleCatSelect = async (evt) => {
    await setNewMegaState({
      ...newMegaState,
      categoryID: evt.target.value,
    });
    setForEateryFetch(!forEateryFetch);
  };

  useEffect(() => {
    const fetchOneUserReviews = async () => {
      try {
        const id = user._id;
        const response = await fetch(`/reviews/user/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setExistingReviews(data);
        } else {
          console.log("Failed to get reviews for one user");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOneUserReviews();
  }, [forReviewFetch]);

  const handleUserCatSelect = async (evt) => {
    const userChosenCat = existingReviews.find(
      (existingReview) => existingReview.category.name === evt.target.value
    );
    const userChosenCatID = userChosenCat.category._id;
    await setNewMegaState({
      ...newMegaState,
      categoryID: userChosenCatID,
    });
    setFilteredReviewsByCat(
      existingReviews.filter(
        (review) => review.category._id === userChosenCatID
      )
    );
  };

  const handleUserEatSelect = async (evt) => {
    console.log(evt.target.value);
    const userChosenEat = existingReviews.find(
      (chosenEatery) => chosenEatery.name.name === evt.target.value
    );
    const userChosenEateryID = userChosenEat.name._id;
    await setNewMegaState({
      ...newMegaState,
      eateryID: userChosenEateryID,
    });
    setFilteredReviewsByEatery(
      filteredReviewsByCat.filter(
        (review) => review.name._id === userChosenEateryID
      )
    );
  };

  const handleUserTitleSelect = async (evt) => {
    const userChosenReview = existingReviews.find(
      (chosenReview) => chosenReview._id === evt.target.value
    );
    setNewMegaState({
      reviewTitle: userChosenReview.title,
      reviewImage: userChosenReview.image,
      reviewDesc: userChosenReview.desc,
      reviewDate: userChosenReview.date,
      reviewPrice: userChosenReview.price,
      reviewScore: userChosenReview.score,
      reviewID: userChosenReview._id,
    });
  };

  const handleCreateCat = async (evt) => {
    evt.preventDefault();
    const categoryData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
    };
    try {
      const response = await fetch("/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
      if (response.ok) {
        setExistingCategories([...existingCategories, categoryData]);
      } else {
        console.log("Failed to create category");
      }
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryName: "",
      categoryImage: "",
      categoryDesc: "",
    });
  };

  const handleCatDelete = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.categoryID;
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setExistingCategories(
          existingCategories.filter(
            (category) => category._id !== newMegaState.categoryID
          )
        );
      } else {
        console.log("Failed to delete category.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory._id === evt.target.value
    );
    setNewMegaState({
      categoryName: chosenCat.name,
      categoryImage: chosenCat.image,
      categoryDesc: chosenCat.briefDesc,
      categoryID: chosenCat._id,
    });
  };

  const handleUpdateCat = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.categoryID;
    const updatedCatData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
    };
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCatData),
      });
      if (response.ok) {
        setForCategoryFetch(!forCategoryFetch);
      } else {
        console.log("Failed to update category");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        filteredReviewsByCat,
        setFilteredReviewsByCat,
        filteredReviewsByEatery,
        setFilteredReviewsByEatery,

        handleChange,
        handleEatCatSelect,
        handleEatSelect,
        handleCatSelect,
        handleUserCatSelect,
        handleUserEatSelect,
        handleUserTitleSelect,
        handleCreateCat,
        handleCatDelete,
        handleUpdateCatSelect,
        handleUpdateCat,

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
