import FormSection from "./FormSection";
import "./ComplaintForm.css";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { resetComplaint } from "../../redux/complaintSlice";

function ComplaintForm() {
  const dispatch = useDispatch();

  const complaint = useSelector(
    (state) => state.complaint.complaint
  );

  const handleReset = () => {
    dispatch(resetComplaint());
  };

  const handleSave = async () => {
    try {
      const payload = {
        complaint_source: complaint.complaintSource,
        customer_name: complaint.customerName,
        product_name: complaint.productName,
        strength: complaint.strength,
        batch_number: complaint.batchNumber,
        manufacturing_date: complaint.manufacturingDate,
        expiry_date: complaint.expiryDate,
        quantity_affected: complaint.quantityAffected,
        complaint_type: complaint.complaintType,
        complaint_date: complaint.complaintDate,
        description: complaint.description,

        severity: complaint.severity,
        priority: complaint.priority,
        risk_assessment: complaint.riskLevel,
        recommendation: complaint.recommendation,
      };

      const response = await axios.post(
        `${API_URL}/complaints/`,
        payload
      );

      alert(
        `Complaint saved successfully! ID: ${response.data.id}`
      );
    } catch (error) {
      console.error(error);

      alert("Failed to save complaint.");
    }
  };

  return (
    <div>
      <div className="form-header">
        <div>
          <h2>Log Customer Complaint</h2>
          <p>API & FDF Quality Assurance Module</p>
        </div>

        <span className="badge">Pending Triage</span>
      </div>

      <FormSection
        title="1. ORIGIN & CUSTOMER DETAILS"
        fields={[
          {
            label: "Complaint Source",
            name: "complaintSource",
          },
          {
            label: "Customer Name",
            name: "customerName",
          },
        ]}
      />

      <FormSection
        title="2. PRODUCT & BATCH IDENTIFICATION"
        fields={[
          {
            label: "Product Name",
            name: "productName",
          },
          {
            label: "Product Strength / Grade",
            name: "strength",
          },
          {
            label: "Batch/Lot Number",
            name: "batchNumber",
          },
          {
            label: "Manufacturing Date",
            name: "manufacturingDate",
          },
          {
            label: "Expiry Date",
            name: "expiryDate",
          },
          {
            label: "Quantity Affected",
            name: "quantityAffected",
          },
        ]}
      />

      <FormSection
        title="3. COMPLAINT DETAILS"
        fields={[
          {
            label: "Complaint Type",
            name: "complaintType",
          },
          {
            label: "Complaint Date",
            name: "complaintDate",
          },
        ]}
        textarea={{
          label: "Detailed Complaint Description",
          name: "description",
        }}
      />

      <FormSection
        title="4. INITIAL ASSESSMENT & PRIORITY"
        fields={[
          {
            label: "Initial Severity",
            name: "severity",
            type: "select",
          },
          {
            label: "Priority",
            name: "priority",
            type: "select",
          },
        ]}
      />

      <div className="button-row">
        <button
          className="secondary-btn"
          onClick={handleReset}
        >
          Reset Form
        </button>

        <button
          className="primary-btn"
          onClick={handleSave}
        >
          Save Complaint
        </button>
      </div>
    </div>
  );
}

export default ComplaintForm;