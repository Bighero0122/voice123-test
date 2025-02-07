import { useState, useCallback } from "react";
import { searchVoiceActors } from "../services/api";

export const useVoiceSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const performSearch = useCallback(async (term, page = 1) => {
    if (!term) return;

    try {
      setLoading(true);
      setError(null);
      setSearchTerm(term);

      const data = await searchVoiceActors(term, page);
      setResults(data.providers);
      setTotalPages(data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      setError(error.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePageChange = useCallback(
    (page) => {
      performSearch(searchTerm, page);
    },
    [searchTerm, performSearch]
  );

  return {
    results,
    loading,
    error,
    totalPages,
    currentPage,
    searchTerm,
    performSearch,
    handlePageChange,
  };
};
