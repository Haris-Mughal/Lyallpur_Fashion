//import React, { useState } from "react";
// import Select from "react-select";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import styled from "styled-components";
// import { Slider, InputNumber } from "antd";
// const CustomSelect = styled(Select)`
//   width: 100%;
//   color: black;
//   background-color: white !important;
//   border-radius: 5px;
// `;

// const customStyles = {
//   placeholder: (provided) => ({
//     ...provided,
//   }),
//   indicatorSeparator: (provided) => ({
//     ...provided,
//   }),
//   valueContainer: (provided) => ({
//     ...provided,
//   }),
//   singleValue: (provided) => ({
//     ...provided,
//   }),
//   control: (provided) => ({
//     ...provided,
//     borderColor: "black", // Set border color to black
//     boxShadow: "0 0 0 0.5px #808080",
//     "&:hover": {
//       borderColor: "black", // Set border color to black on hover
//       boxShadow: "none",
//     },
//     "&:focus": {
//       borderColor: "black", // Set border color to black on focus
//       boxShadow: "none",
//     },
//     "&:hover:focus": {
//       borderColor: "black", // Set border color to black on hover and focus
//       boxShadow: "none",
//     },
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? "#FFD249" : "white",
//     color: "black",
//     "&:hover": {
//       backgroundColor: "#FFF1B4",
//     },
//   }),
// };

// const Filtering = ({
//   onFilterChange,
//   min,
//   setMin,
//   max,
//   setMax,
//   setIsFilterApplied,
//   setCancelFilter,
//   availableColors,
//   setAvailableColors,
//   selectedColor,
//   selectedFabric,
//   setSelectedFabric,
//   selectedPieces,
//   setSelectedPieces,
//   selectedGender,
//   setSelectedGender,
//   selectedSize,
//   setSelectedSize,
//   setSelectedColor,
//   selectedFilters,
//   setSelectedFilters,
// }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//     onFilterChange([min, max]);
//   };
//   console.log("availableColors console value", availableColors);
//   const options = [
//     { value: "featured", label: "Featured" },
//     { value: "best-selling", label: "Best Selling" },
//     { value: "az", label: "Alphabetically, A-Z" },
//     { value: "za", label: "Alphabetically, Z-A" },
//     { value: "low-to-high", label: "Price, low to high" },
//     { value: "high-to-low", label: "Price, high to low" },
//     { value: "old-to-new", label: "Date, old to new" },
//     { value: "new-to-old", label: "Date, new to old" },
//   ];
//   const onChange = (value) => {
//     if (value[0] < value[1]) {
//       setMin(value[0]);
//       setMax(value[1]);
//     }
//   };
//   const applyPriceFilter = () => {
//     setIsFilterApplied(true);
//     onFilterChange([min, max]);
//     setSidebarOpen(!isSidebarOpen);
//     setCancelFilter(true);
//     setSelectedFilters(["price", ...selectedFilters]);
//   };
//   const handleColorClick = (color) => {
//     setSelectedColor(color);
//     setCancelFilter(true);
//     setIsFilterApplied(true);
//     setSidebarOpen(!isSidebarOpen);
//     setSelectedFilters(["color", ...selectedFilters]);
//   };

//   return (
//     <>
//       <div className={`d-flex align-items-center justify-content-between px-3`}>
//         <div
//           className="filter"
//           onClick={toggleSidebar}
//           style={{ cursor: "pointer" }}
//         >
//           <FontAwesomeIcon icon={faFilter} />
//           Filter
//         </div>

//         {/* Bootstrap Modal */}
//         <div
//           className={`modal fade ${isSidebarOpen ? "show" : ""}`}
//           style={{
//             display: isSidebarOpen ? "block" : "none",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             className="modal-dialog modal-full-height modal-dialog-scrollable"
//             style={{
//               width: "20vw",
//               height: "100vh",
//               marginLeft: "0",
//               marginTop: 0,
//             }}
//           >
//             <div
//               className="modal-content"
//               style={{ border: "none", borderRadius: 0 }}
//             >
//               <div className="modal-header bg-dark" style={{ borderRadius: 0 }}>
//                 <h2 className="modal-title text-white">FILTER</h2>
//                 <button
//                   type="button"
//                   className="btn-close close-button"
//                   onClick={toggleSidebar}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <h3 className="d-inline-block border-bottom border-dark border-2">
//                   Price
//                 </h3>
//                 <Slider
//                   className="slider-main-div"
//                   min={0}
//                   max={28990}
//                   onChange={onChange}
//                   range={true}
//                   defaultValue={[min, max]}
//                   value={[min, max]}
//                 />
//                 <p>
//                   Price: Rs.{min} — Rs.{max}
//                 </p>

//                 <div className="mb-3">
//                   <button
//                     type="button"
//                     className="border-dark border-2 py-2 px-4"
//                     style={{
//                       backgroundColor: "transparent",
//                       transition: "background-color 0.3s ease",
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.backgroundColor = "black";
//                       e.target.style.color = "white";
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.backgroundColor = "transparent";
//                       e.target.style.color = "black";
//                     }}
//                     onClick={applyPriceFilter}
//                   >
//                     Filter
//                   </button>
//                 </div>
//                 <h3 className="d-inline-block border-bottom border-dark border-2">
//                   Color
//                 </h3>
//                 <div className="color-options">
//                   {availableColors.map((color) => (
//                     <div
//                       key={color}
//                       className={`color-option ${
//                         selectedColor === color ? "selected" : ""
//                       }`}
//                       style={{
//                         backgroundColor: color,
//                         marginTop: "5px",
//                         marginBottom: "5px",
//                         position: "relative",
//                       }}
//                       onClick={() => handleColorClick(color)}
//                     >
//                       {selectedColor === color && <div className="tick"></div>}
//                     </div>
//                   ))}
//                 </div>

