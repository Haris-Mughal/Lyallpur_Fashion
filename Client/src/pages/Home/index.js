// import Carousel from "./Carousel";
// import React, { useEffect, useState } from "react";
// import Categories from "./Categories";
// import Filtering from "../../shared/Filtering";
// import HomeProducts from "./HomeProducts";
// import { HttpRequest } from "../../config/http";

// function Index() {
//   const [products, setProducts] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 28990]);
//   const [isFilterApplied, setIsFilterApplied] = useState(false);
//   const [cancelFilter, setCancelFilter] = useState(true);
//   const [min, setMin] = useState(0);
//   const [max, setMax] = useState(28990);
//   const [selectedColor, setSelectedColor] = useState([]);
//   const [selectedFabric, setSelectedFabric] = useState(null);
//   const [selectedPieces, setSelectedPieces] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [availableColors, setAvailableColors] = useState([]);
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const handleFilterChange = (newPriceRange, filterType, filterValue) => {
//     setPriceRange(newPriceRange);
//     setMin(newPriceRange[0]);
//     setMax(newPriceRange[1]);
//     setIsFilterApplied(true);
//     if (filterType !== undefined && filterValue !== undefined) {
//       setSelectedFilters((prevFilters) => [
//         ...prevFilters,
//         { type: filterType, value: filterValue },
//       ]);
//     }
//   };
//   const handleCancelFilter = () => {
//     setIsFilterApplied(false);
//     setCancelFilter(false);
//     setSelectedFilters([]);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await HttpRequest.getAllProductsApi({
//           priceRange: [min, max],
//           color: selectedColor,
//           fabric: selectedFabric,
//           gender: selectedGender,
//           size: selectedSize,
//         });
//         const uniqueColors = [
//           ...new Set(response.data.map((product) => product.color)),
//         ];
//         setAvailableColors(uniqueColors);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);
//   // Filter products based on the maxPrice
//   // const filteredProducts = products.filter(product => product.price <= max);
// const filteredProducts = products.filter((product) => {
//   // Check if the product satisfies all selected filters
//   return (
//     product.price >= min &&
//     product.price <= max &&
//     (selectedColor ? product.color === selectedColor : true) &&
//     (selectedFabric ? product.fabric === selectedFabric : true) &&
//     // (selectedType ? product.type === selectedType : true) &&
//     (selectedGender ? product.gender === selectedGender : true) &&
//     (selectedSize ? product.size === selectedSize : true)
//     // Add more filters...
//   );
// });

//   return (
//     <main>
//       <Carousel />
//       <Categories />
//       <Filtering
//         priceRange={priceRange}
//         onFilterChange={handleFilterChange}
//         handleCancelFilter={handleCancelFilter}
//         setIsFilterApplied={setIsFilterApplied}
//         min={min}
//         setMin={setMin}
//         max={max}
//         setMax={setMax}
//         onCancelFilter={handleCancelFilter}
//         cancelFilter={cancelFilter}
//         setCancelFilter={setCancelFilter}
//         availableColors={availableColors}
//         setAvailableColors={setAvailableColors}
//         selectedColor={selectedColor}
//         setSelectedColor={setSelectedColor}
//         selectedFabric={selectedFabric}
//         setSelectedFabric={setSelectedFabric}
//         selectedPieces={selectedPieces}
//         setSelectedPieces={setSelectedPieces}
//         selectedGender={selectedGender}
//         setSelectedGender={setSelectedGender}
//         selectedSize={selectedSize}
//         setSelectedSize={setSelectedSize}
//         selectedFilters={selectedFilters}
//         setSelectedFilters={setSelectedFilters}
//       />
//       <HomeProducts
//         filteredProducts={filteredProducts}
//         onFilterChange={handleFilterChange}
//         isFilterApplied={isFilterApplied}
//         setIsFilterApplied={setIsFilterApplied}
//         min={min}
//         setMin={setMin}
//         max={max}
//         setMax={setMax}
//         onCancelFilter={handleCancelFilter}
//         cancelFilter={cancelFilter}
//         setCancelFilter={setCancelFilter}
//         availableColors={availableColors}
//         setAvailableColors={setAvailableColors}
//         selectedColor={selectedColor}
//         selectedFabric={selectedFabric}
//         setSelectedFabric={setSelectedFabric}
//         selectedPieces={selectedPieces}
//         setSelectedPieces={setSelectedPieces}
//         selectedGender={selectedGender}
//         setSelectedGender={setSelectedGender}
//         selectedSize={selectedSize}
//         setSelectedSize={setSelectedSize}
//         setSelectedColor={setSelectedColor}
//         selectedFilters={selectedFilters}
//         setSelectedFilters={setSelectedFilters}
//       />
//     </main>
//   );
// }

// export default Index;

// Index.js

// Index.js

import React from "react";
import { useCart } from "../../contexts/CartContext";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Filtering from "../../shared/Filtering";
import HomeProducts from "./HomeProducts";

function Index() {
  const { state, dispatch } = useCart();

  return (
    <main>
      <Carousel />
      <Categories />
      <Filtering />
      <HomeProducts />
    </main>
  );
}

export default Index;
