# 🚀 SNAPPY LLM

> A modern AI-powered conversational assistant built with React, FastAPI, and Groq LLMs.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Groq](https://img.shields.io/badge/Powered%20By-Groq-orange)

---

## 📖 Overview

SNAPPY LLM is a production-style AI assistant designed with a clean architecture and modern UI. Unlike traditional chatbot demos, it integrates a real Large Language Model (LLM) using the Groq API and follows a scalable frontend-backend architecture.

The project focuses on performance, modularity, and extensibility, making it suitable for real-world AI applications and software engineering portfolios.

---

## ✨ Features

- 🤖 Real AI Responses using Groq LLM
- ⚡ High-speed inference
- 💬 Multiple AI Models
- 📝 Chat History
- 📂 Local Storage Support
- 🔄 Regenerate Responses
- 🌙 Modern Responsive UI
- 🎨 Dark/Light Theme Support
- 🔍 Search Conversations
- ✏ Rename Chats
- 🗑 Delete Chats
- 📱 Mobile Friendly
- 🏗 Clean Production Architecture

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Backend

- FastAPI
- Python
- Groq API
- Pydantic

---

## 📂 Project Structure

```text
SNAPPY-LLM
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── app
│   │   ├── config
│   │   ├── providers
│   │   ├── routers
│   │   ├── schemas
│   │   ├── services
│   │   └── utils
│   └── requirements.txt
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/SNAPPY_LLM.git
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

---

## 🔑 Environment Variables

### Frontend

Create `.env`

```env
VITE_API_URL=http://localhost:8000
```

---

### Backend

Create `.env`

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

## 📷 Screenshots

> Screenshots will be added after the final UI release.

---

## 🚀 Upcoming Features

- Markdown Rendering
- Code Syntax Highlighting
- Streaming Responses
- PDF Chat
- Image Upload
- Retrieval-Augmented Generation (RAG)
- Export Chat
- Authentication
- Voice Interaction

---

## 🎯 Architecture

```text
React UI
      │
      ▼
FastAPI Backend
      │
      ▼
Groq API
      │
      ▼
Large Language Model
      │
      ▼
AI Response
```

---

## 👨‍💻 Author

**Aditya Upadhyay**

AI/ML Engineer

GitHub: https://github.com/aadi121k

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

## ⭐ If you like this project

Give it a ⭐ on GitHub.
