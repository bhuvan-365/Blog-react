import React from 'react';
import Blogpost from './blogpost';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col justify-start items-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-16 pb-24">
        {/* Hero Image Container */}
        <div
          className="relative bg-cover bg-center flex flex-col justify-center items-center rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 w-full max-w-[1200px] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
          style={{ 
            backgroundImage: 'url("/src/assets/img/header.jpg")',
            backgroundPosition: 'center center'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-white flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 max-w-3xl px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              A curious mind behind the screen
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              The Developer Log
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl hidden sm:block">
              Space where I document my journey in web development and share tips, tutorials, and thoughts on building better digital experiences. From React tricks to backend logic, you'll find real-world insights, clean code, and honest reflections here.
            </p>
          </div>
        </div>

        {/* Floating Info Box */}
        <div
          className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 bg-white w-[90vw] max-w-[960px] h-auto min-h-[100px] sm:min-h-[120px] md:min-h-[140px] rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-xl"
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          }}
        >
          <h3 className="text-center text-gray-600 font-semibold underline mb-2 text-sm sm:text-base md:text-lg">
            We talk about
          </h3>
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-20 w-full py-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex justify-center">
                <img
                  className="w-10 sm:w-12 md:w-14 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-14 object-contain"
                  src="/src/assets/img/nobgAdidas.png"
                  alt={`Logo ${item}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-16 sm:my-20 md:my-24 w-full max-w-[1200px] mx-auto px-4">
        <hr className="border-t-2 border-gray-200" />
      </div>

      {/* Blog Posts Section */}
      <section className="blogs max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-16">
        <Blogpost />
      </section>
    </>
  );
};

export default Home;