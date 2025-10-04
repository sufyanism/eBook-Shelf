# eBook-Shelf Frontend

This is the **frontend application** for the [eBook-Shelf](https://github.com/sufyanism/eBook-Shelf) project.  
It is built using **React + Vite** and communicates with the backend (Express.js API) to display and manage eBooks.

---

## ✨ Features

- 📚 Display a list of books fetched from the backend  
- 🔄 React Router DOM for client-side routing (e.g., Home, About, Book Details)  
- ⚡ Built with **Vite** for fast development and optimized builds  
- 🎨 Simple, modular component structure for easy extension  
- 🔗 Connects seamlessly with the backend API  

---

## 🛠 Tech Stack

| Layer     | Technology / Library |
|-----------|-----------------------|
| Frontend  | React (with Vite)     |
| Routing   | React Router DOM      |
| Styling   | CSS / Tailwind (optional) |
| API Calls | Fetch API / Axios     |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later recommended)  
- npm (comes with Node.js)  

### Setup

1. Navigate into the frontend folder:
   ```bash
   cd src/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open your browser at the provided URL (usually `http://localhost:5173`)  

⚡ Make sure the backend server is running (default: `http://localhost:5000`) so the frontend can fetch data.

---

## 📂 Project Structure

```
frontend/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components (Home, Books, About, etc.)
│   ├── App.jsx          # Main app component with routes
│   ├── main.jsx         # Entry point for React app
│   └── assets/          # Static assets (images, css, etc.)
├── index.html           # Root HTML file
├── package.json
└── vite.config.js       # Vite configuration
```

---

## 🔗 API Connection

The frontend expects a backend server running at:  

- `GET http://localhost:5000/api/books` → Fetches list of books  

You can update API URLs in a service file (e.g., `src/services/api.js`) if needed.

---

## 🧩 Example Usage

```jsx
import { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2>📚 Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} — {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
```

---

## 🤝 Contributing

1. Fork this repo  
2. Create a new branch (`feature/your-feature`)  
3. Commit changes and push  
4. Open a Pull Request  

---

## 📜 License

This frontend is licensed under the same license as the main project (MIT).  
See the [LICENSE](../../LICENSE) file in the root for details.
