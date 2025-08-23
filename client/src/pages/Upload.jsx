import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();

    }
    return (
        <main className="  background bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src='/images/resume-scan.gif' className='w-96 h-96 ' />
                        </>
                    ) : (
                        <h2>Drop your resume for an ATS score and improvement tips.</h2>
                    )}
                    {!isProcessing  && 
                    (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                            <div className="form-div text-black">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name='company-name' placeholder='Company Name' id='company-name' />
                            </div>
                            <div className="form-div text-black">
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" name='job-title' placeholder='Job title' id='job-title'/>
                            </div>
                            <div className="form-div text-black">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea type="text" name='job-description' placeholder='Job description' id='job-description'/>
                            </div>
                            <div className="form-div text-black">
                                <label htmlFor="uploader">Uploader Resume</label>
                                <div>Uploader</div>
                            </div>
                            <button className="primary-button" type='submit'>
                                Analyze Resume
                            </button>
                        </form>
                    )}
                </div>

            </section>
        </main>
    )
}

export default Upload
