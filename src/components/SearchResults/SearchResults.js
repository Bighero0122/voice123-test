import React from "react";
import { Box, Pagination, Typography } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import VoiceActorCard from "../VoiceActorCard/VoiceActorCard";
import { ResultsContainer } from "./SearchResults.styles";
import { useSelector } from "react-redux";

const SearchResults = ({
  results,
  totalPages,
  currentPage,
  onPageChange,
  loading,
  error,
}) => {
  // Get searchTerm from Redux store
  const { searchTerm } = useSelector((state) => state.search);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return (
    <ResultsContainer>
      {results.map((actor) => (
        <VoiceActorCard
          key={actor.user.username}
          actor={actor}
          searchTerm={searchTerm}
        />
      ))}

      {totalPages > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 4,
            "& .MuiPagination-ul": {
              "& .MuiPaginationItem-root": {
                color: "#1976d2",
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                  color: "#000",
                  fontWeight: "bold",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              },
              "& .MuiPaginationItem-previousNext": {
                color: "#1976d2",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            },
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            showFirstButton={false}
            showLastButton={false}
            siblingCount={4}
            boundaryCount={0}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: () => "Previous",
                  next: () => "Next",
                }}
                {...item}
              />
            )}
          />
        </Box>
      )}
    </ResultsContainer>
  );
};

export default SearchResults;
