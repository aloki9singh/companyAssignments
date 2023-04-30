import React, { createContext, useState } from "react";

export const Context = createContext("");

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
};
export default ContextProvider;



// This contextProvider is used to store token and check if the user is eligible for 
//particular Route to visit or not.