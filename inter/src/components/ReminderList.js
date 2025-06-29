import React from "react";
import "./ReminderList.css";

const ReminderList = ({ reminders, onDeleteReminder }) => {
  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDays = (days) => {
    if (!days || days.length === 0) return "Daily";
    return days.map((day) => day.slice(0, 3)).join(", ");
  };

  return (
    <div className="reminder-list-container">
      <h2>Your Reminders</h2>
      {reminders.length === 0 ? (
        <p className="no-reminders">
          No reminders set. Add your first reminder above!
        </p>
      ) : (
        <div className="reminder-list">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="reminder-card"
              style={{ borderLeft: `4px solid ${reminder.color}` }}
            >
              <button
                className="delete-btn"
                onClick={() => onDeleteReminder(reminder.id)}
                aria-label="Delete reminder"
              >
                ×
              </button>
              <h3>{reminder.medicineName}</h3>
              <div className="time">{formatTime(reminder.time)}</div>
              <div className="frequency">{formatDays(reminder.days)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReminderList;
