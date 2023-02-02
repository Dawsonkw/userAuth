import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RingLoader } from 'react-spinners';




function UserAuth() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    //state is set to true for development purposes so I can see the animation by default. State would be updated to false if this component was to be deployed so that it only shows upon the load
    const [inputClass, setInputClass] = useState('text-gray-400')

    // Constants for React Hook Form
    const { register, handleSubmit, watch, formState: { errors } } = useForm(); 
    const onSubmit = data => console.log(data);


    const handleUsername = () => {
        setUserName(event.target.value);
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

    const loadIcon = () => setLoading(!loading)
    const errorRemover = () => clearErrors('username')

//() => setLoading(!loading)  THIS WAS THE ORIGINAL STATEMENT IN THE onCLICK portion

// We're using this https://react-hook-form.com/get-started#Registerfields 


    return (
        <div className='bg-kitsuneOrange rounded-lg p-6 shadow-lg mx-5 pt-5 pb-20'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-100 rounded-lg p-6' action="" autoComplete='off'>
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-6 block' htmlFor="Username">
                            Username
                        </label>
                            <input {...register("username", {
                                required: true,
                                maxLength: 20,
                                minLength: 4,
                                pattern: /^[A-Za-z0-9_@./#&+-]+$/i // Regex pattern catches alphanumeric characters as well as special characters. 
                                 })}
                                 
                            
                            className={`mb-5 w-full border border-kitsuneBlue p-2 rounded-lg ${inputClass} `} type="text" id='username' value={userName || ''} 
                            placeholder='Enter your username' 
                            onChange={handleUsername}
                              
                        />
                        {errors.username && <ul>
                            <li>Username must be greater than 4 characters</li>
                            <li>Username must be less than 20 characters</li>
                            <li>Username must contain only alphanumeric characters  (a-z, A-Z), numbers (0-9), and special characters ie; _@./#&+-</li>
                            </ul>}
                    </div>
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-5 block' htmlFor="password">
                            Password
                        </label>
                            <input required {...register("password")} 
                            className={`mb-5 w-full border border-kitsuneBlue p-2 rounded-lg ${inputClass} `}  type="password" 
                            name="" 
                            id="" 
                            value={password || ''} 
                            placeholder='Enter your password' 
                            onChange={handlePassword} 
                        />
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='inline-flex relative content-center'>
                            <button
                            // onClick is going to take in the loadIcon function which displays a loading animation as well as the errorRemover function which will remove any error that is created through the form validation
                            onClick={() => {
                                loadIcon(true); // We need to figure out how to conditionally render the loading icon so it appears on load and then disappears instead of appearing and disappearing on every button click
                                errorRemover();
                            }}
                            className='bg-kitsuneBlue2 hover:bg-kitsuneBlue3 font-medium py-2 rounded-lg px-16' 
                            type='submit'
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