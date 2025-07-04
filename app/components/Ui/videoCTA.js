"use client"
import { useState, useEffect } from 'react';
import { IoPlayCircle } from "react-icons/io5";

const videoCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // Add overflow-hidden to body when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    // Restore scrolling when modal closes
    document.body.style.overflow = 'unset';
  };

  // Cleanup effect to ensure scrolling is restored if component unmounts while modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <section className="bg-[url('/images/home/Videocta.png')] bg-cover bg-top  -mt-20 xl:-mt-40 -mb-20 z-10 relative">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0  inset-0 bg-black/40 h-full w-full"></div> */}
        <div className="container mx-auto flex flex-col md:flex-row text-white items-center justify-center h-[600px] z-10 relative">
          <div className="w-full md:w-1/2">
            <h1 className="pb-5">Behind the Scenes
            Driving Innovation Forward</h1>
            <p className="pb-5">Step inside INEL and discover how our technology, expertise, and passion drive the future of automotive excellence.</p>
          </div>
          <div className="w-full md:w-1/2 pt-10 md:pt-0 flex justify-center items-center">
            <button onClick={openModal} >
              <IoPlayCircle className="text-6xl" />
            </button>   
          </div>
        </div>
      </section>
      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={closeModal}
          ></div>
          <div className="relative z-50 w-full max-w-4xl px-4">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video URL
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default videoCTA; 