# eBook‑Shelf Backend

This is the backend (server / API) for the **eBook‑Shelf** project. It is built using **Express.js** and provides endpoints to be consumed by the frontend client.

## 📦 Features & Responsibilities

- HTTP API to fetch (and later: create, update, delete) book data  
- JSON-based request/response  
- CORS enabled to allow client requests  
- Express server with modular routing (you can expand)  
- Basic health check / root route  

## 🧱 Structure

```
backend/
├── server.js             # Entry point for the server
├── package.json          # Dependencies, scripts, etc.
└── (other modules)       # e.g. routes/, controllers/, models/ etc.
```

When expanded, you might have:

- `routes/` – define express routers  
- `controllers/` – logic for handling requests  
- `models/` – for data layer (e.g., DB models)  
- `middlewares/` – e.g. authentication, validation  

---

## 🔧 Getting Started (Backend Only)

### Prerequisites

- Node.js (v14 or higher recommended)  
- npm (or yarn)  

### Setup & Run

1. Navigate into backend folder:

   ```bash
   cd src/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) If you haven’t already, ensure `server.js` or your entry file is set up. A simple example:

   ```js
   import express from "express";
   import cors from "cors";

   const app = express();
   const PORT = process.env.PORT || 5000;

   app.use(cors());
   app.use(express.json());

   app.get("/", (req, res) => {
     res.send("Backend is running");
   });

   app.get("/api/books", (req, res) => {
     res.json([
       { id: 1, title: "Book One", author: "Author A" },
       { id: 2, title: "Book Two", author: "Author B" }
     ]);
   });

   app.listen(PORT, () => {
     console.log(`Server listening on port ${PORT}`);
   });
   ```

4. Add scripts in **`package.json`**:

   ```json
   {
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     }
   }
   ```

5. Start the server in development mode:

   ```bash
   npm run dev
   ```

6. It should now be listening (by default) on `http://localhost:5000/` or your configured port.


## 🛠️ Environment & Configuration

- Use environment variables (e.g. via `.env`) for sensitive config:
  - `PORT` — port number  
  - `DB_URI` — database connection string (if adding a DB)  
  - `NODE_ENV` — development / production  

- If you integrate a database (MongoDB, PostgreSQL, etc.), that logic could live in `models/` or `db/` folder.



