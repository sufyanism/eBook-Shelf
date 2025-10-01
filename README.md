Here’s step-by-step modified version of  setup instructions for the ebook shelf project using Vite + React:


# Project Setup Instructions
mkdir ebook-shelf
cd ebook-shelf

## Initialize a new Vite project
npm create vite@latest .  

## Choose project options when prompted:
`Framework → React`
`Variant → JavaScript`

## Install dependencies
`npm install`

## Install React Router DOM
`npm install react-router-dom`

### Start the development server
`npm run dev`


# Backend server (Express.js) to your React (Vite) project. Here’s a step-by-step guide for setting up Express alongside your React frontend:

## Create a backend folder
Inside your project (ebook-shelf), create a folder for backend:
`mkdir backend`
`cd backend`

## Initialize backend project
npm init -y

## Install Express and Nodemon
npm install express cors
npm install --save-dev nodemon

## Update package.json
In the backend/package.json, add a dev script:
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

## Now you can run:
`npm run dev`

## Screencast
https://github.com/user-attachments/assets/31e0dd89-0c80-4708-bc54-f19fc7e0d217

## Screenshot
![Ebook Shelf](https://github.com/user-attachments/assets/33a7a333-b7cd-4833-a52a-f5794a9e1192)

