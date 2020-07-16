import React from "react";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

import { AdminContainer } from "./styles";

const Admin = () => {
  return (
    <AdminContainer>
      <AdminSidebar />
      <AdminHeader />
    </AdminContainer>
  );
};

export default Admin;
