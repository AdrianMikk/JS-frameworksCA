import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h2>Our Products</h2>
      <ul className="product-ul">
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img src={product.image.url} alt={product.title} />
                <p className="original-price">£{product.price}</p>
                <span className="discounted-price">£{product.discountedPrice}</span>
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
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;






