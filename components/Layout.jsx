import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
//special prop:children
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Boat store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="mian-container">{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
