import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    // console.log(book)
    const { title, image, price, isbn13, subtitle, url } = book
    return (
        <div className=''>
            <div className="card card-side bg-purple-300 shadow-xl relative">
                <figure><img src={image} alt="book" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p>{subtitle}</p>
                    <p>price:{price}</p>

                </div>
                <div className='bg-black bg-opacity-40 text-white  opacity-0 hover:opacity-100  absolute inset-0 flex justify-center items-center text-center rounded-2xl'>
                        <div>
                            <h1>{title}</h1>
                            <p>{price}</p>
                            <Link to={`/order/${isbn13}`}><button className="btn btn-primary">Buy Now</button></Link>
                        </div>
                    </div>

            </div>
        </div>

    );
};

export default Book;