import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const NavBarContainer = styled(Box)({
  width: "15%",
  minHeight: "100vh",
  //   backgroundColor: "#f5f5f5",
  padding: "30px",
});

const NavItem = styled(Typography)(({ theme, selected }) => ({
  cursor: "pointer",
  padding: "8px 0",
  color: selected ? "purple" : "inherit",
  borderRight: selected ? "4px solid purple" : "none",
  "&:hover": {
    color: "purple",
  },
}));

const NavBar = ({ selectedNavItem, handleNavItemClick }) => {
  return (
    <NavBarContainer>
      <img src="logo.png" style={{ width: "200px", margin: "auto" }} />
      {[
        "Profile",
        "Dashboard",
        "Browse Suppliers",
        "View Cart",
        "View Orders",
        "Settings",
      ].map((item) => (
        <NavItem
          key={item}
          variant="h6"
          selected={selectedNavItem === item}
          onClick={() => handleNavItemClick(item)}
        >
          {item}
        </NavItem>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
