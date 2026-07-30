import { useRef, useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { setComplaintFromAI } from "../../redux/complaintSlice";



function UploadBox({ setProgress, setMessage }) {
  const dispatch = useDispatch();

  const fileInputRef = useRef(null);

  const [text, setText] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async (event) => {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  let currentProgress = 0;

  const interval = setInterval(() => {
    currentProgress += 5;

    if (currentProgress <= 90) {
      setProgress(currentProgress);
    }
  }, 300);

  try {
    setMessage("Extracting complaint...");

    const response = await axios.post(
      "http://127.0.0.1:8000/ai/extract-document",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    clearInterval(interval);

    dispatch(setComplaintFromAI(response.data));

    setProgress(100);
    setMessage("Extraction completed successfully!");
  } catch (error) {
    clearInterval(interval);

    setProgress(0);
    setMessage("Extraction failed.");

    console.error(error);
  }
};

  const handleTextSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter complaint text.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/ai/log-complaint",
        {
          complaint_text: text,
        }
      );

      dispatch(setComplaintFromAI(response.data));

      setText("");

      alert("Complaint extracted successfully!");
    } catch (error) {
      console.error(error);

      alert("Failed to process complaint.");
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".pdf,.png,.jpg,.jpeg"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      <div className="upload-box" onClick={handleClick}>
        <div className="upload-icon">☁️</div>

        <p>Drag & Drop Complaint Document</p>

        <small>or click to browse</small>
      </div>

      <div className="divider">OR</div>

      <textarea
        className="paste-box"
        placeholder="Paste Complaint Text / Email"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="primary-btn"
        onClick={handleTextSubmit}
        style={{ marginTop: "10px", width: "100%" }}
      >
        Extract Text
      </button>

      <div className="supported-files">
        Supported: PDF • PNG • JPG • JPEG
      </div>
    </>
  );
}

export default UploadBox;