import React from 'react';
import farmerImg from '../assets/farmerImg.jpg';

function Home() {
  return (
    <div id="/" className="min-h-screen">
      {/* Navbar */}
       
      
      {/* <ImageCarousel /> */}
      <div className="flex flex-wrap justify-center items-center bg-white gap-x-4 px-4 py-12">
        <img src={farmerImg} alt="Farmer" className="w-64 h-auto rounded-md shadow-md" />
        <img src={farmerImg} alt="Farmer" className="w-64 h-auto rounded-md shadow-md" />
        <img src={farmerImg} alt="Farmer" className="w-64 h-auto rounded-md shadow-md" />
      </div>

      <div className="flex min-h-screen justify-center items-start bg-white px-4 py-12">
      <div className="w-full max-w-2xl rounded-lg border border-gray-300 bg-green-200 p-8 shadow-md justify-center items-start">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Krishi AI
        </h1>
        <p className="text-gray-700 text-base leading-relaxed text-justify">
          In India, farmers form the backbone of the economy, yet they often
          lack access to reliable platforms where they can share their
          challenges, seek guidance, or discuss agricultural
          practices—especially in their own language. To address this gap, our
          project introduces a{" "}
          <span className="font-semibold text-green-700">Farmer Web Forum</span>
          —a dedicated, multilingual online platform designed to empower farmers
          through digital collaboration.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Home;
