import React, { useState, useContext } from 'react';
import axios from '../../helpers/axiosInstance.js';
import { UserContext } from '../../context/UserContext';


const Login = (props) => {

    console.log()
    const [loginScreenState, setLoginScreenState] = useState(true);
    const [formState, setFormState] = useState({});

    console.log('en el login')
    const submitHandler = async (e) => {
        e.preventDefault();
        const url = loginScreenState ? '/auth/login' : '/auth/signup';
        console.log('el usuario de signup ', url)
        console.log(' la forma del sign ', formState)
        try {
            const res = await axios.post(url, formState);
            console.log('la res del signup ', res)
            localStorage.setItem('token', res.data.accessToken);
            localStorage.setItem('userId', res.data.userId);
            console.log('TOEKN signup ', localStorage.getItem('token'))
            console.log('userID signup ', localStorage.getItem('userId'))
            props.history.push('/');
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >

            <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 class="font-bold text-2xl">COVID-19</h3>
                    <p class="text-gray-600 pt-2">{loginScreenState ? 'Sign in to your account. ' : 'Create an account'}</p>
                </section>

                <section class="mt-10">
                    <form class="flex flex-col" onSubmit={submitHandler}>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" >Email</label>
                            <input
                                type="text"
                                id="email"
                                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" >Password</label>
                            <input
                                type="password"
                                id="password"
                                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                            />
                        </div>
                        {!loginScreenState ? <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" >Confirm password</label>
                            <input
                                type="password"
                                id="repeat-password"
                                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                onChange={(e) => setFormState({ ...formState, repeat_password: e.target.value })}
                            />
                        </div> : null}
                        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
                    </form>
                </section>
            </main>

            <div class="max-w-lg mx-auto text-center mt-12 mb-6">
                {loginScreenState ?
                    <p class="text-black">Don't have an account? <span class="font-bold hover:underline cursor-pointer" onClick={(e) => setLoginScreenState(false)}>Sign up</span>.</p> :
                    <p class="text-black">Already have an account? <span class="font-bold hover:underline cursor-pointer" onClick={(e) => setLoginScreenState(true)}>Sign in</span>.</p>
                }
            </div>
        </div>
    )
}

export default Login;