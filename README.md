# 🚀 SNAPPY LLM

<p align="center">
  <img src="./frontend/public/logo.png" width="140" alt="SNAPPY LLM Logo">
</p>

<h1 align="center">SNAPPY LLM</h1>

<p align="center">
Fast ⚡ Smart 🧠 Modern AI Assistant
</p>

<p align="center">
Built with React, FastAPI, Groq, Tavily & Modern AI Technologies
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11-yellow?logo=python)
![Groq](https://img.shields.io/badge/Groq-LLM-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 📖 Overview

SNAPPY LLM is a modern AI-powered conversational assistant inspired by ChatGPT. It combines **Groq LLMs**, **real-time web search**, **AI image responses**, and a clean React interface to deliver fast, intelligent and interactive conversations.

The project is built with a scalable **React + FastAPI** architecture and is designed for portfolios, hackathons and production-ready AI applications.

---

# 🚀 Current Features

- 🤖 Real AI Responses (Groq)
- ⚡ Ultra Fast Inference
- 🧠 Multiple AI Models
- 🌐 Real-Time Web Search (Tavily)
- 🖼 AI Image Responses
- 🔗 Smart Website Navigation
- 💬 Conversation History
- 📝 Markdown Rendering
- 💻 Syntax Highlighting
- 📋 Copy Code Blocks
- 🔄 Regenerate Responses
- 🔍 Search Conversations
- ✏ Rename Chats
- 🗑 Delete Chats
- 💾 Local Storage
- 🌙 Dark / Light Theme
- 📱 Fully Responsive UI
- 🎨 Modern ChatGPT-inspired Design

---

# 🧠 Supported Models

- Llama 3.3
- DeepSeek
- Gemma
- Kimi

---

# 🌐 APIs Used

- Groq API
- Tavily Search API
- Unsplash API

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

### Backend

- FastAPI
- Python
- Pydantic
- Uvicorn
- Groq SDK

---

# 📂 Project Structure

```text
SNAPPY_LLM
│
├── frontend
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── types
│   └── utils
│
├── backend
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

# ⚙️ Installation

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

Runs at:

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

Runs at

```
http://127.0.0.1:8000
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
```

---

# 🏗 System Architecture

```text
                      React + Vite
                            │
                            ▼
                     FastAPI Backend
                            │
          ┌─────────────────┼──────────────────┐
          ▼                 ▼                  ▼
      Groq API        Tavily Search      Image Engine
          │                 │                  │
          └─────────────────┴──────────────────┘
                            │
                            ▼
                    SNAPPY LLM Engine
                            │
                            ▼
                  AI Generated Response
```

---

# 🚀 Current Capabilities

- AI Chat Assistant
- Multiple LLM Support
- Real-Time Web Search
- AI Image Responses
- Markdown Rendering
- Code Highlighting
- Copy Code Button
- Smart Website Opening
- Conversation History
- Responsive UI
- Dark & Light Theme

---

# 🛣 Roadmap

- 👤 Better Person Images (Wikipedia API)
- 📄 PDF Chat (RAG)
- 📎 File Upload
- 🎥 Streaming Responses
- 🖼 Image Understanding
- 🎤 Voice Assistant
- 🔊 Text To Speech
- 🧠 Long-Term Memory
- 📤 Export Chats
- 🔐 Authentication
- ☁ Deploy (Vercel + Render)
- 🌍 Multi-language Support

---

# 📷 Screenshots

> Screenshots & demo GIFs will be added soon.

---

# 💡 Why SNAPPY LLM?

✅ Fast AI responses using Groq

✅ Real-time web search

✅ AI image support

✅ Beautiful modern UI

✅ Multiple LLM selection

✅ Clean and scalable architecture

✅ Portfolio & Hackathon ready

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

Contributions, feature suggestions and pull requests are welcome.

If you find a bug or have an improvement idea, feel free to open an Issue.

---

# ⭐ Support

If you like this project,

please give it a ⭐ on GitHub.

It motivates future development.

---

<p align="center">

Made with ❤️ using React, FastAPI, Groq, Tavily & Modern AI

</p>