//                 <h3>Fabric</h3>
//                 {/* Add fabric options here */}

//                 {/* Add more filter categories as needed */}

//                 <h3>Type</h3>
//                 {/* Add type options here */}

//                 <h3>Gender</h3>
//                 {/* Add gender options here */}

//                 <h3>Size</h3>
//                 {/* Add size options here */}
//                 <h3>Size</h3>
//                 {/* Add size options here */}
//                 <h3>Size</h3>
//                 {/* Add size options here */}
//                 <h3>Size</h3>
//                 {/* Add size options here */}
//                 <h3>Size</h3>
//                 {/* Add size options here */}
//                 <h3>Size</h3>
//               </div>
//               <div
//                 className="modal-footer"
//                 style={{ borderTop: "1px solid #C1C1C1" }}
//               >
//                 <button type="button" className="btn btn-secondary">
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="select-container mb-3">
//           <CustomSelect options={options} styles={customStyles} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Filtering;
import React from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Slider } from "antd";
import { useCart } from "../contexts/CartContext";
const CustomSelect = styled(Select)`
  width: 100%;
  color: black;
  background-color: white !important;
  border-radius: 5px;
`;

const customStyles = {
  placeholder: (provided) => ({
    ...provided,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
  }),
  valueContainer: (provided) => ({
    ...provided,
  }),
  singleValue: (provided) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    borderColor: "black", // Set border color to black
    boxShadow: "0 0 0 0.5px #808080",
    "&:hover": {
      borderColor: "black", // Set border color to black on hover
      boxShadow: "none",
    },
    "&:focus": {
      borderColor: "black", // Set border color to black on focus
      boxShadow: "none",
    },
    "&:hover:focus": {
      borderColor: "black", // Set border color to black on hover and focus
      boxShadow: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#FFD249" : "white",
    color: "black",
    "&:hover": {
      backgroundColor: "#FFF1B4",
    },
  }),
};

const Filtering = () => {
  const {
    min,
    max,
    isSidebarOpen,
    selectedColor,
    availableColors,
    handleFilterChange,
    handleCancelFilter,
    handleAddToBag,
    onChange,
    applyPriceFilter,
    handleColorClick,
    setSelectedColor,
    toggleSidebar,
    selectedFilters,
  } = useCart();
  const options = [
    { value: "featured", label: "Featured" },
    { value: "best-selling", label: "Best Selling" },
    { value: "az", label: "Alphabetically, A-Z" },
    { value: "za", label: "Alphabetically, Z-A" },
    { value: "low-to-high", label: "Price, low to high" },
    { value: "high-to-low", label: "Price, high to low" },
    { value: "old-to-new", label: "Date, old to new" },
    { value: "new-to-old", label: "Date, new to old" },
  ];
  return (
    <>
      <div className={`d-flex align-items-center justify-content-between px-3`}>
        <div
          className="filter"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faFilter} />
          Filter
        </div>

        {/* Bootstrap Modal */}
        <div
          className={`modal fade ${isSidebarOpen ? "show" : ""}`}
          style={{
            display: isSidebarOpen ? "block" : "none",
            overflow: "hidden",
          }}
        >
          <div
            className="modal-dialog modal-full-height modal-dialog-scrollable"
            style={{
              width: "20vw",
              height: "100vh",
              marginLeft: "0",
              marginTop: 0,
            }}
          >
            <div
              className="modal-content"
              style={{ border: "none", borderRadius: 0 }}
            >
              <div className="modal-header bg-dark" style={{ borderRadius: 0 }}>
                <h2 className="modal-title text-white">FILTER</h2>
                <button
                  type="button"
                  className="btn-close close-button"
                  onClick={toggleSidebar}
                ></button>
              </div>
              <div className="modal-body">
                <h3 className="d-inline-block border-bottom border-dark border-2">
                  Price
                </h3>
                <Slider
                  className="slider-main-div"
                  min={0}
                  max={28990}
                  onChange={onChange}
                  range={true}
                  defaultValue={[min, max]}
                  value={[min, max]}
                />
                <p>
                  Price: Rs.{min} — Rs.{max}
                </p>
                <div className="mb-3">
                  <button
                    type="button"
                    className="border-dark border-2 py-2 px-4"
                    style={{
                      backgroundColor: "transparent",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "black";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "black";
                    }}
                    onClick={applyPriceFilter}
                  >
                    Filter
                  </button>
                </div>
                <h3 className="d-inline-block border-bottom border-dark border-2">
                  Color
                </h3>
                <div className="color-options">
                  {availableColors.map((color) => (
                    <div
                      key={color}
                      className={`color-option ${
                        selectedColor === color ? "selected" : ""
                      }`}
                      style={{
                        backgroundColor: color,
                        marginTop: "5px",
                        marginBottom: "5px",
                        position: "relative",
                      }}
                      onClick={() => handleColorClick(color)}
                    >
                      {selectedColor === color && <div className="tick"></div>}
                    </div>
                  ))}
                </div>
                <h3>Fabric Type</h3>
                {/* Add more filter categories as needed */}
                <h3>Gender</h3>
                {/* Add gender options here */}
                <h3>Size</h3>
                {/* Add size options here */}
                <h3>Size</h3>
                {/* Add size options here */}
                <h3>Size</h3>
                {/* Add size options here */}
                <h3>Size</h3>
                {/* Add size options here */}
                <h3>Size</h3>
                {/* Add size options here */}
                <h3>Size</h3>
              </div>
              <div
                className="modal-footer"
                style={{ borderTop: "1px solid #C1C1C1" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="select-container mb-3">
          <CustomSelect options={options} styles={customStyles} />
        </div>
      </div>
    </>
  );
};

export default Filtering;
