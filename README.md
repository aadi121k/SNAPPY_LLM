# 🚀 SNAPPY LLM

<p align="center">
  <img src="./frontend/public/logo.png" width="140" alt="SNAPPY LLM Logo">
</p>

<h1 align="center">SNAPPY LLM</h1>

<p align="center">
Fast • Smart • Modern AI Assistant
</p>

<p align="center">
Built with React, FastAPI, Groq & Modern AI Technologies
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

SNAPPY LLM is a modern AI-powered conversational assistant built using a production-ready React + FastAPI architecture.

Unlike basic chatbot demos, SNAPPY connects to real Large Language Models through the **Groq API**, delivering intelligent responses with an elegant, responsive user interface.

The project is designed for scalability, clean architecture, and real-world AI applications, making it ideal for portfolios, internships, hackathons, and production-ready projects.

---

# ✨ Features

- 🤖 Real AI Responses using Groq LLM
- ⚡ Ultra Fast Inference
- 🧠 Multiple AI Models
- 🌐 Smart Website Navigation
- 💬 Conversation History
- 📝 Markdown Rendering
- 💻 Code Syntax Highlighting
- 📋 Copy Code Blocks
- 🔄 Regenerate Responses
- 🔍 Search Conversations
- ✏ Rename Conversations
- 🗑 Delete Conversations
- 💾 Local Storage Support
- 🌙 Dark / Light Theme
- 📱 Fully Responsive Design
- 🎨 Modern UI / UX
- 🏗 Modular & Scalable Architecture

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Markdown
- React Syntax Highlighter
- Lucide React

---

## Backend

- FastAPI
- Python
- Groq API
- Tavily Search API (Foundation)
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

Runs on:

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

Runs on:

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
TAVILY_API_KEY=YOUR_TAVILY_API_KEY
```

---

# 🧠 Supported Models

- Llama 3.3
- DeepSeek
- Gemma
- Kimi

---

# 🏗 System Architecture

```text
                    React + Vite
                          │
                          ▼
                  FastAPI Backend
                          │
          ┌───────────────┴───────────────┐
          ▼                               ▼
     Groq LLM API                 Tavily Search API
          │                               │
          └───────────────┬───────────────┘
                          ▼
                    SNAPPY LLM Engine
                          │
                          ▼
                  AI Generated Response
```

---

# 🚀 Current Capabilities

- AI Chat Assistant
- Multiple LLM Selection
- Markdown Support
- Syntax Highlighting
- Smart Website Links
- Conversation Management
- Modern Responsive Interface
- Local Conversation Storage

---

# 🛣 Future Roadmap

- 🌐 Real-Time Web Search
- 📎 File Upload (PDF, DOCX, Images)
- 📄 PDF Chat (RAG)
- 🖼 Image Understanding
- 🎤 Voice Assistant
- 🔊 Text-to-Speech
- 🧠 Long-Term Memory
- 📤 Export Chat
- 🔐 Authentication
- ☁ Deployment (Vercel + Render)
- 📊 Chat Analytics
- 📌 Pin Conversations
- 🌍 Multi-language Support

---

# 📷 Screenshots

> Screenshots and demo GIFs will be added in future releases.

---

# 👨‍💻 Developer

**Aditya Kumar Upadhyay**

AI & Machine Learning Engineer

**GitHub**

https://github.com/aadi121k

**LinkedIn**

https://www.linkedin.com/in/adityaupadhyay5k

---

# 🤝 Contributing

Contributions, feature suggestions and pull requests are welcome.

If you find a bug or have an improvement idea, feel free to open an issue.

---

# ⭐ Support

If you found this project helpful,

please consider giving it a ⭐ on GitHub.

It motivates future development and helps the project grow.

---

<p align="center">

Made with ❤️ using React, FastAPI, Groq & Python

</p>
