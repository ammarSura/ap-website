import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [ priceFilter, setPriceFilter ] = useState(null);
  const [ genderFilter, setGenderFilter ] = useState(null);
  const [ ratingFilter, setRatingFilter ] = useState(null);

  return (
    <FilterContext.Provider
      value={{
        priceFilter,
        setPriceFilter,
        genderFilter,
        setGenderFilter,
        ratingFilter, 
        setRatingFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
