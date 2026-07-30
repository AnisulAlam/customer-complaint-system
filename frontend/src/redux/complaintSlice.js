import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complaint: {
    complaintSource: "",
    customerName: "",
    productName: "",
    strength: "",
    batchNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    quantityAffected: "",
    complaintType: "",
    complaintDate: "",
    description: "",

    severity: "",
    priority: "",
    riskLevel: "",
    rootCause: "",
    recommendation: "",

    missingInformation: "",
  },

  recentlyEdited: [],
  loading: false,
};

const complaintSlice = createSlice({
  name: "complaint",

  initialState,

  reducers: {
    updateComplaint(state, action) {
      state.complaint = {
        ...state.complaint,
        ...action.payload,
      };
    },

    setComplaintFromAI(state, action) {
      const data = action.payload;

      state.complaint = {
        ...state.complaint,

        complaintSource: data.complaint_source || "",
        customerName: data.customer_name || "",
        productName: data.product_name || "",
        strength: data.strength || "",
        batchNumber: data.batch_number || "",
        manufacturingDate: data.manufacturing_date || "",
        expiryDate: data.expiry_date || "",
        quantityAffected: data.quantity_affected || "",
        complaintType: data.complaint_type || "",
        complaintDate: data.complaint_date || "",
        description: data.description || "",

        severity: data.severity || "",
        priority: data.priority || "",
        riskLevel: data.risk_level || "",
        rootCause: data.root_cause || "",
        recommendation: data.recommendation || "",

        missingInformation: data.missing_information || "",
      };
    },

    resetComplaint(state) {
      state.complaint = initialState.complaint;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    setRecentlyEdited: (state, action) => {
        state.recentlyEdited = action.payload;
    },

    clearRecentlyEdited: (state) => {
        state.recentlyEdited = [];
    },

  },
});

export const {
  updateComplaint,
  setComplaintFromAI,
  resetComplaint,
  setLoading,
  setRecentlyEdited,
  clearRecentlyEdited,
} = complaintSlice.actions;

export default complaintSlice.reducer;