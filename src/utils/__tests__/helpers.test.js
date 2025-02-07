import {
  validateSearchTerm,
  generateProfileUrl,
  getAvatarUrl,
  highlightSearchTerm,
} from "../helpers";

describe("Helper Functions", () => {
  describe("validateSearchTerm", () => {
    it("throws error for empty search term", () => {
      expect(() => validateSearchTerm("")).toThrow();
      expect(() => validateSearchTerm("  ")).toThrow();
    });

    it("throws error for search term less than 2 characters", () => {
      expect(() => validateSearchTerm("a")).toThrow();
    });

    it("returns trimmed search term for valid input", () => {
      expect(validateSearchTerm("  test  ")).toBe("test");
    });
  });

  describe("highlightSearchTerm", () => {
    it("returns empty string for null/undefined input", () => {
      expect(highlightSearchTerm(null, "test")).toBe("");
      expect(highlightSearchTerm(undefined, "test")).toBe("");
    });

    it("highlights search term in text", () => {
      const obj = { description: "This is a test description" };
      const result = highlightSearchTerm(obj, "test");
      expect(result).toContain("<mark>test</mark>");
    });

    it("handles case-insensitive search", () => {
      const obj = { description: "This is a TEST description" };
      const result = highlightSearchTerm(obj, "test");
      expect(result).toContain("<mark>TEST</mark>");
    });
  });

  describe("generateProfileUrl", () => {
    it("returns correct profile URL for given username", () => {
      expect(generateProfileUrl("john_doe")).toBe(
        "https://voice123.com/john_doe"
      );
      expect(generateProfileUrl("test-user")).toBe(
        "https://voice123.com/test-user"
      );
    });

    it("handles empty or invalid input", () => {
      expect(generateProfileUrl("")).toBe("https://voice123.com");
      expect(generateProfileUrl(null)).toBe("https://voice123.com");
      expect(generateProfileUrl(undefined)).toBe("https://voice123.com");
    });
  });

  describe("getAvatarUrl", () => {
    it("returns picture_small if available", () => {
      const actor = {
        picture_small: "https://example.com/small.jpg",
        picture_medium: "https://example.com/medium.jpg",
        picture_large: "https://example.com/large.jpg",
      };
      expect(getAvatarUrl(actor)).toBe("https://example.com/small.jpg");
    });

    it("returns picture_medium if picture_small is not available", () => {
      const actor = {
        picture_medium: "https://example.com/medium.jpg",
        picture_large: "https://example.com/large.jpg",
      };
      expect(getAvatarUrl(actor)).toBe("https://example.com/medium.jpg");
    });

    it("returns picture_large if picture_small and picture_medium are not available", () => {
      const actor = {
        picture_large: "https://example.com/large.jpg",
      };
      expect(getAvatarUrl(actor)).toBe("https://example.com/large.jpg");
    });

    it("returns default avatar URL when no pictures are available", () => {
      const defaultAvatar =
        "https://ui-avatars.com/api/?name=Voice&background=random";
      expect(getAvatarUrl({})).toBe(defaultAvatar);
      expect(getAvatarUrl(null)).toBe(defaultAvatar);
      expect(getAvatarUrl(undefined)).toBe(defaultAvatar);
    });
  });
});
