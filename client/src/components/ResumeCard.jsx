import React from 'react'
import { Link } from 'react-router-dom'
import ScoreCircle from './ScoreCircle'

const ResumeCard = ({ resume }) => {
    console.log(resume)
    return (
        <Link to={`/resume/${resume.id}`} className='resume-card animate-in fade-in-10 duration-1000'>
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">{resume.companyName}</h2>
                    <h3 className="text-lg text-gray-500 break-words">{resume.jobTitle}</h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={resume.feedback.overallScore} />
                </div>
            </div>
        </Link>
    )
}

export default ResumeCard
