import api from "./api";

export const saveComplaint = (data) =>
  api.post("/complaints", data);

export const getComplaints = () =>
  api.get("/complaints");