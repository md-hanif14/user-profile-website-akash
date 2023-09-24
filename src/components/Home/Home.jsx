import React, { useEffect, useState } from 'react';
import User from '../User/User';
import { useSelector } from 'react-redux';

const Home = () => {
    // redux store 
    const users = useSelector(state => state.users);

    return (
        <div className='bg-slate-300'>
            <h2 className='text-3xl text-center mb-5 pt-5'>All Our Users</h2>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-5  text-center sm:text-left'>
            {
                users.map(user => <User
                key={user.id}
                user={user}
                >
                </User> )
            }
            </div>
        </div>
    );
};

export default Home;