import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export const ProductComponent = () => {


  //disptach hook
  const dispatch = useDispatch()

  const products = [
    {
      id: 1,
      name: "iphone",
      price: 23000,
    },
    {
      id: 2,
      name: "laptop",
      price: 34000,
    },
  ];

  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>PRODUCT COMPONENT</h1>
      <div className="container">
        <div className="row">
          <div className="col md-6">
            {products.map((pr) => {
              return (
                <div
                  className="card"
                  style={{ width: "300px", backgroundColor: "greenyellow" }}
                >
                  <h1>Title : {pr.name}</h1>
                  <h4>Price : {pr.price}</h4>
                  <h4>Id : {pr.id}</h4>
                  <button onClick={()=>{dispatch(addToCart(pr))}} className="btn btn-info">ADD TO CART</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
