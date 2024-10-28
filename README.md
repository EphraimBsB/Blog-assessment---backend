# Blog Management System - Backend

Blog management system, an assessment from Akieni

This repository contains the backend implementation of a Blog Management System built using NestJS and TypeScript. The backend integrates with the JSONPlaceholder API to manage blog-related data, including posts, comments, and user details.

## Features

- API Integration with JSONPlaceholder
- User Authentication (dummy)
- Ability to add comments to posts
- CORS enabled for frontend integration

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 18.16.0 or higher)
- npm or yarn

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blog-management-backend.git
   cd blog-management-backend

2. **Install the dependencies:**

    - Using npm: npm install
    - using yarn: yarn install
   
## Configuration

## Running the Application

  - Using npm: npm run start:dev
  - using yarn: yarn start:dev

## API Endpoints

- GET /api/posts: Retrieve a list of posts.
- GET api//posts/:id: Retrieve a specific post by ID.
- POST /posts: Create a new post (simulation).
- GET api/comments: Retrieve comments for posts.(simulated)
- POST api/comments: Add a comment to a post (simulated).
- GET api/users: Retrieve user details.
- POST api/users/auth/login: Retrieve user details(simulated).

