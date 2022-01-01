import React, { createContext, useState } from "react";

export const SortContext = createContext();

export function SortProvider({ children }) {
  const [ sort, setSort ] = useState(null);
//   const [ genderFilter, setGenderFilter ] = useState(null);
//   const [ ratingSort, setRatingSort ] = useState(null);

  return (
    <SortContext.Provider
      value={{
        sort,
        setSort,
        
      }}
    >
      {children}
    </SortContext.Provider>
  );
};
