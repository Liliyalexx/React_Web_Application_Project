# GitHub User Profile Viewer

This project is a React application that allows users to view GitHub profiles based on a username. It fetches user data from the GitHub API and displays it in a detailed user profile view.

## Features

- **View User Profile:** Displays user information including name, avatar, location, bio, blog, followers, following, public repositories, and public gists.
- **Search and Navigate:** Navigate back to the search page from the user profile view.
- **Loading State:** Shows a spinner while data is being fetched.

## Technologies Used

- **React:** For building the user interface.
- **React Router DOM:** For routing and navigation.
- **Axios:** For making HTTP requests to the GitHub API.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/github-user-profile-viewer.git
Navigate to the Project Directory:

bash
Copy code
cd github-user-profile-viewer
Install Dependencies:

bash
Copy code
npm install
Configuration
The project uses the GitHub API to fetch user data. No additional configuration is needed as the API does not require an API key for public user data.

Usage
Start the Development Server:

bash
Copy code
npm start
Access the Application:

Open your browser and navigate to http://localhost:3000.

Usage:

Navigate to /user/:login, replacing :login with the GitHub username you want to view.
Example: http://localhost:3000/user/octocat
File Structure
src/
components/
User.jsx - Component that displays the user profile.
Spinner.jsx - Component that displays a loading spinner.
App.jsx - Main application component and routing setup.
index.js - Entry point of the application.
API
The application uses the following GitHub API endpoint:

Get User Data:

http
Copy code
GET https://api.github.com/users/{username}
Replace {username} with the GitHub username.

Troubleshooting
404 Errors: If you encounter a 404 error, ensure the username is correct and that the GitHub API endpoint is constructed properly in the getUser function.