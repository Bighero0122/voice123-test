import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import { performSearch } from "../../store/searchSlice";
import { SearchContainer } from "./Search.styles";

const Search = () => {
  const dispatch = useDispatch();
  const { results, loading, error, totalPages, currentPage, searchTerm } =
    useSelector((state) => state.search);

  const handleSearch = (term) => {
    dispatch(performSearch({ term, page: 1 }));
  };

  const handlePageChange = (page) => {
    dispatch(performSearch({ term: searchTerm, page }));
  };

  return (
    <Container maxWidth="md">
      <SearchContainer>
        <SearchBar onSearch={handleSearch} loading={loading} />
        <SearchResults
          results={results}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          loading={loading}
          error={error}
        />
      </SearchContainer>
    </Container>
  );
};

export default Search;
