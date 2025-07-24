import React from 'react'
import Navbar from './navbar'
import Blogpost from './blogpost'


const home = () => {


    return (
        <>
            
            
                <section className='flex flex-col justify-start items-center h-screen bg-gray-100'>
                    <div className='relative bg-cover bg-center h-[80vh] w-[90vw] flex flex-col justify-center items-center rounded-3xl  p-20' style={{ backgroundImage: 'url("/src/assets/img/header.jpg")' }}>

                        <div className="info text-white flex flex-col justify-center items-center gap-6 mt-10 ">
                            <div className="bio text-3xl font-semibold">A curious mind behind the screen</div>
                            <div className='title text-5xl font-bold'>The Developer Log</div>
                            <div className='about text-2xl text-center'>space where I document my journey in web development and share tips, tutorials, and thoughts on building better digital experiences. From React tricks to backend logic, you'll find real-world insights, clean code, and honest reflections here.</div>

                        </div>

                    </div>
                    <div className="box absolute bottom-[15px] bg-white w-[80vw] h-[13vh] rounded-2xl p-1" style={{
                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
                    }}>
                        <div className="subtitle text-center text-gray-600 font-semibold underline"> We talk about</div>
                        <div className='flex justify-center items-center gap-20 mt-2'>
                            <div className="box1"><img className='w-[70px] h-[50px]' src="/src/assets/img/nobgAdidas.png" alt="" /></div>
                            <div className="box2"><img className='w-[70px] h-[50px]' src="/src/assets/img/nobgAdidas.png" alt="" /></div>
                            <div className="box3"><img className='w-[70px] h-[50px]' src="/src/assets/img/nobgAdidas.png" alt="" /></div>
                        </div>
                    </div>
                </section>
<hr />
                <section className="blogs">
                    <Blogpost />
                </section>
           

        </>
    )
}

export default home