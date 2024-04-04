import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navigation/Header/Header";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { useShoppingCartStore } from "../Cart/index";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); 
  const { id } = useParams();
  const addToCart = useShoppingCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setCartItemCount(cartItemCount + 1); 
  };

  // Calculate discount if exists
  const discount = product.discountedPrice
    ? product.price - product.discountedPrice
    : 0;
  const discountPercentage = product.discountedPrice
    ? ((product.price - product.discountedPrice) / product.price) * 100
    : 0;

  return (
    <div className="product-specific">
      <Navbar cartItemCount={cartItemCount} /> 
      <h2 className="product-title">{product.title}</h2>
      <p className="product-details">{product.description}</p>
      <img
        className="specific-image"
        src={product.image.url}
        alt={product.title}
      />
      {product.discountedPrice ? (
        <div>
          <p className="price">
            <span className="original-price">£{product.price}</span>{" "}
            <span className="discounted-price">£{product.discountedPrice}</span>
          </p>
          <p className="discount-info">
            Discount: £{discount} ({discountPercentage.toFixed(2)}%)
          </p>
        </div>
      ) : (
        <p className="price">£{product.price}</p>
      )}
      <div className="star-rating">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              {ratingValue <= product.rating ? (
                <FaStar className="star" />
              ) : (
                <FaRegStar className="star" />
              )}
            </label>
          );
        })}
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {addedToCart && <p>Added to Cart!</p>}
    </div>
  );
}

export default ProductDetails;






