import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Home.css';
import { useSelector } from 'react-redux';

const Home = () => {
    // redux store 
    const users = useSelector(state => state.users);

    return (
        <div className="bg-teal-500">
            <div className="container mx-auto px-4">
                <div className="p-8">
                    <div className="p-8">
                        <h1 className='text-6xl font-head text-center mb-5 pt-5 text-blue-900'>All Our Users</h1>
                    </div>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 text-blue-900 text-center sm:text-left'>
                        {
                            users.map(user => <User
                                key={user.id}
                                user={user}
                            >
                            </User>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;