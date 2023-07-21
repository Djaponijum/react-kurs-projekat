import React, { useState, useContext, Fragment } from "react";
import { Link } from 'react-router-dom';
import ProductItem from "./ProductItem";
import ProductContext from "./ProductContext";
import classes from "../Components/ProductList.module.css";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [counter, setCounter] = useState(9);

  const loadMoreHandler = () => {
    setCounter(counter + 9);
  };

  return (
    <Fragment>
      <div>
        <div className={classes.title}>
          <h1>Featured Products</h1>
        </div>
        <Link   to="/add-product">
        <button  id='butt1'>Add Product</button>
      </Link>
        <div className={classes.items}>
          {products.slice(0, counter).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <div className={classes['button-load']}>
          {products.length > counter && (
            <button onClick={loadMoreHandler}>Load More</button>
          )}
        </div>
        ;
      </div>
    </Fragment>
  );
};

export default ProductList;
