export const validateSearchTerm = (term) => {
  if (!term || term.trim().length < 2) {
    throw new Error("Search term must be at least 2 characters long");
  }
  return term.trim();
};

export const generateProfileUrl = (username) => {
  if (!username) return "https://voice123.com";

  return `https://voice123.com/${username}`;
};

const DEFAULT_AVATAR =
  "https://ui-avatars.com/api/?name=Voice&background=random";

export const getAvatarUrl = (actor) => {
  if (!actor) return DEFAULT_AVATAR;

  return (
    actor.picture_small ||
    actor.picture_medium ||
    actor.picture_large ||
    DEFAULT_AVATAR
  );
};

export const highlightSearchTerm = (obj, term) => {
  if (!obj || !term) return "";

  // Helper function to search through object
  const findMatchingText = (current) => {
    // Handle primitive values
    if (typeof current === "string") {
      if (current.toLowerCase().includes(term.toLowerCase())) {
        return current;
      }
      return null;
    }

    // Handle arrays
    if (Array.isArray(current)) {
      for (const item of current) {
        const result = findMatchingText(item);
        if (result) return result;
      }
      return null;
    }

    // Handle objects
    if (typeof current === "object" && current !== null) {
      // Search in values
      for (const value of Object.values(current)) {
        const result = findMatchingText(value);
        if (result) return result;
      }
    }

    return null;
  };

  const matchingText = findMatchingText(obj);
  if (!matchingText) return "";

  // Find the position of the term in the matching text
  const termIndex = matchingText.toLowerCase().indexOf(term.toLowerCase());
  const contextLength = 30; // Characters to show before and after

  // Get the context around the term
  const start = Math.max(0, termIndex - contextLength);
  const end = Math.min(
    matchingText.length,
    termIndex + term.length + contextLength
  );

  // Create the truncated text
  let truncatedText = matchingText.slice(start, end);
  if (start > 0) truncatedText = "..." + truncatedText;
  if (end < matchingText.length) truncatedText = truncatedText + "...";

  // Replace the search term with highlighted version (preserving original case)
  const originalTerm = matchingText.slice(termIndex, termIndex + term.length);
  return truncatedText.replace(
    new RegExp(originalTerm, "i"),
    `<mark>${originalTerm}</mark>`
  );
};
