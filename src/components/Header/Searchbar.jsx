import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import IconButton from "@mui/material/IconButton";

function Searchbar() {
  return (
    <>
      <div className="search-input">
        <input type="text" />
        <IconButton>
          <SearchIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton>
          <MicIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </div>
    </>
  );
}

export default Searchbar;
