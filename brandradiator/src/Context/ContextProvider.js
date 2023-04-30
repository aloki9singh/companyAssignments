import React, { createContext, useState } from "react";

export const Context = createContext("");

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
};
export default ContextProvider;
