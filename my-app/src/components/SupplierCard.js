import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const SupplierCardContainer = styled(Card)({
  display: "flex",
  marginBottom: "16px",
});

const SupplierCardMedia = styled(CardMedia)({
  width: 160,
});

const SupplierCardContent = styled(Box)({
  flex: "1 0 auto",
});

const SupplierChip = styled(Chip)(({ theme }) => ({
  margin: "4px",
}));

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

const SupplierCard = ({ item }) => {
  return (
    <SupplierCardContainer>
      <SupplierCardMedia
        image="/assets/images/image.jpg" // Replace with your image path
        title={item.name}
      />
      <SupplierCardContent>
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
              <SupplierChip
                key={index}
                label={tag}
                style={{ backgroundColor: getTagColor(tag), color: "#fff" }}
              />
            ))}
          </Box>
        </CardContent>
      </SupplierCardContent>
    </SupplierCardContainer>
  );
};

export default SupplierCard;
