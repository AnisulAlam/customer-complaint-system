import ComplaintForm from "../components/ComplaintForm/ComplaintForm";
import Copilot from "../components/Copilot/Copilot";

import "./ComplaintPage.css";

function ComplaintPage() {
  return (
    <div className="page">
      <div className="left-panel">
        <ComplaintForm />
      </div>

      <div className="right-panel">
        <Copilot />
      </div>
    </div>
  );
}

export default ComplaintPage;