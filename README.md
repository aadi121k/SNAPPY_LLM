# 🚀 SNAPPY LLM

<p align="center">
  <img src="./frontend/public/logo.png" width="140" alt="SNAPPY LLM Logo">
</p>

<h3 align="center">
Fast • Smart • Modern AI Assistant
</h3>

<p align="center">
Built with React, FastAPI & Groq LLM
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11-yellow?logo=python)
![Groq](https://img.shields.io/badge/Powered%20By-Groq-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 📖 Overview

SNAPPY LLM is a modern AI-powered conversational assistant designed with a production-ready architecture.

Unlike basic chatbot demos, SNAPPY connects to real Large Language Models through the **Groq API**, providing fast and intelligent responses with a beautiful user experience.

The project follows a scalable **React + FastAPI** architecture, making it suitable for portfolios, internships, and real-world AI applications.

---

# ✨ Features

- 🤖 Real AI Responses
- ⚡ Ultra Fast Groq Inference
- 🧠 Multiple AI Models
- 💬 Conversation History
- 📝 Markdown Rendering
- 💻 Syntax Highlighting
- 📋 Copy Code Blocks
- 🔄 Regenerate Responses
- 🌙 Dark / Light Theme
- 📱 Responsive Design
- 🔍 Search Conversations
- ✏ Rename Chats
- 🗑 Delete Chats
- 💾 Local Storage
- 🎨 Modern UI
- 🏗 Modular Architecture

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Markdown
- Highlight.js

## Backend

- FastAPI
- Python
- Groq API
- Pydantic
- Uvicorn

---

# 📂 Project Structure

```text
SNAPPY_LLM
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.ts
│
├── backend
│   ├── app
│   │
│   ├── config
│   ├── providers
│   ├── routers
│   ├── schemas
│   ├── services
│   └── utils
│
└── README.md
```

---

# ⚙ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/aadi121k/SNAPPY_LLM.git

cd SNAPPY_LLM
```

---

## 2️⃣ Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs at:

```
http://localhost:5173
```

---

## 3️⃣ Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Runs at:

```
http://localhost:8000
```

---

# 🔑 Environment Variables

### Frontend

Create `.env`

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

### Backend

Create `.env`

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# 🧠 Supported Models

- Llama 3.3
- DeepSeek
- Gemma
- Kimi

---

# 🏗 Architecture

```text
            React + Vite
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
          AI Generated Response
```

---

# 🚀 Future Roadmap

- 📄 PDF Chat
- 🖼 Image Understanding
- 🎤 Voice Assistant
- 🌐 Web Search
- 📁 File Upload
- 🧠 Memory
- 🔐 Authentication
- ☁ Cloud Deployment
- 📤 Export Chat
- RAG Support

---

# 📷 Screenshots

> UI screenshots will be added soon.

---

# 👨‍💻 Developer

**Aditya Kumar Upadhyay**

AI & Machine Learning Engineer

GitHub

https://github.com/aadi121k

LinkedIn

https://www.linkedin.com/in/adityaupadhyay5k

---

# ⭐ Support

If you found this project helpful,

please consider giving it a ⭐ on GitHub.

It helps the project grow and motivates future development.

---

<p align="center">
Made with ❤️ using React, FastAPI and Groq
</p>
