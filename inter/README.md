# MediTrack - Medication Reminder App

A modern, responsive React.js application designed to help users manage their medication schedules with ease. Built with a focus on accessibility, user experience, and modern web technologies.

## 🎯 Project Overview

MediTrack is a front-end-only medication reminder application that allows users to:

- Schedule daily and weekly medication reminders
- Set custom times for each medication
- Use visual color coding for different medications
- Receive browser notifications and in-app alerts
- Manage reminders with an intuitive interface

## ✨ Features

### Core Functionality

- **Daily Reminders**: Set medications to be taken every day at specific times
- **Weekly Reminders**: Choose specific days of the week for medication schedules
- **Visual Organization**: Color-code medications for easy identification
- **Real-time Notifications**: Browser notifications and in-app toast alerts
- **Local Storage**: Persistent data storage across browser sessions
- **Dark Mode**: Toggle between light and dark themes

### User Interface

- **Modern Design**: Clean, card-based layout with subtle 3D effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG-compliant design with proper contrast ratios
- **Micro-animations**: Smooth transitions and interactive feedback
- **Toast Notifications**: In-app notification system for user feedback

### Technical Features

- **React Hooks**: Modern React patterns with useState, useEffect, and useCallback
- **CSS Variables**: Consistent theming and easy customization
- **Local Storage**: Data persistence without backend requirements
- **Web Notifications API**: Native browser notifications
- **Performance Optimized**: Hardware-accelerated animations and efficient rendering

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd inter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Usage Guide

### Adding a New Reminder

1. **Fill in the Medicine Name**

   - Enter the name of your medication
   - This field is required

2. **Set the Time**

   - Use the time picker to select when to take the medication
   - 24-hour format is supported

3. **Choose Frequency**

   - **Daily**: Medication will be scheduled every day
   - **Weekly**: Select specific days of the week

4. **Select Days (Weekly Only)**

   - Check the boxes for the days you need to take the medication
   - At least one day must be selected for weekly reminders

5. **Choose a Color**

   - Pick a color to help identify the medication visually
   - This helps distinguish between different medications

6. **Add Reminder**
   - Click the "Add Reminder" button to save your reminder
   - You'll see a success toast notification

### Managing Reminders

- **View Reminders**: All your reminders are displayed in the "Your Reminders" section
- **Delete Reminders**: Click the "×" button on any reminder card to remove it
- **Notifications**: You'll receive browser notifications and in-app alerts when it's time to take your medication

### Dark Mode

- Toggle between light and dark themes using the moon/sun icon in the header
- Your preference is automatically saved

## 🛠️ Technical Architecture

### Project Structure

```
src/
├── components/
│   ├── Header.js          # App header with title and dark mode toggle
│   ├── Header.css         # Header styles
│   ├── AddReminderForm.js # Form for adding new reminders
│   ├── AddReminderForm.css # Form styles
│   ├── ReminderList.js    # Display list of reminders
│   ├── ReminderList.css   # Reminder list styles
│   ├── Toast.js           # Toast notification component
│   └── Toast.css          # Toast styles
├── App.js                 # Main application component
├── App.css               # Global styles and CSS variables
├── index.js              # Application entry point
└── index.css             # Base styles
```

### Key Technologies

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and custom properties
- **Web Notifications API**: Native browser notifications
- **Local Storage API**: Client-side data persistence
- **CSS Animations**: Smooth transitions and micro-interactions

### State Management

- **Local State**: React useState for component-level state
- **Local Storage**: Persistent data storage for reminders
- **Browser Notifications**: Scheduled notification system

## 🎨 Design System

### Color Palette

- **Primary**: `#4f46e5` (Indigo)
- **Primary Light**: `#818cf8` (Light Indigo)
- **Success**: `#10b981` (Emerald)
- **Error**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)
- **Surface**: `#ffffff` (White)
- **Text**: `#1e293b` (Slate)

### Typography

- **Font Family**: System fonts (San Francisco, Segoe UI, Roboto)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Line Heights**: Optimized for readability

### Spacing System

- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px

### Border Radius

- **SM**: 8px
- **MD**: 12px
- **LG**: 16px

## 🔧 Customization

### Adding New Features

1. Create new components in the `src/components/` directory
2. Add corresponding CSS files for styling
3. Import and use components in `App.js`
4. Update the README with new feature documentation

### Modifying Styles

- CSS variables are defined in `src/App.css`
- Component-specific styles are in their respective `.css` files
- Dark mode styles are handled through CSS custom properties

### Extending Functionality

- Add new reminder types (e.g., monthly, custom intervals)
- Implement medication tracking (taken/not taken)
- Add export/import functionality for backup
- Integrate with external calendar applications

## 🧪 Testing

### Manual Testing Checklist

- [ ] Add daily reminder
- [ ] Add weekly reminder with multiple days
- [ ] Delete reminder
- [ ] Toggle dark mode
- [ ] Test notifications (requires user permission)
- [ ] Test responsive design on different screen sizes
- [ ] Verify form validation
- [ ] Check accessibility features

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Support

The application is fully responsive and optimized for mobile devices:

- Touch-friendly interface with larger tap targets
- Stacked layouts for smaller screens
- Optimized spacing and typography
- Mobile-first design approach

## 🔒 Privacy & Security

- **No Backend**: All data is stored locally in the browser
- **No Tracking**: No analytics or user tracking
- **No External Dependencies**: Minimal external packages
- **User Control**: Users have full control over their data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Maintain consistent code style
- Add comments for complex logic
- Test changes across different browsers
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- CSS Grid and Flexbox for modern layouts
- Web Notifications API for native notifications
- Modern CSS features for beautiful animations

## 📞 Support

For support, questions, or feature requests:

- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Note**: This application is for educational and personal use. Always consult with healthcare professionals for medical advice and medication management.
