import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { SearchBarContainer } from "./SearchBar.styles";

const SearchBar = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <SearchBarContainer component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            placeholder="Search voice actors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={loading}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </SearchBarContainer>
  );
};

export default SearchBar;
