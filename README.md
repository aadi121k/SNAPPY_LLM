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

SNAPPY LLM is a modern AI-powered conversational assistant built with a production-ready **React + FastAPI** architecture.

Unlike traditional chatbot demos, SNAPPY integrates real Large Language Models through the **Groq API**, supports **real-time web search**, **AI-powered image responses**, and delivers a clean, responsive, ChatGPT-inspired experience.

The project is designed with scalability, modular architecture, and future AI capabilities in mind, making it suitable for portfolios, internships, hackathons, and production-ready AI applications.

---

# 🚀 Project Status

> 🟢 **Actively Under Development**

### Latest Features

- ✅ Real AI Responses
- ✅ Multiple AI Models
- ✅ Real-Time Web Search
- ✅ AI Image Support
- ✅ Markdown Rendering
- ✅ Syntax Highlighting
- ✅ Smart Website Navigation
- ✅ Modern Dark / Light Theme

---

# ✨ Features

- 🤖 Real AI Responses using Groq LLM
- ⚡ Ultra Fast Inference
- 🧠 Multiple AI Models
- 🌐 Real-Time Web Search (Tavily)
- 🖼 AI Image Support
- 🔗 Smart Website Navigation
- 💬 Conversation History
- 📝 Markdown Rendering
- 💻 Code Syntax Highlighting
- 📋 Copy Code Blocks
- 🔄 Regenerate Responses
- 🔍 Search Conversations
- ✏ Rename Conversations
- 🗑 Delete Conversations
- 💾 Local Storage
- 🌙 Dark / Light Theme
- 📱 Responsive Design
- 🎨 Modern ChatGPT Inspired UI
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
- React Syntax Highlighter
- Lucide React

---

## Backend

- FastAPI
- Python
- Groq API
- Tavily Search API
- Unsplash API
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
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── services
│   ├── pages
│   └── package.json
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

## Clone Repository

```bash
git clone https://github.com/aadi121k/SNAPPY_LLM.git

cd SNAPPY_LLM
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Runs on

```
http://localhost:8000
```

---

# 🔑 Environment Variables

## Frontend

Create `.env`

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

## Backend

Create `.env`

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

TAVILY_API_KEY=YOUR_TAVILY_API_KEY

UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY

PEXELS_API_KEY=YOUR_PEXELS_API_KEY
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
          ┌─────────────────────┼──────────────────────┐
          ▼                     ▼                      ▼
      Groq LLM            Tavily Search          Image Engine
          │                     │                      │
          └──────────────┬──────┴──────────────┬──────┘
                         ▼                     ▼
                  AI Response            Unsplash Images
```

---

# 🚀 Current Capabilities

- 🤖 AI Chat Assistant
- 🧠 Multiple LLM Selection
- 🌐 Real-Time Web Search
- 🖼 AI Image Responses
- 📝 Markdown Rendering
- 💻 Syntax Highlighting
- 📋 Copy Code Blocks
- 🔗 Smart Website Navigation
- 💬 Conversation History
- 💾 Local Storage
- 🌙 Dark / Light Theme
- 📱 Responsive UI

---

# 🛣 Roadmap

- 📄 PDF Chat (RAG)
- 📎 File Upload
- 👤 Better Person Images (Wikipedia API)
- 🎥 Streaming Responses
- 🖼 Image Understanding
- 🎤 Voice Assistant
- 🔊 Text To Speech
- 🧠 Long-Term Memory
- 📤 Export Chats
- 🔐 Authentication
- ☁ Deployment (Vercel + Render)
- 📊 Chat Analytics
- 📌 Pin Conversations
- 🌍 Multi-language Support

---

# 📷 Screenshots

> Screenshots, GIFs and Live Demo will be added soon.

---

# 👨‍💻 Developer

### Aditya Kumar Upadhyay

AI & Machine Learning Engineer

**GitHub**

https://github.com/aadi121k

**LinkedIn**

https://www.linkedin.com/in/adityaupadhyay5k

---

# 🤝 Contributing

Contributions, feature requests, suggestions and pull requests are welcome.

If you find any bugs or have ideas to improve SNAPPY LLM, feel free to open an Issue or Pull Request.

---

# ⭐ Support

If you found this project useful,

please consider giving it a ⭐ on GitHub.

Your support motivates future development.

---

<p align="center">

Made with ❤️ using React, FastAPI, Groq, Tavily & Modern AI Technologies

</p>
