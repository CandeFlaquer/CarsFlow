import { SearchIcon, AddIcon } from "../components/Icons";
import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-group">
        <i className="input-icon">
          <SearchIcon size={24} />
        </i>
        <input
          id="search"
          type="text"
          className="input-field"
          placeholder="Search"
          name="Search"
        ></input>
      </div>
      <div className="search-link">
        <Link className="searchbar-link" to="/CarsFormE">
          <AddIcon color="#375838" /> Add new Car
        </Link>
      </div>
    </div>
  );
}
