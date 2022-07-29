import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  selectUserEmail,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { Link,useNavigate } from "react-router-dom";


export default function Menu() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  // const userEmail = useSelector(selectUserEmail);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/login");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [username]);

  return (
    <div
      className="d-flex justify-content-around position-absolute left-0 top-0 right-0 w-100"
      style={{ backgroundColor: "#0D0D0D", height: "12vh" }}
    >
      {username ? (
        <>
          <div
            style={{ width: "10%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={require("../images/logo.svg").default} width="70px" />
          </div>

          <div
            className="d-flex justify-content-evenly align-items-center"
            style={{ width: "70%" }}
          >
            <div className="menuItem">
              <Link to='/home' className="d-flex align-items-center">
                <img
                  src={require("../images/home-icon.svg").default}
                  width="20px"
                  height="20px"
                />
                <span style={{ letterSpacing: "2px" }}>HOME</span>
              </Link>
            </div>
            <div className="menuItem">
              <a href="#" className="d-flex align-items-center">
                <img
                  src={require("../images/search-icon.svg").default}
                  width="20px"
                  height="20px"
                />
                <span style={{ letterSpacing: "2px"}}>SEARCH</span>
              </a>
            </div>
            <div className="menuItem">
              <a href="#" className="d-flex align-items-center">
                <img
                  src={require("../images/watchlist-icon.svg").default}
                  width="20px"
                  height="20px"
                />
                <span style={{ letterSpacing: "2px" }}>WATCHLIST</span>
              </a>
            </div>
            <div className="menuItem">
              <a href="#" className="d-flex align-items-center">
                <img
                  src={require("../images/original-icon.svg").default}
                  width="20px"
                  height="20px"
                />
                <span style={{ letterSpacing: "2px" }}>ORIGINALS</span>
              </a>
            </div>
            <div className="menuItem">
              <a href="#" className="d-flex align-items-center">
                <img
                  src={require("../images/movie-icon.svg").default}
                  width="20px"
                  height="20px"
                />
                <span style={{ letterSpacing: "2px" }}>MOVIES</span>
              </a>
            </div>
            <div className="menuItem">
              <a href="#" className="d-flex align-items-center">
                <img
                  src={require("../images/series-icon.svg").default}
                  width="20px"
                  height="20px"
                />
                <span style={{ letterSpacing: "2px" }}>SERIES</span>
              </a>
            </div>
          </div>

          <div style={{ width: "20%" }} className="profile pt-3">
            <img
              src={userPhoto}
              alt=""
              width="45px"
              height="45px"
              className="rounded-circle me-2"
            />
            <div
              className="btn btn-dark signout"
              onClick={handleAuth}
              style={{ letterSpacing: "2px" }}
            >
              Sign Out
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-between w-100 px-5">
          <img src={require("../images/logo.svg").default} width="70px" />
          <div
            type="button"
            className="btn btn-outline-light login my-3 font-weight-bold"
            onClick={handleAuth}
            style={{ letterSpacing: "2px" }}
          >
            Login
          </div>
        </div>
      )}
    </div>
  );
}
