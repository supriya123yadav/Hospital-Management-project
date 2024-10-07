Hospital Management System 
Project Overview
The Operation Scheduler For Hospital Management system is designed to assist in scheduling and managing surgeries in a hospital. It enables hospital administrators to efficiently manage operating room (OT) schedules, doctors, patient data, and more, while allowing users (doctors and nurses) to view their schedules and relevant surgical details. This system helps streamline hospital OT operations and ensure smooth scheduling with real-time updates.

Features
Admin Login: Allows admins to manage doctors, patients, and surgery schedules.
User Login: Provides doctors and nurses access to their schedules and details of upcoming surgeries.
Manage Surgery Schedules: Admins can add, cancel, or modify surgery schedules, including pre- and post-operative events.
View Doctor and Patient Details: Users can view doctor profiles and patient details related to the surgery.
OT Monitoring and Activity Tracking: Admins can track OT usage efficiency, resource allocation, and more.
Technologies Used
Frontend:
React
HTML5
CSS3
JavaScript (ES6)
Backend:
Firebase (for initial data storage)
[React] (replaced Firebase for rendering components dynamically)
Version Control:
GitHub (Public repository for version control)

How to Run
Prerequisites
Node.js (version 12 or above)
React (latest version)
Git
Setup
Clone the Repository:

bash
Copy code
C:\Users\DELL\Desktop\Hospital Management\hospital-management-system
cd hospital-management-system
Install Dependencies:

bash
Copy code
npm install
Run the Application:

bash
Copy code
npm start
The app should now be running on http://localhost:3000.

Deployment: You can deploy the app using services like Vercel or Netlify.

Functionality
Login
Users can log in as either an Admin or a User (Doctor/Nurse).
Based on the login type, they are redirected to different dashboards.
Admin Features
AdminDashboard: Manage doctor profiles, patient information, and surgery schedules.
PatientSchedule: Create, update, and remove surgery schedules.
DoctorDetails: View and manage doctor details.
User Features
PatientSchedule: View upcoming surgeries and related details.
DoctorDetails: View assigned doctors for a surgery.
OTMonitoring: Track daily OT activities and resource usage.
Component Breakdown
App.js: Main component handling login and routing based on user type (Admin or User).
AdminDashboard.js: Contains all the admin-related functionalities, like managing surgery schedules and doctors.
Login.js: Handles user authentication and login.
PatientSchedule.js: Displays surgery schedules for both admin and user roles.
DoctorDetails.js: Shows detailed information about doctors involved in surgeries.
Design Considerations
Modular Design: The app is built in a modular fashion with separate components for different functionalities.
Scalability: Easy to scale by adding more components or pages if needed.
Security: Simple authentication implemented for distinguishing between admin and user roles.
Logging: All key actions (e.g., schedule creation, surgery modifications) are logged for auditing purposes.
