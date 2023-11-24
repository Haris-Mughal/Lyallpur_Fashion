// import React, { useState, useEffect } from "react";
// import { HttpRequest } from "../../config/http";
// import ProductCard from "../../shared/ProductCard";

// const HomeProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await HttpRequest.getAllProductsApi();
//         console.log("🚀 ~ file: HomeProducts.js:12 ~ fetchProducts ~ response:", response)
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToBag = (selectedProduct) => {
//     // Implement your logic to add the product to the bag
//     // This can involve managing a shopping cart state, making API calls, etc.
//     console.log(`Added to Bag: ${selectedProduct.name}`);
//   };

//   return (
//     <div>
//       <h2>Product List</h2>
//       <div className="product-list">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} onAddToBag={handleAddToBag} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeProducts;
import React, { useState, useEffect } from "react";
import { HttpRequest } from "../../config/http";
import ProductCard from "../../shared/ProductCard";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await HttpRequest.getAllProductsApi();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToBag = (selectedProduct) => {
    console.log(`Added to Bag: ${selectedProduct.name}`);
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <ProductCard product={product} onAddToBag={handleAddToBag} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
