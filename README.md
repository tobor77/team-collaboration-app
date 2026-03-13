# Team Collaboration & Task Management App

A full-stack MERN application built to manage team projects and tasks in a collaborative environment. The system allows teams to organize work inside projects, assign tasks to members, and track progress through different task stages.

The application focuses on secure authentication, clear role-based permissions, and a clean separation between backend API logic and the React frontend.

Admins can create and manage projects, assign members, and distribute tasks, while regular users can view the projects they belong to and update the status of tasks assigned to them.

---

## Key Features

### Authentication & Security
The application uses secure authentication with JSON Web Tokens. Passwords are hashed using bcrypt before being stored in the database. All protected routes require a valid token and unauthorized requests are blocked by middleware.

### Role-Based Access Control
Two roles exist in the system: **Admin** and **User**.

Admins are responsible for managing the workspace. They can create projects, assign members, create tasks, and assign those tasks to users.

Regular users have limited permissions. They can only see the projects they are assigned to and update the progress of tasks that belong to them.

### Project Management
Projects act as containers for tasks and team members. Admins can create projects, add members to them, and organize work within those projects.

Users can view the projects they are part of and open them to see all related tasks.

### Task Management
Tasks represent individual pieces of work within a project. Each task can be assigned to a specific user and contains a progress status that can be updated as work advances.

Task statuses include:
- Todo
- In Progress
- Done

Only the user assigned to a task can update its status.

### Frontend Experience
The frontend is built with modern React using functional components and hooks. Authentication state is managed globally using Context API, allowing protected routes and persistent login sessions.

API requests are handled using Axios with interceptors that automatically attach authentication tokens to requests. Loading states and error handling are implemented to provide a smoother user experience.

---

## Technologies Used

### Frontend
- React
- React Router
- Context API
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Security
- JSON Web Token (JWT)
- bcrypt password hashing

---

## Getting Started

To run the application locally, install the dependencies for both the backend and frontend and start both servers.

The backend connects to MongoDB and exposes RESTful APIs for authentication, project management, and task management.  
The React frontend communicates with these APIs to display and update data in real time.

---

## Purpose of the Project

This project was built to demonstrate how a real-world collaborative system can be implemented using the MERN stack. It showcases concepts such as authentication, role-based permissions, RESTful API design, state management in React, and communication between frontend and backend systems.

It also highlights how modern full-stack applications structure features like project management, user roles, and task tracking in a scalable way.

