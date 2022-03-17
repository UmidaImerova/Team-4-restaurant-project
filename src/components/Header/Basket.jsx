import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

function Basket() {
  return (
    <div className="basket-info">
      <IconButton>
        <ShoppingCartIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <p>100$</p>
    </div>
  );
}

export default Basket;
