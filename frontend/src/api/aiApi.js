import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const analyzeComplaint = async (complaintText) => {
  const response = await axios.post(
    `${BASE_URL}/ai/log-complaint`,
    {
      complaint_text: complaintText,
    }
  );

  return response.data;
};