import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.city.cityName.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

    if (filteredData.length === 0) {
      setNotFound(true);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setNotFound(false);
  };

  return (
    <div className="searchBox">
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 && !notFound ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link
                  to={`/location/${value._id}`}
                  className="dataItem text-dark font-weight-light btn btn-link"
                  key={value._id}
                >
                  <p>{value.name} </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
