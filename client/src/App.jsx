import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import { resumes } from '../constant'
import ResumeCard from './components/ResumeCard'

function App() {


  return (
    <BrowserRouter>
      <main className="w-full  bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section className="main-section">
          <div className="page-heading">
            <h1>Track Your Applications & Resume Ratings</h1>
            <h2>Review your submissions and check AI-powered feedback.</h2>
          </div>
        </section>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}


      </main>
    </BrowserRouter>
  )
}

export default App
