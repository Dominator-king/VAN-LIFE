import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname == "/";
  return (
    <div className="site-wrapper">
      <Header />
      <main className={isHome ? "home" : ""}>
        <Outlet />
      </main>
      <Footer isHome={isHome} />
    </div>
  );
}
