import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { image, authors, language } = data
    return (
        <div className='flex justify-center'>
            <div className="card w-96 glass my-5 text-center">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Author:{authors}</h2>
                    <p>Language:{language}</p>
                    <div className="card-actions justify-end">
                       <button className="btn btn-primary"><a target='_blank' href="https://itbook.store/files/9781617294136/chapter2.pdf">Read</a> </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default BookDetails;