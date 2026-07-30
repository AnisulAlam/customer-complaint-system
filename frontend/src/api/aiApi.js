import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const analyzeComplaint = async (complaintText) => {
  const response = await axios.post(
    `${BASE_URL}/ai/log-complaint`,
    {
      complaint_text: complaintText,
    }
  );

  return response.data;
};