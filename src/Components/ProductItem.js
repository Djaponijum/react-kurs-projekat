import React, { useContext, useState } from 'react';
import ProductContext from './ProductContext';


import classes from '../Components/ProductItem.module.css'
import { Link } from 'react-router-dom';



const ProductItem = ({ product }) => {

  const { id, title, price, description, images } = product;
  const { deleteProduct, editProduct } = useContext(ProductContext);
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ title, price, description });

  const handleEdit = () => {
    setEditMode(true);
    setEditedProduct({ title, price, description });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    editProduct(id, editedProduct);
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteProduct(id);
  };



  return (
    <div className={classes['product-item']}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={images && images[0]} alt={title} />
      <p>Price: <span>{price} $</span></p>
      <div className={classes.button}>
      <Link to={`/product/${id}`}>
              <button>View Details</button>
            </Link>
            {!editMode ? (
          <button onClick={handleEdit}>Edit Product</button>
        ) : (
          <>
            <input
              type="text"
              name="title"
              value={editedProduct.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </>
        )}
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;