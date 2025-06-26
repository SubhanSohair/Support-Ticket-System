# 🛠️ Support Ticket System (Fullstack)

A full-stack support ticket management system using:

- **FastAPI** (Python) for backend
- **React + Vite** for frontend (no Tailwind)
- **SQLite** for persistent storage
- **Axios** for API integration

---

## ⚙️ Project Structure

```
support-ticket-system/
├── support-ticket-frontend/   # Frontend (React + Vite)
├── main.py                    # Backend entrypoint (FastAPI)
├── models.py, schemas.py      # SQLAlchemy + Pydantic
├── tickets.db                 # SQLite database
└── README.md
```

---

## 🚀 How to Run This Project

### ✅ 1. Clone the Repo

```bash
git clone <your-repo-url>
cd support-ticket-system
```

---

### ✅ 2. Start the Backend (FastAPI)

```bash
# Step into backend root
pip install -r requirements.txt

# Run the backend server
uvicorn main:app --reload
```

- 📌 Open API Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

### ✅ 3. Start the Frontend (React)

```bash
cd support-ticket-frontend
npm install
npm run dev
```

- 📌 View the App: [http://localhost:5173](http://localhost:5173)

---

## 🔍 Features

- 🎟️ Create, update, and filter support tickets
- 📊 Stats summary by status
- 🎨 Clean, mobile-friendly UI
- 🌐 CORS enabled for frontend-backend integration

---

## 🤖 AI Tools Used

- ChatGPT (UI structure, FastAPI scaffolding)
- GitHub Copilot (boilerplate cleanup)

---

## ✅ Extra Notes

- Tested on Python 3.10+ and Node 18+
- SQLite file is auto-generated (`tickets.db`)
- FastAPI auto-generates docs at `/docs`

---

## 📷 UI Preview

> View screenshots in the repo or test locally
