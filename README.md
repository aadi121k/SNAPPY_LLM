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
- 🔐 Google Authentication (Firebase)
- 👤 Personalized User Profile
- 👨‍💻 Creator Profile Integration
- 🖼 Smart AI Image Engine
- 🖼 Dynamic Creator Image Support
- 🔗 Smart Website Navigation
- 💬 Conversation History
- 🧠 Context-Aware Conversation (Memory Foundation)
- 📝 Markdown Rendering
- 💻 Syntax Highlighting
- 📋 Copy Code Blocks
- 🔄 Regenerate Responses
- 🔍 Search Conversations
- ✏ Rename Chats
- 🗑 Delete Chats
- 💾 Local Chat Storage
- 🌙 Dark / Light Theme
- 📱 Fully Responsive UI
- 🎨 Modern ChatGPT-inspired Design
- ⚙ Smart Model Switching

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
- Wikimedia Commons API
- Firebase Authentication

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Firebase Authentication
- React Markdown
- React Syntax Highlighter
- Lucide React

### Backend

- FastAPI
- Python
- Pydantic
- Uvicorn
- Groq SDK
- Requests
- spaCy (Image Classification)
---

# 📂 Project Structure

```text
SNAPPY_LLM
│
├── frontend
│   ├── components
│   ├── contexts
│   ├── firebase
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── types
│   ├── utils
│   └── data
│
├── backend
│   ├── config
│   ├── providers
│   ├── routers
│   ├── schemas
│   ├── services
│   ├── static
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

VITE_API_URL=http://127.0.0.1:8000

VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=

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

- 🧠 Complete Long-Term Memory
- 📄 PDF Chat (RAG)
- 📎 File Upload & Analysis
- 🎥 Streaming Responses
- 🖼 Better Person Image Retrieval
- 🎤 Voice Assistant
- 🔊 Text To Speech
- 📤 Export Chats
- ☁ Cloud Chat Sync
- 🤖 AI Agents
- 🧩 Code Interpreter
- 🖼 AI Image Generation
- 🌍 Multi-language Support

---

# 📷 Screenshots
<img width="1277" height="635" alt="Screenshot 2026-07-14 181845" src="https://github.com/user-attachments/assets/a3b340c5-584e-4786-863b-adc7909fe6a0" />
<img width="1902" height="868" alt="Screenshot 2026-07-14 184434" src="https://github.com/user-attachments/assets/29eeba49-51ba-4947-9c1c-82e94b617027" />
<img width="1557" height="867" alt="Screenshot 2026-07-14 184501" src="https://github.com/user-attachments/assets/0c4ee35c-8171-4c7e-adb2-77a13293cf01" />
<img width="1562" height="870" alt="Screenshot 2026-07-14 184534" src="https://github.com/user-attachments/assets/cbceddad-8e8b-4a70-8eb3-92eb85147529" />
<img width="1570" height="865" alt="Screenshot 2026-07-14 184604" src="https://github.com/user-attachments/assets/fa8fd8fa-43a5-47ff-b38c-26607c62535d" />
<img width="1553" height="872" alt="Screenshot 2026-07-14 184643" src="https://github.com/user-attachments/assets/973f602c-b8ef-4f27-aecf-730b1b901fed" />

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

Specializing in:

- Artificial Intelligence
- Machine Learning
- Large Language Models (LLMs)
- Retrieval-Augmented Generation (RAG)
- Natural Language Processing (NLP)
- Full-Stack AI Development

🌐 Portfolio

https://adityaupadhyay.tech

💻 GitHub

https://github.com/aadi121k

💼 LinkedIn

https://linkedin.com/in/adityaupadhyay5k

📧 Email

aadikumar311@gmail.com

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
