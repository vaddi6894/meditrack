import React, { useState } from "react";
import "./AddReminderForm.css";

const AddReminderForm = ({ onAddReminder }) => {
  const [medicineName, setMedicineName] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [selectedDays, setSelectedDays] = useState([]);
  const [color, setColor] = useState("#4f46e5");
  const [errors, setErrors] = useState({});

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!medicineName.trim()) {
      newErrors.medicineName = "Medicine name is required";
    }

    if (!time) {
      newErrors.time = "Time is required";
    }

    if (frequency === "weekly" && selectedDays.length === 0) {
      newErrors.days = "Please select at least one day";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (frequency === "daily") {
      onAddReminder({
        medicineName,
        time,
        frequency,
        color,
        days: ["Daily"],
      });
    } else {
      // For weekly reminders, create a reminder for each selected day
      selectedDays.forEach((day) => {
        onAddReminder({
          medicineName,
          time,
          frequency,
          color,
          days: [day],
        });
      });
    }

    // Reset form
    setMedicineName("");
    setTime("");
    setFrequency("daily");
    setSelectedDays([]);
    setColor("#4f46e5");
    setErrors({});
  };

  const handleDayToggle = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add New Reminder</h2>

      <div className="form-group">
        <label htmlFor="medicineName">Medicine Name</label>
        <input
          type="text"
          id="medicineName"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          placeholder="Enter medicine name"
          className={errors.medicineName ? "error" : ""}
        />
        {errors.medicineName && (
          <span className="error-message">{errors.medicineName}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={errors.time ? "error" : ""}
        />
        {errors.time && <span className="error-message">{errors.time}</span>}
      </div>

      <div className="form-group">
        <label>Frequency</label>
        <div className="frequency-toggle">
          <input
            type="radio"
            id="daily"
            name="frequency"
            value="daily"
            checked={frequency === "daily"}
            onChange={() => {
              setFrequency("daily");
              setSelectedDays([]);
            }}
          />
          <label htmlFor="daily">Daily</label>

          <input
            type="radio"
            id="weekly"
            name="frequency"
            value="weekly"
            checked={frequency === "weekly"}
            onChange={() => setFrequency("weekly")}
          />
          <label htmlFor="weekly">Weekly</label>
        </div>
      </div>

      {frequency === "weekly" && (
        <div className="form-group">
          <label>Select Days</label>
          <div className="days-selector">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="day-checkbox"
                onClick={() => handleDayToggle(day)}
              >
                <input
                  type="checkbox"
                  id={day}
                  checked={selectedDays.includes(day)}
                  onChange={() => {}}
                />
                <span>{day.slice(0, 3)}</span>
              </div>
            ))}
          </div>
          {errors.days && <span className="error-message">{errors.days}</span>}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="color">Color Tag</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Reminder
      </button>
    </form>
  );
};

export default AddReminderForm;
