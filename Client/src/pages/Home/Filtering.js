// import React, { useState } from 'react';
// import Select from 'react-select';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';

// function Filtering() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const options = [
//     { value: 'featured', label: 'Featured' },
//     { value: 'best-selling', label: 'Best Selling' },
//     { value: 'az', label: 'Alphabetically, A-Z' },
//     { value: 'za', label: 'Alphabetically, Z-A' },
//     { value: 'low-to-high', label: 'Price, low to high' },
//     { value: 'high-to-low', label: 'Price, high to low' },
//     { value: 'old-to-new', label: 'Date, old to new' },
//     { value: 'new-to-old', label: 'Date, new to old' },
//   ];

//   return (
//     // <div className='d-flex align-items-center justify-content-between'>
//     <div className={`d-flex align-items-center justify-content-between ${isSidebarOpen ? 'open' : ''}`}>
//       <div className='filter' onClick={toggleSidebar}>
//           <FontAwesomeIcon icon={faFilter} />Filter
//       </div>

//       {isSidebarOpen && (
//         <div className="sidebar">
//           <div className="sidebar-header d-flex justify-content-between">
//             <h2>FILTER</h2>
//             <button onClick={toggleSidebar}>
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           </div>

//           <div className="sidebar-content">
//             <h3>Price</h3>
//             <p>Price: Rs.0.00 — Rs.28,990.00</p>

//             <h3>Color</h3>
//             {/* Add color options here */}

//             <h3>Fabric</h3>
//             {/* Add fabric options here */}

//             {/* Add more filter categories as needed */}

//             <h3>Type</h3>
//             {/* Add type options here */}

//             <h3>Gender</h3>
//             {/* Add gender options here */}

//             <h3>Size</h3>
//             {/* Add size options here */}
//           </div>
//         </div>
//       )}

//       <div className='w-30'>
//         <Select className='w-100' options={options} />
//       </div>
//     </div>
//   );
// }

// export default Filtering;
import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
    borderColor: 'black', // Set border color to black
    boxShadow: '0 0 0 0.5px #808080',
    '&:hover': {
      borderColor: 'black', // Set border color to black on hover
      boxShadow: 'none',
    },
    '&:focus': {
      borderColor: 'black', // Set border color to black on focus
      boxShadow: 'none',
    },
    '&:hover:focus': {
      borderColor: 'black', // Set border color to black on hover and focus
      boxShadow: 'none',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#FFD249' : 'white',
    color: "black",
    '&:hover': {
      backgroundColor: '#FFF1B4',
    },
  }),
};

function Filtering() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const options = [
    { value: 'featured', label: 'Featured' },
    { value: 'best-selling', label: 'Best Selling' },
    { value: 'az', label: 'Alphabetically, A-Z' },
    { value: 'za', label: 'Alphabetically, Z-A' },
    { value: 'low-to-high', label: 'Price, low to high' },
    { value: 'high-to-low', label: 'Price, high to low' },
    { value: 'old-to-new', label: 'Date, old to new' },
    { value: 'new-to-old', label: 'Date, new to old' },
  ];

  return (
    <div className={`d-flex align-items-center justify-content-between px-2`}>
      <div className='filter' onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faFilter} />Filter
      </div>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${isSidebarOpen ? 'show' : ''}`} style={{ display: isSidebarOpen ? 'block' : 'none', overflow: 'hidden' }}>
        <div className="modal-dialog modal-full-height modal-dialog-scrollable" style={{ width: '20vw', height: '100vh', marginLeft: '0', marginTop: 0 }}>
          <div className="modal-content" style={{ border: 'none', borderRadius: 0 }}>
            <div className="modal-header bg-dark" style={{ borderRadius: 0 }}>
              <h2 className="modal-title text-white">FILTER</h2>
              <button type="button" className="btn-close close-button" onClick={toggleSidebar}></button>
            </div>
            <div className="modal-body">
              <h3>Price</h3>
              <p>Price: Rs.0.00 — Rs.28,990.00</p>

              <h3>Color</h3>
              {/* Add color options here */}

              <h3>Fabric</h3>
              {/* Add fabric options here */}

              {/* Add more filter categories as needed */}

              <h3>Type</h3>
              {/* Add type options here */}

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
              {/* Add size options here */}
              <h3>Size</h3>
              {/* Add size options here */}
              <h3>Size</h3>
              {/* Add size options here */}
              <h3>Size</h3>
              {/* Add size options here */}
              <h3>Size</h3>
              {/* Add size options here */}
            </div>
            <div className="modal-footer" style={{ borderTop: '1px solid #C1C1C1' }}>
              <button type="button" className="btn btn-secondary">Apply Filters</button>
            </div>
          </div>
        </div>
      </div>

      <div className='select-container mb-3'>
        <CustomSelect options={options} styles={customStyles} />
      </div>
    </div>
  );
}

export default Filtering;
