# eBook‑Shelf
A simple bookshelf web app that lists eBooks, built with React (Vite) for the frontend and Express.js for the backend API.


##  Table of Contents
🧭
1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   1. [Prerequisites](#prerequisites)  
   2. [Setup & Run](#setup--run)  
5. [Project Structure](#project-structure)  
6. [API Endpoints](#api-endpoints)  
7. [eBook-Shelf Screenshots](#ebook-shelf-screenshots)  
8. [Get in Touch](#get-in-touch)  
9. [About](#about-me)
10. [Learning Hub](#your-all-in-one-learning-hub)



## About
📝
eBook‑Shelf is a minimal web application for showcasing a collection of eBooks. The frontend is built using React (via Vite), and it fetches data from a backend API powered by Express.js. The goal is to have a clean separation between client and server, making it easier to extend (e.g. add CRUD, authentication, etc.).


## Features
✨
- Display a list of books with title, author, and (optionally) other metadata  
- Basic API endpoint(s) to fetch book data  
- CORS enabled for cross-origin requests  
- React-based UI for easy expansion  
- Modular architecture (frontend + backend separation)  


## 🛠 Tech Stack

| Layer          | Technology / Library        |
|----------------|------------------------------|
| Frontend       | React, Vite                  |
| Routing        | React Router DOM             |
| Backend        | Express.js, Node.js          |



##  Getting Started

### Prerequisites

🚀 You should have the following installed on your machine:

- Node.js (v14+ recommended)  
- npm (comes with Node.js)  
- (Optionally) `yarn`, if you prefer it over npm  

### Setup & Run

1. Clone the repo  
   ```bash
   git clone https://github.com/sufyanism/eBook-Shelf.git
   cd eBook-Shelf

   Next, initialize a Vite project by typing:
   npm create vite
   ```
If manually then follow these steps,

First, make an ebook shelf folder on your computer.  All of the files for your project will be kept in this folder.
Proceed to the ebook shelf folder by opening the terminal.
Next, type the following to start a Vite project:

```npm create vite```

We want to use the current folder, so use a dot when asked for the project name.
After that, you'll be prompted to choose libraries.  Select the React router dom for this tutorial.
1. Next, choose the framework.  Select React.
2. Next, choose the language.  Select JavaScript.

After creating the project files, type the following to install all dependencies:

Installing NPM
Finally, start the development server with:
```npm run dev```

This will allow you to preview your project in your browser and launch it locally.


2. Setup the **backend**  
   ```bash
   cd src/backend
   npm install
   npm run dev
   ```
   This will start the Express server (e.g. on `http://localhost:5000`).

3. Setup the **frontend**  
   In a separate terminal:
   ```bash
   cd src/frontend
   npm install
   npm run dev
   ```
   This will run the React app (e.g. on `http://localhost:5173` or some similar port).

4. Open your browser to the React app’s URL. The frontend should fetch data from the backend and display the list of eBooks.

5. ➡ [Local Development Server](http://localhost:5173)

</br>
<div style="margin-top:20px;"></div> <!-- adds space above -->

##  Project Structure

```
🗂 eBook-Shelf/
├── src/
│   ├── backend/           # Express server code
│   │   ├── server.js       # Entry point for backend
│   │   └── …               # Other backend modules, routes, etc.
│   └── frontend/          # React (Vite) application
│       ├── src/            # React components, pages, etc.
│       └── …               
├── README.md
└── LICENSE
```

You can extend this structure over time (e.g. adding `routes/`, `controllers/`, `models/`, etc. in backend; `components/`, `pages/`, `services/` in frontend).

</br>
<div style="margin-top:20px;"></div> <!-- adds space above -->

##  API Endpoints

Here are some of the key backend endpoints:

🔌  | Method | Path            | Description                          |
    |--------|------------------|--------------------------------------|
    | GET    | `/`              | Basic health check (returns a message) |

You can further expand with endpoints for **create**, **update**, **delete** (CRUD) as needed, e.g. `POST /api/books`, `PUT /api/books/:id`, etc. 

</br>
<div style="margin-top:20px;"></div> <!-- adds space above -->

## eBook-Shelf Screenshots

### Screenshot
![Ebook Shelf](https://github.com/user-attachments/assets/d96c10f0-d8b2-4650-8f44-dadafa9c462d)

### Screecast
https://github.com/user-attachments/assets/332c4ef2-cc42-486e-a04d-d892ab84dc27

</br>
<div style="margin-top:20px;"></div> <!-- adds space above -->

##  Get in Touch
✉️ Feel free to connect with me on social media or reach out via my website. Let’s build something great together!
<p>
  <a href="https://github.com/sufyanism">
    <img alt="GitHub @Sufyanism" align="center" src="https://img.icons8.com/material-outlined/24/000000/github.png" />
  </a>&nbsp;
  <small><strong>     
     <img alt="GitHub @Sufyanism" align="center" src="https://img.shields.io/badge/Repositories-blue" />
  </strong> Stay updated on free & open-source projects</small>
</p>
<p>
  <a href="https://www.youtube.com/@zeba.academy">
    <img alt="YouTube" align="center" src="https://img.icons8.com/material-outlined/24/000000/youtube.png" />
  </a>&nbsp;
  <small><strong>(Subscribe)</strong> Watch videos for insights and tutorials.</small>
</p>
<p>
  <a href="https://code.zeba.academy/">
    <img alt="Site" align="center" src="https://img.icons8.com/material-outlined/24/000000/blog.png" />
  </a>&nbsp;
  <small><strong>(Read)</strong> Explore in-depth technical articles</small>
</p>
<p>
  <a href="https://www.linkedin.com/company/parakozm">
    <img alt="LinkedIn" align="center" src="https://img.icons8.com/material-outlined/24/000000/linkedin.png" />
  </a>&nbsp;
  <small><strong>(Stay Connect)</strong> Connect on my LinkedIn profile</small>
</p>
<p>
  <a href="https://www.instagram.com/zeba.academy/">
    <img alt="Instagram" align="center" src="https://img.icons8.com/material-outlined/24/000000/instagram.png" />
  </a>&nbsp;
  <small><strong>(Follow Us)</strong> Follow my Instagram for updates and insights</small>
</p>

</br>
<div style="margin-top:20px;"></div> <!-- adds space above -->

## About Me 
✨ I’m **Sufyan bin Uzayr**, an open-source developer passionate about building and sharing meaningful projects.
You can learn more about me and my work at [sufyanism.com](https://sufyanism.com/)

</br>

## Your all-in-one learning hub! 
🚀 Explore courses and resources in coding, tech, and development at **zeba.academy** and **code.zeba.academy**. Empower yourself with practical skills through curated tutorials, real-world projects, and hands-on experience. Level up your tech game today! 💻✨

</br>
<div style="margin-top:10px;"></div> <!-- adds space above -->

**Zeba Academy**  is a learning platform dedicated to **coding**, **technology**, and **development**.  
➡ Visit our main site: **[zeba.academy](https://zeba.academy)** 
</br>
➡ Explore hands-on courses and resources at: **[code.zeba.academy](https://code.zeba.academy)**

</br>
<div style="margin-top:30px;"></div> <!-- adds space above -->

**Thank you for visiting!** 

<div style="margin-bottom:20px;"></div> <!-- adds space above -->




