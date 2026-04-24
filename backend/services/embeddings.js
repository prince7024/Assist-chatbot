import axios from "axios";

const EMBED_URL =
  "https://generativelanguage.googleapis.com/v1/models/text-embedding-004:embedContent";

export async function getEmbedding(text) {
  const response = await axios.post(
    `${EMBED_URL}?key=${process.env.GEMINI_API_KEY}`,
    {
      model: "models/text-embedding-004",
      content: {
        parts: [{ text }]
      }
    }
  );

  return response.data.embedding.values;
}