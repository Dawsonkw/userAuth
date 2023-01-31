import React, { useState } from 'react';


function UserAuth(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = () => {
        setUserName(event.target.value);
    }

    const handlePassword = () => {
        setPassword(event.target.value);
    }


    return (
        <div className='bg-kitsuneOrange rounded-lg p-6 shadow-lg mx-5 pt-5 pb-20'>
                <form className='bg-gray-100 rounded-lg p-6' action="">
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-6 block' htmlFor="Username">
                            Username
                        </label>
                            <input className='mb-5 w-full border border-kitsuneBlue rounded-lg p-2 text-gray-400' type="text" id='username' value={userName || ''} placeholder='Enter your username' onChange={handleUsername} />
                    </div>
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-5 block' htmlFor="password">
                            Password
                        </label>
                            <input className='mb-5 w-full border border-kitsuneBlue p-2 rounded-lg text-gray-400' type="password" name="" id="" value={password || ''} placeholder='Enter your password' onChange={handlePassword} />
                    </div>
                    <div className='text-center'>
                        <button 
                        className='bg-kitsuneBlue hover:bg-kitsuneBlue2 font-medium py-2 px-4 rounded-lg' type='submit'
                        >
                            Login
                        </button>
                    </div>
                </form>
        </div>
    );
}

export default UserAuth;