# 🤖 AI Interview Agent

An AI-powered interview preparation platform that helps users practice technical and HR interviews through realistic AI-generated questions and instant feedback.

## 🚀 Features

- 🎯 AI-generated interview questions
- 💬 Real-time interview simulation
- 🧠 Technical and HR interview rounds
- 📊 Instant feedback and evaluation
- 🔐 User Authentication
- 📁 Interview history tracking
- 📱 Responsive UI for all devices
- ⚡ Fast and interactive experience

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI Integration
- Groq API
- LLM-based interview question generation

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

---

## 📂 Project Structure

```bash
AI-Interview-Agent/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
├── README.md
└── .env
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Raghuveer222/AI-Interview-Agent.git
```

### Navigate to Project

```bash
cd AI-Interview-Agent
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the server directory and add:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key
```

---

## ▶️ Run Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

---

## 📸 Screenshots

### Home Page
![Home Page](client/public/AI%20Home.JPG)

### Interview Page
![Interview Page](client/public/AI%20Interview.JPG)

---

## 🎯 How It Works

1. User registers and logs in.
2. User selects interview type.
3. AI generates personalized interview questions.
4. User answers questions.
5. AI evaluates responses.
6. Feedback and performance analysis are displayed.

---

## Challenges Faced

- Managing AI response latency
- Designing a scalable interview workflow
- Securely handling authentication using JWT
- Integrating Groq API efficiently

---

## Key Learnings

- REST API development with Express.js
- State management in React
- Authentication and authorization
- MongoDB schema design
- AI API integration and prompt engineering

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Raghuveer Singh Panwar**

- GitHub: https://github.com/Raghuveer222
- LinkedIn: https://www.linkedin.com/in/raghuveer-singh-panwar-3864b52a0/
- 🔗 Live Demo: https://ai-interview-agent-1-6b2o.onrender.com

---

⭐ If you like this project, give it a star on GitHub!
