import React, { createContext, useContext, useEffect, useState } from "react";

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const logOutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <LocalStorageContext.Provider value={{ user, setUser, logOutUser }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => {
  return useContext(LocalStorageContext);
};
