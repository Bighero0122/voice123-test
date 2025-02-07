import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders search input and button", () => {
    render(<SearchBar onSearch={mockOnSearch} loading={false} />);

    expect(
      screen.getByPlaceholderText("Search voice actors...")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("disables input and button when loading", () => {
    render(<SearchBar onSearch={mockOnSearch} loading={true} />);

    expect(
      screen.getByPlaceholderText("Search voice actors...")
    ).toBeDisabled();
    expect(screen.getByRole("button", { name: /search/i })).toBeDisabled();
  });
});
