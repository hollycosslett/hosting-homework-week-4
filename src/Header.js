import React from "react";

export default function Header() {
    return (
        <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
            id="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
    )
}