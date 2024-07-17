import React, { useState } from "react";
import { Container, Grid, TextField, MenuItem, Box } from "@mui/material";
import NavBar from "../components/NavBar";
import SupplierCard from "../components/SupplierCard";
import { styled } from "@mui/system";
import "./BrowseSuppliers.css";
import { useNavigate } from "react-router-dom";

const MainContent = styled(Box)({
  width: "85%",
  padding: "16px",
});

const SearchBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
});

const data = [
  {
    id: 1,
    name: "XX Store Suppliers",
    rating: 4.8,
    description: "We supply the best services",
    tags: ["Ethnic Minority", "LGBTQ+"],
  },
  {
    id: 2,
    name: "BCA Raw Materials",
    rating: 4.7,
    description: "We supply the best services",
    tags: ["Ethnic Minority", "Indigenous Business"],
  },
  {
    id: 3,
    name: "YY Cleaning Services",
    rating: 4.7,
    description: "We supply the best services",
    tags: ["Ethnic Minority"],
  },
  {
    id: 4,
    name: "BB Cleaning Services",
    rating: 3.9,
    description: "We supply the best services",
    tags: ["Indigenous Business"],
  },
  {
    id: 5,
    name: "ASDF Manufacturers",
    rating: 4.3,
    description: "We supply the best services",
    tags: ["Female Owned", "LGBTQ+"],
  },
  {
    id: 6,
    name: "ABC Best Suppliers",
    rating: 4.8,
    description: "We supply the best services",
    tags: ["Ethnic Minority", "LGBTQ+"],
  },
];

const BrowseSuppliers = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Browse Suppliers");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [minorityType, setMinorityType] = useState("");
  const [sortType, setSortType] = useState("");

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/store");
  };

  return (
    <Box display="flex" style={{ marginTop: 0 }}>
      <NavBar
        selectedNavItem={selectedNavItem}
        handleNavItemClick={handleNavItemClick}
      />
      <MainContent style={{ backgroundColor: "#f5f5f5" }}>
        <div>
          <div className="search-field">
            <TextField
              label="Search for supplier or listing"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div className="filter-fields">
            <TextField
              label="Location"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              margin="normal"
              style={{ width: "400px", marginLeft: 8 }}
            />
            <TextField
              select
              label="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              variant="outlined"
              margin="normal"
              style={{ width: "200px", marginLeft: 16 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
            </TextField>
            <TextField
              select
              label="Minority Type"
              value={minorityType}
              onChange={(e) => setMinorityType(e.target.value)}
              variant="outlined"
              margin="normal"
              style={{ width: "200px", marginLeft: 16 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Indigenous Businesses">
                Indigenous Businesses
              </MenuItem>
              <MenuItem value="Female Owned">Female Owned</MenuItem>
              <MenuItem value="Ethnic Minority">Ethnic Minority</MenuItem>
              <MenuItem value="SME">Small-Medium Enterprise (SME)</MenuItem>
              <MenuItem value="LGBTQ+">LGBTQ+</MenuItem>
            </TextField>
            <TextField
              select
              label="Sort"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              variant="outlined"
              margin="normal"
              style={{ width: "200px", marginLeft: 16 }}
            >
              <MenuItem value="Best Selling">Best Selling</MenuItem>
              <MenuItem value="Highest Rated">Highest Rated</MenuItem>
            </TextField>
          </div>
        </div>
        <Grid container spacing={2}>
          <div className="listings" onClick={handleImageClick}>
            <img className="listing-image" src="/listings.png" />
          </div>

          {/* {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <SupplierCard item={item} />
            </Grid>
          ))} */}
        </Grid>
      </MainContent>
    </Box>
  );
};

export default BrowseSuppliers;
