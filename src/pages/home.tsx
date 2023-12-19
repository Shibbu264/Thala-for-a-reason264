import React, { useState, ChangeEvent, MouseEvent, useRef, useEffect } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner'
import CONNECTWITHME from '@/components/mycontact';
import Image from 'next/image';
import Head from 'next/head';

// Import react-loader
export default function Homepage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // New state for loading

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    
  };
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the video when it becomes visible
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [apiResponse]); //
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    if(!inputValue){alert("Type something !")
    return;}
    e.preventDefault();
    setIsLoading(true)
    setApiResponse('')
    try {
      const response = await axios.post('/api/openai', { prompt: inputValue });
      setApiResponse(response.data.botResponse);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error('Error calling OpenAI API:', error);
      setApiResponse('Api limit exceeded try again later');
    }
  };

  return (
    <>
    <Head>
       
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        
      </Head>
    <main className="min-h-screen justify-between">
      
     <Image
  src="/thalajpg.jpg"
  alt="Thala Image"
  width={150}
  height={120}
  className="block mt-4 mx-auto"
/>
      <h1 className='text-3xl text-center font-bold h-3 my-10'>This is Thalaverse and We are just living in it. !</h1>
      <div className='text-center gap-4'>
        
        <input

          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type anything !"
          className="p-2  block sm:w-96 sm:my-4 mt-24 mb-4 mx-auto border rounded border-gray-300 text-black font-semibold text-base"
        />
        {isLoading?
        <div className='flex justify-center my-3'>
        <Audio
  height="80"
  width="80"
  color="green"
  ariaLabel="loading"
 
/></div>:<button
          onClick={handleSubmit}
          className="p-2 rounded w-36 block mx-auto bg-blue-500 font-semibold text-white text-base hover:bg-blue-700 focus:outline-none"
        >
          Try!
        </button>}
        {apiResponse && (
          <>
  <div className="mt-4 text-center">
    <div className="bg-green-200 sm:w-fit w-72  text-xl block mx-auto text-green-800 py-2 px-4 rounded-md">
      {apiResponse}
    </div>
  </div>
  <div className='flex justify-center my-6'>
  <video controls width="600" autoPlay autoFocus>
        <source src="/thala.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      </>

)}
<CONNECTWITHME/>
      </div>
    </main>
    </>
  );
}