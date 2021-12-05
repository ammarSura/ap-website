import React, { createContext, useState } from "react";

export const FilterContext = createContext();

// This context provider is passed to any component requiring the context
export function FilterProvider({ children }) {
  const [priceFilter, setPriceFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  return (
    <FilterContext.Provider
      value={{
        priceFilter,
        setPriceFilter,
        typeFilter,
        setTypeFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
