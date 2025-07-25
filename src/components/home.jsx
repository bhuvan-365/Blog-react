import React from 'react';
import Blogpost from './blogpost';

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-start items-center min-h-screen bg-gray-100 px-4 md:px-8 lg:px-16">
        <div
          className="relative bg-cover bg-center flex flex-col justify-center items-center rounded-3xl p-8 md:p-16 w-full max-w-[1200px] h-[60vh] md:h-[70vh] lg:h-[80vh]"
          style={{ backgroundImage: 'url("/src/assets/img/header.jpg")' }}
        >
          <div className="info text-white flex flex-col justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10 max-w-3xl px-2 text-center">
            <div className="bio text-2xl sm:text-3xl md:text-4xl font-semibold">
              A curious mind behind the screen
            </div>
            <div className="title text-4xl sm:text-5xl md:text-6xl font-bold">
              The Developer Log
            </div>
            <div className="about text-base sm:text-lg md:text-xl">
              Space where I document my journey in web development and share tips, tutorials, and thoughts on building better digital experiences. From React tricks to backend logic, you'll find real-world insights, clean code, and honest reflections here.
            </div>
          </div>
        </div>

        <div
          className="box absolute bottom-4 md:bottom-6 bg-white w-[90vw] max-w-[960px] h-[12vh] md:h-[14vh] rounded-2xl p-3 flex flex-col items-center"
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          }}
        >
          <div className="subtitle text-center text-gray-600 font-semibold underline mb-2">
            We talk about
          </div>
          <div className="flex justify-center items-center gap-6 md:gap-20 w-full">
            <div className="box1 flex justify-center">
              <img
                className="w-[50px] sm:w-[70px] h-[40px] sm:h-[50px] object-contain"
                src="/src/assets/img/nobgAdidas.png"
                alt="Logo 1"
              />
            </div>
            <div className="box2 flex justify-center">
              <img
                className="w-[50px] sm:w-[70px] h-[40px] sm:h-[50px] object-contain"
                src="/src/assets/img/nobgAdidas.png"
                alt="Logo 2"
              />
            </div>
            <div className="box3 flex justify-center">
              <img
                className="w-[50px] sm:w-[70px] h-[40px] sm:h-[50px] object-contain"
                src="/src/assets/img/nobgAdidas.png"
                alt="Logo 3"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 w-full max-w-[1200px] mx-auto" />

      <section className="blogs max-w-[1200px] mx-auto px-4 md:px-8">
        <Blogpost />
      </section>
    </>
  );
};

export default Home;
