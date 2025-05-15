# Quiz Engine API

A backend API for a Quiz Engine built with **Node.js**, **TypeScript**, **Express**, **TypeORM**, and **MySQL**.

---

## Prerequisites

- **Node.js** v20.15.0 installed  
- **MySQL** server running and accessible  
- **npm** package manager installed  
- **git** installed

---

## Setup Instructions

### 1. Clone the repository


git clone https://github.com/GauravSehrawat1711/quiz.git
cd quiz


### 2. Configure environment variables

Create a `.env` file in the project root with the following content:

env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_NAME=quiz_db

PORT=5001
JWT_SECRET=your_jwt_secret


### 3. Setup the database

Log into your MySQL and run:

sql
CREATE DATABASE quiz_db;


### 4. Install dependencies


npm install


### 5. Run the application (development mode)

npm run dev


### 6. Access API documentation

Open your browser and visit:

http://localhost:5001/api-docs



