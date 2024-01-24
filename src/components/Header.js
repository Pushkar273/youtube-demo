import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchList from "./SearchList";
import { cacheResults } from "../utils/searchSlice";

function Header() {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((state) => state.search);

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchresults, setShowSearchRersults] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchResults(searchCache[searchText]);
      } else {
        getSearchText(searchText);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchText = async (txt) => {
    const data = await fetch(YOUTUBE_SEARCH_API + txt);
    const json = await data.json();
    setSearchResults(json[1]);
    dispatch((cacheResults({[txt]: json[1]})));
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-sm min-w-full">
      <div className="flex col-span-2">
        <img
          className="h-8"
          onClick={handleToggle}
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="humberger"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="youtube-icon"
          />
        </a>
      </div>
      <div className="col-span-8 flex justify-center items-center px-9">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onFocus={() => setShowSearchRersults(true)}
          // onBlur={()=>setShowSearchRersults(false)}
          className="w-3/4 border border-gray rounded-l-full p-2"
          type="text"
        />
        <button className="border border-gray rounded-r-full py-2 px-5 hover:bg-gray-300 ">
          <img
            className="w-6"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
            alt="search"
          />
        </button>
        {showSearchresults && <SearchList searchResults={searchResults} />}
      </div>
      <div className="col-span-2 flex justify-end">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Header;
