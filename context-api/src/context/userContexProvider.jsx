/* eslint-disable*/
import React from "react";
import UserContext from "./userContext";
import { useState } from "react";

// First Method make provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
