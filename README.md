🎤 TaskVoice AI

A voice-enabled intelligent task manager powered by Natural Language Processing (NLP).
Simply speak your tasks — the system automatically:

Extracts due dates

Detects priority

Categorizes status

Saves it to database

Manage tasks manually or by voice, with a clean Kanban board UI.

🚀 Live Demo
Component	Link
🌐 Frontend	👉 https://voice-task-tracker-jzynq5zsg-kalmeshsaunshi01s-projects.vercel.app/
⚙️ Backend API	👉 https://voice-task-backend1-1.onrender.com
📂 GitHub Repo	👉 https://github.com/kalmeshsaunshi01

🎯 Features
✔ Voice-to-text task creation
✔ NLP-powered smart task parsing
✔ Full CRUD: Add, Update, Delete
✔ Kanban board layout (To Do / In Progress / Done)
✔ Search tasks
✔ Responsive design
✔ Deployed backend + frontend

🧠 NLP Smart Understanding Examples
Spoken Command	Saved Task Output
"Buy groceries tomorrow high priority"	Title: Buy groceries, Priority: High, Due: Tomorrow
"Finish report next Monday"	Title: Finish report, Due: Next Monday
"Call John"	Title: Call John (default settings)

🔧 Tech Stack
Frontend :	React, Vite, Bootstrap, Axios
Backend:	Node.js, Express.js
Database:	MongoDB Atlas
NLP: Custom rule-based parser
Deployment:	Vercel (Frontend), Render (Backend)


📦 Installation (Local Setup)

1️⃣ Clone the repo

git clone <your repo url>

cd voice-task-manager

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongo_connection_string
PORT=5000

Start server:
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

📡 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a task
PUT	/api/tasks/:id	Update status
DELETE	/api/tasks/:id	Delete task
Sample Create Request:
{
  "title": "Buy milk",
  "priority": "High",
  "status": "To Do",
  "dueDate": "2025-01-10"
}


🔮 Future Enhancements

   🔔 Notification reminders

   🔑 User login (JWT & OAuth)

  📱 Mobile PWA mode

  🧠 AI-powered summarization

  📅 Calendar view

📝 License

This project is open source and available under the MIT License.

Author
👤 Kalmesh C Saunshi
🚀 Full-Stack Developer & AI Enthusiast

