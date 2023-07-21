import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductContext from '../../Components/ProductContext';
import classes from '../UI/ProductDetails.module.css'


const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const productId = parseInt(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div>
        <h2>Product not found!</h2>
        <p>The product with ID {id} does not exist.</p>
        <Link to="/">Back to Feature Product</Link>
      </div>
    );
  }

  const { title, price, description, images } = product;

  return (
    <div className={classes['product-details']}>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <div>
        {images && images.map((image, index) => <img key={index} src={image} alt={`${title}  ${index}`} />)}
      </div>
    </div>
  );
};

export default ProductDetails;