import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import "./ChatBox.css";

import {
  setComplaintFromAI,
  updateComplaint,
  setLoading,
} from "../../redux/complaintSlice";

function ChatBox() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Drop complaint files or paste text below.",
    },
  ]);

  const dispatch = useDispatch();

  const loading = useSelector(
    (state) => state.complaint.loading
  );

  const complaint = useSelector(
    (state) => state.complaint.complaint
  );

  const handleAnalyze = async () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      dispatch(setLoading(true));

      const editKeywords = [
        "change",
        "update",
        "set",
        "modify",
        "edit",
      ];

      const isEditCommand = editKeywords.some((word) =>
        message.toLowerCase().includes(word)
      );

      let response;
      let aiText = "";

      if (isEditCommand) {
        response = await axios.post(
          "http://127.0.0.1:8000/ai/edit-complaint",
          {
            command: message,
            complaint_data: complaint,
          }
        );

        dispatch(updateComplaint(response.data));

        aiText = "Complaint updated successfully.";
      } else {
        response = await axios.post(
          "http://127.0.0.1:8000/ai/log-complaint",
          {
            complaint_text: message,
          }
        );

        dispatch(setComplaintFromAI(response.data));

        aiText =
          "Complaint parsed successfully. I've extracted the details and updated the form.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiText,
        },
      ]);

      setMessage("");
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Failed to process request.",
        },
      ]);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "user-message"
                : "ai-message"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-box">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe or edit a complaint..."
          disabled={loading}
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? "..." : "➤"}
        </button>
      </div>
    </>
  );
}

export default ChatBox;