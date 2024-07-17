import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: "15%",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(2),
  },
  navItem: {
    cursor: "pointer",
    padding: theme.spacing(1),
    "&:hover": {
      color: "purple",
    },
  },
  navItemSelected: {
    color: "purple",
    borderRight: "4px solid purple",
  },
  mainContent: {
    width: "85%",
    padding: theme.spacing(2),
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  card: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  cardMedia: {
    width: 160,
  },
  cardContent: {
    flex: "1 0 auto",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

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

const App = () => {
  const classes = useStyles();
  const [selectedNavItem, setSelectedNavItem] = useState("Browse Suppliers");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [minorityType, setMinorityType] = useState("");
  const [sortType, setSortType] = useState("");

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <Box display="flex">
      <Box className={classes.navBar}>
        <Typography
          variant="h6"
          className={`${classes.navItem} ${
            selectedNavItem === "Profile" && classes.navItemSelected
          }`}
          onClick={() => handleNavItemClick("Profile")}
        >
          Profile
        </Typography>
        <Typography
          variant="h6"
          className={`${classes.navItem} ${
            selectedNavItem === "Dashboard" && classes.navItemSelected
          }`}
          onClick={() => handleNavItemClick("Dashboard")}
        >
          Dashboard
        </Typography>
        <Typography
          variant="h6"
          className={`${classes.navItem} ${
            selectedNavItem === "Browse Suppliers" && classes.navItemSelected
          }`}
          onClick={() => handleNavItemClick("Browse Suppliers")}
        >
          Browse Suppliers
        </Typography>
        <Typography
          variant="h6"
          className={`${classes.navItem} ${
            selectedNavItem === "View Cart" && classes.navItemSelected
          }`}
          onClick={() => handleNavItemClick("View Cart")}
        >
          View Cart
        </Typography>
        <Typography
          variant="h6"
          className={`${classes.navItem} ${
            selectedNavItem === "View Orders" && classes.navItemSelected
          }`}
          onClick={() => handleNavItemClick("View Orders")}
        >
          View Orders
        </Typography>
        <Typography
          variant="h6"
          className={`${classes.navItem} ${
            selectedNavItem === "Settings" && classes.navItemSelected
          }`}
          onClick={() => handleNavItemClick("Settings")}
        >
          Settings
        </Typography>
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.searchBox}>
          <TextField
            label="Search for supplier or listing"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            margin="normal"
            style={{ marginLeft: 16 }}
          />
          <TextField
            select
            label="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            variant="outlined"
            margin="normal"
            style={{ marginLeft: 16 }}
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
            style={{ marginLeft: 16 }}
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
            style={{ marginLeft: 16 }}
          >
            <MenuItem value="Best Selling">Best Selling</MenuItem>
            <MenuItem value="Highest Rated">Highest Rated</MenuItem>
          </TextField>
        </Box>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="/path/to/image.jpg" // Replace with your image path
                  title={item.name}
                />
                <Box className={classes.cardContent}>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {item.description}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Rating: {item.rating}
                    </Typography>
                    <Box>
                      {item.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          className={classes.chip}
                          style={{
                            backgroundColor: getTagColor(tag),
                            color: "#fff",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const getTagColor = (tag) => {
  switch (tag) {
    case "Ethnic Minority":
      return "orange";
    case "LGBTQ+":
      return "purple";
    case "Indigenous Business":
      return "blue";
    case "Female Owned":
      return "pink";
    default:
      return "grey";
  }
};

export default App;
