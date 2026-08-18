# MovieFlix

This is a responsive movie discovery and ratings web application built with React and Vite, powered by the TMDB API and searched data is stored in supabase cloud. The Website also uses Tailwind CSS styling methods.

Live Demo: [https://movieflixrate.netlify.app/](#)

## About The Project
MovieFlix is a frontend web application that allows users to discover movies and view movie ratings and information using data retrieved from the TMDB API.

This project was built to strengthen my understanding in React, API integration, component-based development, asynchronous Javascript, and responsive web-design.

## Features
* Browse movies and movie information
* View movie ratings
* View Popular movies on landing page
* Retrieve data on movies dynamically from the TMDB API
* Responsive user interface
* Component-based React architecture
* Deployed and accessible online

## Tech Stack
| **Technology** |**Purpose**                   |
|:-----------|:---------------------------------|
|React       |Frontend development              |
|Javascript  |Application logic                 |
|Vite        |Development server and build tool |
|Tailwind CSS|Styling and responsive design     |
|Github      |Version Control                   |
|Netlify     |Deployment                        |
|Supabase    |Cloud Storage                     |


## Project Structure
```text
Movieflix/ 
├── public/ 
├── src/ │ 
|   ├── assets/ 
|   ├── components/ 
|       ├── MovieCards.jsx
|       ├── Search.jsx
|       ├── Spinner.jsx
│   ├── App.css
│   ├── App.jsx 
│   └── main.jsx 
|   ├── Supabase.js
├── .gitignore 
├── eslint.config.js 
├── index.html 
├── package.json 
├── vite.config.js 
└── README.md
```

##  Getting Started
**Prerequisites**

Make sure you have installed
* Node.js
* npm
* Github

**Installation**
- Clone the respository
```ruby
git clone https://github.com/Tuitoek/Movieflix.git
```

- Navigate to the project directory
```ruby
cd Movieflix
```

- Install the dependencies:

```ruby
npm install
```

- Start the development server:

```ruby
npm run dev
```
- Open the local development URL provided by Vite in your browser.
```ruby
https://localhost:5000
```

## Environment Variables
If your TMDB API key is stored as an environment variable, create a .env file in the root directory:

``` ruby
VITE_TMDB_API_KEY=your_api_key
VITE_SUPABASE_URL = your_supabase_url
VITE_SUPABASE_ANON_KEY = your_supabase_anon_key
```
**Note**
*Do not commit your .env file or expose your API key in repo*

## Author
*Sarah Tuitoek*

*If you like the project, consider giving the repository a star!*