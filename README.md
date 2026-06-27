# FinTrack fullstack project 💰

A personal finance tracker I built to actually understand how a full stack app works end to end — not just frontend, not just backend, but connecting both and shipping it live.

**Live app:** [fintrack12311.netlify.app](https://fintrack12311.netlify.app)
**Backend API:** [fintrack-backend-production-9a96.up.railway.app](https://fintrack-backend-production-9a96.up.railway.app)

## What it does

Pretty simple idea — track your income and expenses, see your balance update in real time, and look at where your money's going with some charts. Nothing fancy, just wanted to build something I'd actually use myself.

- Register/login with proper password hashing (bcrypt) and JWT auth
- Add and delete transactions (income or expense)
- Dashboard with balance, total income, total expense
- Charts to visualize spending by category
- Fully responsive — works fine on mobile

## Why I built it this way

I wanted the frontend and backend to be completely separate and talk to each other through a proper REST API, like a real production app would. So:

- **Frontend** is its own React app, deployed on Netlify
- **Backend** is its own Express API, deployed on Railway
- **Database** is MongoDB Atlas (cloud, not local)

This was honestly the hardest part — getting CORS set up right so the deployed frontend could actually talk to the deployed backend, and dealing with MongoDB's IP whitelist when my network kept changing IPs (mobile hotspot moments). Learned more debugging that than I did writing the actual features.

## Tech Stack

**Frontend**
- React + TypeScript
- Redux Toolkit for state
- React Router for pages
- Tailwind CSS for styling
- Recharts for the dashboard charts
- React Hook Form + Zod for form validation
- Framer Motion for the small animations

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT for auth
- bcryptjs for password hashing

## Folder structure
fintrack-fullstack/

├── frontend/          → React app (Vite)

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── store/      → Redux slices

│   │   └── utils/       → axios config etc

│

└── backend/           → Express API

├── models/        → User.js, Transaction.js

├── routes/         → auth.js, financeRoutes.js

├── middleware/     → auth.js (JWT check)

└── server.js

## API endpoints
POST   /api/auth/register     create account

POST   /api/auth/login        login, returns JWT
GET    /api/transactions      get all transactions (protected)

POST   /api/transactions      add a transaction (protected)

DELETE /api/transactions/:id  delete a transaction (protected)

All the `/api/transactions` routes need a JWT token in the Authorization header, like:
Authorization: Bearer <your_token>

## Running it locally

**Backend:**
```bash
cd backend
npm install
# create a .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=anything_random
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Stuff I'd do differently next time

- Add proper input validation on the backend too, not just relying on frontend Zod validation
- Write some actual tests instead of just manually testing every route with Postman
- Probably move to Next.js for the frontend so I'm not managing two separate deployments

---

Built by [Shahid Roshan](https://github.com/shahid-roshan) — still learning, still shipping.
