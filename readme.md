# Resume ATS

An interactive resume analyzer and builder built with React + Vite, featuring ATS (Applicant Tracking System) scoring, resume parsing, and an upload system.

## Features

📂 Resume Upload & Parsing – Upload resumes (PDF) and get text/image extracted.

🎯 ATS Scoring – Evaluate resumes with ATS compatibility.

📊 Visual Resume Insights – Score gauges, badges, and summary views.

🗂️ Accordion-based UI – Expandable sections for structured resume details.

🔐 Authentication System – Simple auth flow for user sessions.

⚡ Fast & Scalable – Built with React 18, Vite, and modern ES modules.

## 🛠️Tech Stack
### 📌 Roadmap / To-Do
  Add resume keyword matching for ATS

 Enable cloud-based file storage

 Enhance authentication (OAuth support)

 AI-powered resume improvement suggestions

### Frontend
Frontend: React 18, Vite

Styling: CSS (custom + components)

Linting & Quality: ESLint

PDF/Utility: Custom PDF → Image converter, file storage utils

Components: Modular, reusable React components

### Directory Structure

Edit
```
└── samswnshi-resume/
└── client/                 # Frontend source
    ├── README.md           # Project documentation
    ├── eslint.config.js    # ESLint configuration
    ├── index.html          # App entry HTML
    ├── package.json        # Dependencies and scripts
    ├── vite.config.js      # Vite configuration

    ├── constant/
    │   └── index.js        # App-wide constants

    └── src/
        ├── App.css         # Global styles
        ├── App.jsx         # Root application component
        ├── index.css       # Base styles
        ├── main.jsx        # React entry point

        ├── components/     # Reusable UI components
        │   ├── Accordion.jsx
        │   ├── ATS.jsx
        │   ├── Auth.jsx
        │   ├── Details.jsx
        │   ├── FileUploader.jsx
        │   ├── Footer.jsx
        │   ├── Navbar.jsx
        │   ├── ResumeCard.jsx
        │   ├── ScoreBadge.jsx
        │   ├── ScoreCircle.jsx
        │   ├── ScoreGuage.jsx
        │   └── Summary.jsx

        ├── lib/            # Core logic / utilities
        │   ├── pdf2img.js  # PDF → Image conversion utils
        │   ├── puter.js    # Storage/upload handling
        │   └── utils.js    # Helper functions

        └── pages/          # Main app pages
            ├── Home.jsx
            ├── Resume.jsx
            ├── Upload.jsx
            └── Wipe.jsx
  
```
## Installation


### Steps:
1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-username>/samswnshi-resume.git
  
   ```

2. **Setup Client:**
   ```sh
   cd client
   npm install
   npm run dev
   ```


## Deploy

```
* Frontend: https://task-management-sameer-suryawanshis-projects.vercel.app
```

## Technologies

_Name the technologies used in the project._ 
* [Vite](https://spring.io/) - Framework Used.
* [React](https://reactjs.org/) - UI Library.


## Contributing

Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes

Commit your changes (git commit -am 'Add new feature')

Push to the branch (git push origin feature-name)

Open a pull request


## License
This project is licensed under the MIT License..