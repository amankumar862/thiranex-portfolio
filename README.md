# Personal Portfolio Website

A modern, responsive full-stack personal portfolio website developed as part of the **Thiranex Internship – Task 1**.

The website showcases my skills, projects, and contact information while demonstrating a complete frontend, backend, and database integration.

## 🚀 Features

* Responsive personal portfolio design
* Hero, About, Skills, Projects, and Contact sections
* Dynamic project data fetched from a MySQL database
* REST API built with Flask
* React-based frontend
* GitHub links for featured projects
* Responsive layout for desktop and mobile devices
* Contact links for Email, GitHub, and LinkedIn

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* CSS
* Vite

### Backend

* Python
* Flask
* Flask-CORS

### Database

* MySQL

### Tools

* Git
* GitHub
* VS Code

## 🏗️ Project Architecture

```text
React Frontend
      ↓
   Flask API
      ↓
 MySQL Database
```

Project information displayed on the portfolio is retrieved dynamically from the MySQL database through the Flask REST API.

## 📂 Project Structure

```text
thiranex-portfolio/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── venv/
│
├── .gitignore
└── README.md
```

## 💻 Featured Projects

### GuardianAI

AI-powered phishing detection system designed to identify suspicious websites and protect users from online threats.

**Technologies:** Python, Flask, AI, JavaScript

[GitHub Repository](https://github.com/amankumar862/GaurdianAI)

### Research Paper Summarizer

An AI-based application that summarizes research papers and helps users quickly understand lengthy academic content.

**Technologies:** Python, AI, NLP

[GitHub Repository](https://github.com/amankumar862/Research-paper-summarizer)

### Search Bot

An intelligent search bot designed to retrieve and present relevant information based on user queries.

**Technologies:** Python, AI

[GitHub Repository](https://github.com/amankumar862/Search_bot)

## ⚙️ Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/amankumar862/thiranex-portfolio.git
cd thiranex-portfolio
```

### 2. Start the backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

**Windows:**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside `backend`:

```env
MYSQL_PASSWORD=your_mysql_password
```

Configure your MySQL database and then run:

```bash
python app.py
```

The backend runs on:

```text
http://localhost:5000
```

### 3. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## 🔐 Environment Variables

Database credentials are stored using environment variables and are **not included in the repository**.

Example:

```env
MYSQL_PASSWORD=your_mysql_password
```

## 👨‍💻 Author

**Aman Kumar**

* GitHub: https://github.com/amankumar862
* LinkedIn: https://www.linkedin.com/in/15amankumar
* Email: [amankumar86227@gmail.com](mailto:amankumar86227@gmail.com)

---

Built with React, Flask, and MySQL.
