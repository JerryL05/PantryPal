import React from 'react';
import './CuisineSelection.css';

function CuisineSelection() {
  // Store user choice
  const handleCuisineClick = (cuisine) => {
  console.log(`Selected cuisine: ${cuisine}`);

  // It should navigate to the next page
  // navigate(Filler for now)

  };

  return (
    <div className="cuisine-page">
      {/* add the inventory button */}
      <button className="inventory-button">Inventory</button>

      <h1 className="title">What type of cuisine do you want to cook today?</h1>

      <div className="cuisine-grid">
        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick('Japanese')}
        >
          Japanese
        </button>

        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick('Italian')}
        >
          Italian
        </button>

        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick('Chinese')}
        >
          Chinese
        </button>

        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick('Thai')}
        >
          Thai
        </button>

        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick('Indian')}
        >
          Indian
        </button>

        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick('French')}
        >
          French
        </button>

        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick("Mexican")}
        >
         Mexican
        </button>

        <button
          className="cuisine-box"
          onClick={() => handleCuisineClick('Other')}
        >
          Other
        </button>
      </div>
    </div>
  );
}

export default CuisineSelection;

