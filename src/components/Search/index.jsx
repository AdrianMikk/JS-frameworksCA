import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchFunction() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [setItemClicked] = useState(false);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => {
        if (!response.ok) {
          throw new Error("");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        console.error("There was a problem fetching data:", error);
      });
  }, []);

  const handleClick = () => {
    setItemClicked(true);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(value);
  };

  const filterProducts = (value) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
    setItemClicked(false); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      {searchTerm && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`} onClick={handleClick}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFunction;




