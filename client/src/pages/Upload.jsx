import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FileUploader from '../components/FileUploader'
import { usePuterStore } from '../lib/puter';
import { useNavigate } from 'react-router-dom';
import { convertPdfToImage } from '../lib/pdf2img';
import { generateUUID } from '../lib/utils';
import { prepareInstructions } from '../../constant';

const Upload = () => {
    const navigate = useNavigate();
    const { auth, isLoading, fs, ai, kv } = usePuterStore();
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget.closest('form')
        if (!form) return;
        const formData = new FormData(form);

        const companyName = formData.get('company-name');
        const jobTitle = formData.get('job-title');
        const jobDescription = formData.get('job-description');
        console.log(
            companyName, jobTitle, jobDescription
        )
        if (!file) return;
        handleAnalyze({ companyName, jobTitle, jobDescription, file });
    }

    const handleAnalyze = async ({ companyName, jobDescription, jobTitle, file }) => {
        setIsProcessing(true)

        setStatusText('Uploading the file...');
        const uploadedFile = await fs.upload([file]);
        if (!uploadedFile) return setStatusText('Error: Failed to upload file');
        setStatusText('Converting to image...');
        const imageFile = await convertPdfToImage(file);
        if (!imageFile.file) return setStatusText('Error: Failed to convert PDF to image');

        setStatusText('Uploading the image...');
        const uploadedImage = await fs.upload([imageFile.file]);
        if (!uploadedImage) return setStatusText('Error: Failed to upload image');
        setStatusText('Preparing data...');
        const uuid = generateUUID();
        const data = {
            id: uuid,
            resumePath: uploadedFile.path,
            imagePath: uploadedImage.path,
            companyName,
            jobTitle,
            jobDescription,
            feedback: '',
        };
        await kv.set(`resume:${uuid}`, JSON.stringify(data));

        setStatusText('Analyzing...');
        const feedback = await ai.feedback(
            uploadedFile.path,
            prepareInstructions({ jobTitle, jobDescription })
        );
        if (!feedback) return setStatusText('Error: Failed to analyze resume');

        const feedbackText = typeof feedback.message.content === 'string'
            ? feedback.message.content
            : feedback.message.content[0].text;

        data.feedback = JSON.parse(feedbackText);
        await kv.set(`resume:${uuid}`, JSON.stringify(data));
        setStatusText('Analysis complete, redirecting...');
        console.log({message: data});
        // navigate(`/resume/${uuid}`);
    }

    const handleFileSubmit = (file) => {
        setFile(file)
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
                    {!isProcessing &&
                        (
                            <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                                <div className="form-div text-black">
                                    <label htmlFor="company-name">Company Name</label>
                                    <input type="text" name='company-name' placeholder='Company Name' id='company-name' />
                                </div>
                                <div className="form-div text-black">
                                    <label htmlFor="job-title">Job Title</label>
                                    <input type="text" name='job-title' placeholder='Job title' id='job-title' />
                                </div>
                                <div className="form-div text-black">
                                    <label htmlFor="job-description">Job Description</label>
                                    <textarea type="text" name='job-description' placeholder='Job description' id='job-description' />
                                </div>
                                <div className="form-div text-black">
                                    <label htmlFor="uploader">Uploader Resume</label>
                                    <FileUploader onFileSelect={handleFileSubmit} />
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
