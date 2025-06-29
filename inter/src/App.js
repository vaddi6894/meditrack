import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import AddReminderForm from "./components/AddReminderForm";
import ReminderList from "./components/ReminderList";
import Toast from "./components/Toast";

function App() {
  const [reminders, setReminders] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const savedReminders = localStorage.getItem("medicationReminders");
    if (savedReminders) {
      setReminders(JSON.parse(savedReminders));
    }

    // Request notification permission
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("medicationReminders", JSON.stringify(reminders));
  }, [reminders]);

  const scheduleNotification = useCallback((reminder) => {
    if (!("Notification" in window) || Notification.permission !== "granted") {
      return;
    }

    const now = new Date();
    const [hours, minutes] = reminder.time.split(":").map(Number);
    const reminderTime = new Date(now);
    reminderTime.setHours(hours, minutes, 0, 0);

    // If the time has already passed today, schedule for tomorrow
    if (reminderTime <= now) {
      reminderTime.setDate(reminderTime.getDate() + 1);
    }

    const timeUntilNotification = reminderTime.getTime() - now.getTime();

    // Schedule the notification
    setTimeout(() => {
      const notification = new Notification("MediTrack Reminder", {
        body: `Time to take ${reminder.medicineName}!`,
        icon: "/medicine-icon.png",
      });

      // Add toast notification
      setToasts((prev) => [
        ...prev,
        {
          id: Date.now(),
          message: `Time to take ${reminder.medicineName}!`,
          type: "reminder",
        },
      ]);

      // Schedule next notification
      if (reminder.frequency === "daily") {
        scheduleNotification(reminder);
      } else if (reminder.frequency === "weekly") {
        const nextDay = new Date(reminderTime);
        nextDay.setDate(nextDay.getDate() + 7);
        const nextTimeUntilNotification = nextDay.getTime() - now.getTime();
        setTimeout(
          () => scheduleNotification(reminder),
          nextTimeUntilNotification
        );
      }
    }, timeUntilNotification);
  }, []);

  useEffect(() => {
    // Schedule notifications for all reminders
    reminders.forEach(scheduleNotification);
  }, [reminders, scheduleNotification]);

  const addReminder = (newReminder) => {
    const reminderWithId = { ...newReminder, id: Date.now() };
    setReminders((prev) => [...prev, reminderWithId]);

    // Show success toast
    setToasts((prev) => [
      ...prev,
      {
        id: Date.now(),
        message: "Reminder added successfully!",
        type: "success",
      },
    ]);
  };

  const deleteReminder = (id) => {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id));

    // Show delete toast
    setToasts((prev) => [
      ...prev,
      {
        id: Date.now(),
        message: "Reminder deleted successfully!",
        type: "info",
      },
    ]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content">
        <AddReminderForm onAddReminder={addReminder} />
        <ReminderList reminders={reminders} onDeleteReminder={deleteReminder} />
      </main>
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
