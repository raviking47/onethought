import React, { Component ,useState} from "react";
import "../src/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";
import NewsPage from "./components/NewsPage";
import { NewsDataProvider } from "./Context/NewsDataProvider";
import GiveNews from "./components/GiveNews";

class App extends Component {
  render() {
    return (
      <div className="App">
       <NewsDataProvider>
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/newspage" element={<NewsPage />} />
            <Route path="/giveNews" element={<GiveNews />} />

          </Routes>
        </BrowserRouter>
       </NewsDataProvider>
      </div>
    );
  }
}

export default App;
