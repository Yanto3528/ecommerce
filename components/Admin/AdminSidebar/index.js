import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { BsCollectionFill } from "react-icons/bs";

import { AdminSidebarContainer, AdminSidebarNavItem } from "./styles";

const AdminSidebar = () => {
  return (
    <AdminSidebarContainer>
      <h1>Logo</h1>
      <ul>
        <AdminSidebarNavItem>
          <Link href="/admin/dashboard">
            <a>
              <MdDashboard />
              <span>Dashboard</span>
            </a>
          </Link>
        </AdminSidebarNavItem>
        <AdminSidebarNavItem>
          <Link href="/admin/orders">
            <a>
              <FaShoppingBag />
              <span>Orders</span>
            </a>
          </Link>
        </AdminSidebarNavItem>
        <AdminSidebarNavItem>
          <Link href="/admin/products">
            <a>
              <IoMdPricetags />
              <span>Products</span>
            </a>
          </Link>
        </AdminSidebarNavItem>
        <AdminSidebarNavItem>
          <Link href="/admin/categories">
            <a>
              <BsCollectionFill />
              <span>Categories</span>
            </a>
          </Link>
        </AdminSidebarNavItem>
      </ul>
    </AdminSidebarContainer>
  );
};

export default AdminSidebar;
