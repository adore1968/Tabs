import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const url = "https://course-api.com/react-tabs-project";

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchTabs = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTabs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  const currentTab = tabs[index];

  return (
    <AppContext.Provider value={{ loading, tabs, setIndex, currentTab }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
