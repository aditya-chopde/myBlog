import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const [current, setCurrent] = useState("home")
  
  const contextValue = {
    current,
    setCurrent
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
