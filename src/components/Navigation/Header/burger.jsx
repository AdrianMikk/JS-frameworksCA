const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    return (
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    );
  };
  
  export default HamburgerMenu;



// import { useState } from 'react';

// const BurgerMenu = ({ categories, onSelectCategory }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleCategorySelect = (category) => {
//     onSelectCategory(category);
//     setIsOpen(false);
//   };

//   return (
//     <div className="burger-menu">
//       <button className="burger-menu-toggle" onClick={handleToggleMenu}>
//         <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
//       </button>
//       <div className={`burger-menu-items ${isOpen ? 'open' : ''}`}>
//         <ul>
//           {categories.map((category, index) => (
//             <li key={index} onClick={() => handleCategorySelect(category)}>
//               {category}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BurgerMenu;
