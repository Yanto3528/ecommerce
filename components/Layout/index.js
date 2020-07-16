import React from "react";
import Header from "../Header";
import Admin from "../Admin";
import Footer from "../Footer";

import useAuth from "../../contexts/AuthContext";

import { LayoutContainer } from "./styles";

const Layout = ({ children }) => {
  const { user, loading } = useAuth();
  let header;
  if (user && !loading) {
    header = <Admin />;
  } else {
    header = <Header />;
  }
  return (
    <LayoutContainer isAdmin={user !== null}>
      {header}
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
