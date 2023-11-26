// import React, { createContext, useContext, useReducer } from "react";

// const initialState = {
//   items: [],
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return { items: [...state.items, action.payload] };
//     case "REMOVE_FROM_CART":
//       return {
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case "CLEAR_CART":
//       return { items: [] };
//     default:
//       return state;
//   }
// };

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export { CartProvider, useCart };
// CartContext.js

import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { HttpRequest } from "../config/http";

const initialState = {
  items: [],
  min: 0,
  max: 28990,
  isFilterApplied: false,
  cancelFilter: true,
  selectedColor: null,
  selectedFabric: null,
  selectedPieces: null,
  selectedGender: null,
  selectedPieces: null,
  availableColors: [],
  selectedFilters: [],
  cancelFilter: true,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "SET_FILTER_VALUES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(28990);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedPieces, setSelectedPieces] = useState(null);
  const [availableColors, setAvailableColors] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [cancelFilter, setCancelFilter] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleFilterChange = (newPriceRange, filterType, filterValue) => {
    setMin(newPriceRange[0]);
    setMax(newPriceRange[1]);
    dispatch({
      type: "SET_FILTER_VALUES",
      payload: {
        isFilterApplied: true,
        selectedFilters: [
          ...state.selectedFilters,
          { type: filterType, value: filterValue },
        ],
        priceRange: newPriceRange,
      },
    });
  };
  const resetPriceValues = () => {
    setMin(0);
    setMax(28990);
  };
  const handleCancelFilter = (filter) => {
    setSelectedColor(null);
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((f) => f !== filter)
    );
    if (filter === "price") {
      resetPriceValues();
    }
  };

  const handleAddToBag = (selectedProduct) => {
    console.log(`Added to Bag: ${selectedProduct.name}`);
    // You can dispatch an action to update the shopping cart state here if needed
  };

  const onChange = (value) => {
    if (value[0] < value[1]) {
      setMin(value[0]);
      setMax(value[1]);
    }
  };

  const applyPriceFilter = () => {
    handleFilterChange([min, max]);
    setSidebarOpen(!isSidebarOpen);
    setSelectedFilters(["price", ...selectedFilters]);
  };

  const handleColorClick = (color) => {
    console.log("Color Clicked", color);
    setSelectedColor(color);
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await HttpRequest.getAllProductsApi({
          priceRange: [min, max],
          color: selectedColor,
          fabric: selectedFabric,
          gender: selectedGender,
          size: selectedPieces,
        });

        const uniqueColors = [
          ...new Set(response.data.map((product) => product.color)),
        ];

        setAvailableColors(uniqueColors);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [min, max, selectedColor, selectedFabric, selectedGender, selectedPieces]);

  const filteredProducts = products.filter((product) => {
    return (
      product.price >= min &&
      product.price <= max &&
      (selectedColor ? product.color === selectedColor : true) &&
      (selectedFabric ? product.fabricType === selectedFabric : true) &&
      (selectedGender ? product.gender === selectedGender : true) &&
      (selectedPieces ? product.no_of_pieces === selectedPieces : true)
    );
  });

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        handleFilterChange,
        handleCancelFilter,
        handleAddToBag,
        onChange,
        applyPriceFilter,
        handleColorClick,
        min,
        setMin,
        max,
        setMax,
        selectedColor,
        availableColors,
        setSelectedColor,
        filteredProducts,
        toggleSidebar,
        isSidebarOpen,
        selectedFilters,
        resetPriceValues,
        cancelFilter,
        setCancelFilter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
