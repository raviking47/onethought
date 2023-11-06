// NewsDataContext.js
import { createContext, useContext, useState } from 'react';

const NewsDataContext = createContext();

export const useNewsData = () => {
  return useContext(NewsDataContext);
};

export const NewsDataProvider = ({ children }) => {
  const [NewsData, setNewsData] = useState("");
  const [NewsHeadline,setNewsHeadline]=useState("")
  const [NewsSubHeadline,setNewsSubHeadline]=useState("")
  const [NewsContent,setNewsContent]=useState("")



  return (
    <NewsDataContext.Provider value={{ NewsData, setNewsData,NewsHeadline,setNewsHeadline,NewsSubHeadline,setNewsSubHeadline,NewsContent,setNewsContent }}>
      {children}
    </NewsDataContext.Provider>
  );
};
