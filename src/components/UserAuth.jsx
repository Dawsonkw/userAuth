import React, { useState } from 'react';
import { RingLoader } from "react-spinners"


function UserAuth() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true); 
    //state is set to true for development purposes so I can see the animation by default. State would be updated to false if this component was to be deployed so that it only shows upon the load
    const [inputClass, setInputClass] = useState('text-gray-400')

    const handleUsername = () => {
        setUserName(event.currentTarget.value);
        if (event.target.value) {
            setInputClass('text-black');
        } else {
            setInputClass('text-gray-400')
        }
    };

    const handlePassword = () => {
        setPassword(event.target.value);
        if (event.target.value) {
            setInputClass('text-black');
        } else {
            setInputClass('text-gray-400')
        }
    };

    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
        position: 'absolute',
        top: '50%',
        left: '49%',
        transform: 'translate(-50%, -50%)',
    };




    return (
        <div className='bg-kitsuneOrange rounded-lg p-6 shadow-lg mx-5 pt-5 pb-20'>
                <form className='bg-gray-100 rounded-lg p-6' action="">
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-6 block' htmlFor="Username">
                            Username
                        </label>
                            <input className={`mb-5 w-full border border-kitsuneBlue p-2 rounded-lg ${inputClass} `} type="text" id='username' value={userName || ''} placeholder='Enter your username' onChange={handleUsername}  required />
                    </div>
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-5 block' htmlFor="password">
                            Password
                        </label>
                            <input className={`mb-5 w-full border border-kitsuneBlue p-2 rounded-lg ${inputClass} `}  type="password" name="" id="" value={password || ''} placeholder='Enter your password' onChange={handlePassword} required/>
                    </div>
                    <div className='flex justify-center'>
                        <div className='inline-flex relative content-center'>
                            <button
                            onClick={() => setLoading(!loading)}
                            className='bg-kitsuneBlue2 hover:bg-kitsuneBlue3 font-medium py-2 rounded-lg px-16' type='submit'
                            >
                                Login
                            </button>
                            <div className='pt-2'>
                                {loading && (
                                    <RingLoader
                                        color={'#000000'}
                                        loading={loading}
                                        cssOverride={override}
                                        size={25}
                                        aria-label='Loading Spinner'
                                        data-testid='loader'
                                    />
                                )}
                            </div>
                            <div className=''>
                                <p className='text-right ml-5 hover:text-kitsuneOrange hover:cursor-pointer'>Forgot Password</p>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    );
}

export default UserAuth;