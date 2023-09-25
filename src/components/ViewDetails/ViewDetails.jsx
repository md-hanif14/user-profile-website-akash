import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const users = useSelector(state => state.users);
    const user = users.find((user) => user.id === parseInt(id));
    console.log(user);


    //if given user is not found.
    if (!user) {
        return <div className="toast toast-center toast-middle">
            <div className="alert alert-success">
                <span>No User Found</span>
            </div>
            <Link to='/'>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Home</button>
                </div>
            </Link>
        </div>;
    }

    return (
        <div className='text-blue-900 bg-teal-500 p-8'>
            <div className="container flex justify-center">
                <div className="card w-96 glass m-auto mt-12">
                    <div className="rounded">
                        <figure><img src={`${user.image}`} className='rounded w-full' /></figure>

                        <div className="card-body bg-teal-50">
                            <h2 className="card-title"><b>Name</b>: {user.name}</h2>
                            <p><b>Profession</b>: {user.profession}</p>
                            <p><b>Address</b>: {user.address}</p>
                            <p><b>Mail</b>: {user.email}</p>
                            <p><b>Contact Number</b>: {user.mobile_number}</p>

                            <Link to='/'>
                                <div className="card-actions justify-left">
                                    <button className="btn btn-warning">Okay</button>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;