import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import NavBar from "../components/NavBar";
import { styled } from "@mui/system";
import "./Store.css";

const Store = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Browse Suppliers");
  const [displayQuote, setDisplayQuote] = useState(false);
  const [displayQuoteButton, setDisplayQuoteButton] = useState(true);
  const [displayOrderButton, setDisplayOrderButton] = useState(false);
  const [displayChatPopup, setDisplayChatPopup] = useState(false); // State for chat popup

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const handleGetQuote = () => {
    setDisplayQuote(true);
    setDisplayQuoteButton(false);
    setDisplayOrderButton(true);
  };

  const MainContent = styled(Box)({
    width: "85%",
    padding: "16px",
  });

  const handleChatButtonClick = () => {
    setDisplayChatPopup(true);
  };

  const ChatPopup = () => (
    <Box
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#ffffff",
        border: "1px solid #ccc",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        height: "200px",
        zIndex: 1000,
      }}
    >
      <img src="/chat_text.png" style={{ width: "400px" }} />
      <br />
      <TextField
        label="Message to Seller"
        variant="outlined"
        style={{ width: "400px", marginTop: "20px" }}
      />
      {/* Add send button or other necessary components */}
    </Box>
  );

  return (
    <Box display="flex" style={{ marginTop: 0 }}>
      <NavBar
        selectedNavItem={selectedNavItem}
        handleNavItemClick={handleNavItemClick}
      />
      <MainContent style={{ backgroundColor: "#f5f5f5" }}>
        <div id="container">
          <div id="one">
            <img className="store-listing" src="/store.png" alt="Store" />
          </div>
          <div id="two">
            <TextField
              label="Order Quantity"
              variant="outlined"
              size="small"
              style={{ width: "365px", marginBottom: "12px" }}
            />
            <br />
            <TextField
              label="Material"
              variant="outlined"
              size="small"
              style={{ width: "365px", marginBottom: "12px" }}
            />
            <br />
            <TextField
              label="Lead Time"
              variant="outlined"
              size="small"
              style={{ width: "365px" }}
            />
            {displayQuote && (
              <img
                src="/quote.png"
                style={{
                  width: "200px",
                  marginLeft: "80px",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
                alt="Quote"
              />
            )}
            {displayQuoteButton && (
              <img
                src="/quote_button.png"
                style={{ width: "365px", cursor: "pointer", marginTop: "50px" }}
                onClick={handleGetQuote}
                alt="Quote Button"
              />
            )}
            {displayOrderButton && (
              <img
                src="/order_button.png"
                style={{ width: "365px", cursor: "pointer" }}
                alt="Order Button"
              />
            )}
          </div>
          <div id="three">
            <img
              src="/chat_button.png"
              style={{ width: "180px", cursor: "pointer" }}
              onClick={handleChatButtonClick}
              alt="Chat Button"
            />
          </div>
        </div>
        {displayChatPopup && <ChatPopup />}
      </MainContent>
    </Box>
  );
};

export default Store;
