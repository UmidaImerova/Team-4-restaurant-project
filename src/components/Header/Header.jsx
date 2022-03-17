import React from "react";
import Searchbar from "./Searchbar";
import Basket from "./Basket";

function Header() {
  return (
    <>
      <header>
        <div className="fixed-input">
          <div className="logo">
            <img
              src="https://kaynar.kg/storage/restaurants/February2019/aOsXCkwdU8Gjf5DpdLCI.png"
              alt="LOGO"
            />
          </div>
          <Searchbar/>
          <Basket/>

        </div>
      </header>
    </>
  );
}

export default Header;
