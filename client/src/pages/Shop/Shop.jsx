import { fetchProduct } from "../../api";
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct()
      .then((res) => {
        console.log(res); // Log the entire response object
        console.log(res.data); // Log the response data
        setProducts(res.data.products); // Access the array of products
      })
      .catch((err) => {
        console.error(err);
        setProducts([]); // or null, depending on how you want to handle errors
      });
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products && products.map((product) => (
          <li key={product._id}>
            <a href={`/products/${product._id}`}>{product.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
