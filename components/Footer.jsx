import React from "react";

export default function Footer({ isHome }) {
  return (
    <footer className={isHome ? "home-footer" : ""}>
      &#169; 2022 #VANLIFE
    </footer>
  );
}
