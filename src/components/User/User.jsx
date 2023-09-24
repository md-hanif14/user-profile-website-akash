import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const {id, name, email, image, address, profession, mobile_number } = user;
    // console.log(user);
    return (
        <div className="hero flex justify-center sm:justify-start bg-gray-400">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-60 rounded-lg shadow-2xl h-60" />
                <div>
                    <h1 className="text-3xl pb-3"><b>Name</b>: {name}</h1>
                    <h3 className='text-xl pb-3'><b>Mail</b>: {email}</h3>
                    <Link to={`/view/${user.id}`} user={user} >
                        <button className="btn btn-warning">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default User;