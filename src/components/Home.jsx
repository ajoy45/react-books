import React from 'react';
import Lottie from "lottie-react";
import image from '../../public/book-lover.json'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate()
    const handelToBook=()=>{
            navigate('/books')
    }
    return (
        <div className='px-24 lg:flex items-center justify-evenly'>
           <div className='lg:w-5/12'>
               <span className='bg-orange-300 text-xl px-4 py-2 rounded-xl text-purple-700 font-bold'>For sell !!</span>
                <h1 className='uppercase text-5xl text-yellow-500 my-4'>let`s of e-books</h1>
                <p className='text-3xl mb-3 text-justify'>It's important to provide them with all the necessary information about the book, including its title, author, edition, and condition. You can also provide additional information, such as a brief summary or review of the book, to help the customer make an informed purchasing decision.</p>
                <button onClick={handelToBook} className='btn btn-success hover:bg-purple-400 text-white'>go to book</button>
           </div>
           <div className='lg:w-5/12'>
           <Lottie animationData={image} loop={true} />
           </div>
        </div>
    );
};

export default Home;