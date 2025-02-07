import axios from "axios";

const API_BASE_URL = "https://api.sandbox.voice123.com";

export const searchVoiceActors = async (keywords, page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/providers/search/`, {
      params: {
        service: "voice_over",
        keywords,
        page,
      },
    });

    return {
      providers: response.data.providers,
      totalPages: parseInt(response.headers["x-list-total-pages"]),
    };
  } catch (error) {
    throw new Error("Failed to fetch voice actors");
  }
};
