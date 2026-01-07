import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //to get redux state we will use useSelector hook

  const state = useSelector((state) => state);
  console.log("state", state);

  //const state = useSelector((state)=>{return state})

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/shows">
                shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/movies">
                movies
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
                formdemo4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                API DEMO 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                API DEMO 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                API DEMO 3
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/useEffectdemo">
                useEffectdemo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
                products
              </Link>
            </li>
            <li class="nav-item">
              <h4 style={{color:"red"}}>{state.cart.cart?.length}</h4>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
