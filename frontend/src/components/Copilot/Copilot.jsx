import { useState } from "react";

import UploadBox from "./UploadBox";
import ProgressSection from "./ProgressSection";
import AIMessage from "./AIMessage";
import ChatBox from "./ChatBox";

import "./Copilot.css";

function Copilot() {
  const [progress, setProgress] = useState(0);

  const [message, setMessage] = useState(
    "Upload a complaint to begin AI extraction."
  );

  return (
    <div className="copilot">
      <div className="copilot-header">
        <div>🤖 AI Complaint Intake Assistant</div>

        <span className="beta-badge">BETA</span>
      </div>

      <UploadBox
        setProgress={setProgress}
        setMessage={setMessage}
      />

      <ProgressSection
        progress={progress}
        message={message}
      />

      <AIMessage />

      <ChatBox />
    </div>
  );
}

export default Copilot;