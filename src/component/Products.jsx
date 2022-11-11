import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";
import { STATUSES } from "../store/ProductSlice";
import Spinner from "./Spinner";

const Products = ({setProgress}) => {
 
  
  const dispatch = useDispatch();
  const {data, status} = useSelector((state) => state.product)
  
  useEffect(() => {

     if (status === STATUSES.LOADING){
      setProgress(30)
     }
   
 dispatch(fetchProducts())
 setProgress(100)
    
     // eslint-disable-next-line
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    

  };

  

  return (
    <>
 

    <div className="container">
      {status === STATUSES.LOADING && <Spinner/>}
      <div className="row" style={{ marginLeft: "20px" }}>
        {status === STATUSES.ERR && <h1 className="text-center my-4">Something went wrong!</h1>}
        {data.map((pro) => {
          return (
            <div className={` ${status === STATUSES.LOADING? "d-none": "d-block"} col-md-4 my-4 px-2`} key={pro.id}>
              <div
                className="card"
                style={{
                  height: "400px",
                  boxShadow: "0.2rem 0.3rem 0.4rem black",
                }}
              >
                <span
                  className="position-absolute start-86 translate-middle badge rounded-pill bg-danger"
                  style={{ left: "78%", zIndex: "1" }}
                >
                  {pro.category}
                </span>
                <img
                  src={pro.image}
                  title={pro.image}
                  className="card-img-top "
                  style={{
                    height: "200px",
                    width: "200px",
                    textAlign: "center",
                    margin: "auto",
                  }}
                  alt="..."
                />
                    <span
                  className="position-absolute top-10 start-50 translate-middle bg-success badge rounded-pill"
                  style={{ left: "78%", zIndex: "1", top:"122px", fontSize: "20px" }}
                >
                {pro.price > 100? "Get upto 15% off": "Get upto 5% off" }
                </span>
                <div className="card-body text-center px-2">
                  <h5 className="card-title">{pro.title}</h5>
                  <p className="card-text" title={` ${pro.price > 100 ? "get 15% off " + "$" + Math.floor(pro.price - pro.price*0.15)  : "get 5% off " + "$" + Math.floor(pro.price - pro.price*0.05)}`}>Price : ${pro.price}</p>
                  <button
                    onClick={() => {
                      handleAdd(pro);
                    }}
                    className="btn btn-primary"
                   title="Cart"
                  >
                    Add to cart <ShoppingCartOutlinedIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Products;
