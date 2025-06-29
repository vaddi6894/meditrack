import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <span className="toast-icon">
          {type === "success" && "✅"}
          {type === "error" && "❌"}
          {type === "info" && "ℹ️"}
          {type === "reminder" && "⏰"}
        </span>
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
