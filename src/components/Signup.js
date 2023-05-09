import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { UserAuth } from '../context/Authcontext';






export const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {createUser} = UserAuth();

    const navigate = useNavigate();



    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await createUser(email, password);
            navigate('/account');
        } catch (e) {
            setError(e.message);
            alert(error);
        }
    }





    return (
        <div className="max-w-[700px] mx-auto my-16 p-4">

            <div>
                <h1 className="text-3xl py-2">Sign up to your account</h1>
            </div>


            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email</label>
                    <input className='border p-3' type="email" onChange={onChangeEmail} />
                </div>

                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Set Password</label>
                    <input className='border p-3' type="password" onChange={onChangePassword} />
                </div>


                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 my-4 rounded-full'>Sign up</button>

            </form>

            <p className="py-2">
                Already have an account ? <Link to='/'>Sign in</Link>
            </p>

        </div>
    )
}
