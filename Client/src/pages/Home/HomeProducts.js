// import React from "react";
// import ProductCard from "../../shared/ProductCard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";

// const HomeProducts = ({
//   filteredProducts,
//   min,
//   setMin,
//   max,
//   setMax,
//   cancelFilter,
//   setCancelFilter,
//   selectedColor,
//   setSelectedColor,
//   selectedFilters,
//   setSelectedFilters,
// }) => {
//   const resetPriceValues = () => {
//     setMin(0);
//     setMax(28990);
//   };

//   const handleAddToBag = (selectedProduct) => {
//     console.log(`Added to Bag: ${selectedProduct.name}`);
//   };

//   const handleCancelFilter = (filter) => {
//     setSelectedColor(null);
//     setSelectedFilters((prevFilters) =>
//       prevFilters.filter((f) => f !== filter)
//     );
//     if (filter === "price") {
//       resetPriceValues();
//     }
//   };

//   const handleClearAllFilters = () => {
//     resetPriceValues();
//     setCancelFilter(false);
//     setSelectedColor(null);
//     setSelectedFilters([]);
//   };

//   return (
//     <div>
//       {selectedFilters.length !== 0 && cancelFilter && (
//         <div className="filter-summary px-3">
//           <span>{filteredProducts.length} Products Found</span>
//           <span className="filter-line"></span>

//           {selectedFilters.includes("price") && (
//             <span>
//               <span
//                 className="filter-range"
//                 onMouseOver={() => setCancelFilter("price")}
//                 onMouseOut={() => setCancelFilter(true)}
//               >
//                 {cancelFilter === "price" ? (
//                   <FontAwesomeIcon
//                     icon={faTimes}
//                     onClick={() => handleCancelFilter("price")}
//                   />
//                 ) : (
//                   <FontAwesomeIcon
//                     icon={faMinus}
//                     onClick={() => handleCancelFilter("price")}
//                   />
//                 )}
//               </span>
//               <span className="mx-2">{`Rs.${min.toFixed(2)} - Rs.${max.toFixed(
//                 2
//               )}`}</span>
//             </span>
//           )}

//           {selectedFilters.includes("color") && selectedColor && (
//             <span>
//               <span
//                 className="filter-range"
//                 onMouseOver={() => setCancelFilter("color")}
//                 onMouseOut={() => setCancelFilter(true)}
//               >
//                 {cancelFilter === "color" ? (
//                   <FontAwesomeIcon
//                     icon={faTimes}
//                     onClick={() => handleCancelFilter("color")}
//                   />
//                 ) : (
//                   <FontAwesomeIcon
//                     icon={faMinus}
//                     onClick={() => handleCancelFilter("color")}
//                   />
//                 )}
//               </span>
//               <span className="mx-2">{`Color: ${selectedColor}`}</span>
//             </span>
//           )}

//           {selectedFilters.length > 1 && (
//             <button
//               type="button"
//               className="btn btn-dark p-1"
//               onClick={handleClearAllFilters}
//             >
//               Clear All
//             </button>
//           )}
//         </div>
//       )}
//       <div className="row">
//         {filteredProducts.map((product) => (
//           <div key={product._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//             <ProductCard product={product} onAddToBag={handleAddToBag} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeProducts;
import React from "react";
import ProductCard from "../../shared/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../contexts/CartContext";

const HomeProducts = () => {
  const {
    state,
    dispatch,
    handleAddToBag,
    handleCancelFilter,
    setMin,
    setMax,
    selectedColor,
    setSelectedColor,
    filteredProducts,
    min,
    max,
    selectedFilters,
    cancelFilter,
    setCancelFilter,
    resetPriceValues,
  } = useCart();
  console.log(
    "🚀 ~ file: HomeProducts.js:147 ~ HomeProducts ~ filteredProducts:",
    filteredProducts
  );

  const handleClearAllFilters = () => {
    resetPriceValues();
    dispatch({
      type: "SET_FILTER_VALUES",
      payload: {
        isFilterApplied: false,
        cancelFilter: false,
        selectedFilters: [],
      },
    });
    setSelectedColor(null);
  };

  return (
    <div>
      {selectedFilters.length !== 0 && cancelFilter && (
        <div className="filter-summary px-3">
          <span>{filteredProducts.length} Products Found</span>
          <span className="filter-line"></span>

          {selectedFilters.includes("price") && (
            <span>
              <span
                className="filter-range"
                onMouseOver={() => setCancelFilter("price")}
                onMouseOut={() => setCancelFilter(true)}
              >
                {cancelFilter === "price" ? (
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => handleCancelFilter("price")}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={() => handleCancelFilter("price")}
                  />
                )}
              </span>
              <span className="mx-2">{`Rs.${min.toFixed(2)} - Rs.${max.toFixed(
                2
              )}`}</span>
            </span>
          )}

          {selectedFilters.includes("color") && selectedColor && (
            <span>
              <span
                className="filter-range"
                onMouseOver={() => setCancelFilter("color")}
                onMouseOut={() => setCancelFilter(true)}
              >
                {cancelFilter === "color" ? (
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => handleCancelFilter("color")}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={() => handleCancelFilter("color")}
                  />
                )}
              </span>
              <span className="mx-2">{`Color: ${selectedColor}`}</span>
            </span>
          )}

          {selectedFilters.length > 1 && (
            <button
              type="button"
              className="btn btn-dark p-1"
              onClick={handleClearAllFilters}
            >
              Clear All
            </button>
          )}
        </div>
      )}
      <div className="row">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <ProductCard
                product={product}
                onAddToBag={() => handleAddToBag(product)}
              />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
