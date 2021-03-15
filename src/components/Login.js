import React, { useState } from 'react';
//import LoginInputField from './LoginInputField';
//import {useFormik} from 'formik';
//import * as Yup from 'yup'; 
//import { HiOutlineClipboardList,HiOutlinePuzzle } from "react-icons/hi";
import axios from 'axios';
//import { checkPropTypes } from 'prop-types';

/*
    <div class="grid grid-cols-6">
        <div class="fixed bg-gray-800 bg-opacity-75 col-span-1 flex-col shadow-2xl h-screen z-10">
            <div class="text-white hover:bg-gray-500">1</div>
            <div class="text-white">2</div>
            <div class="text-white">3</div>
        </div>
        <div class="col-span-5 z-0">
            <h1 class="text-lg">HOLA MANO 4</h1>
        </div>
    </div>
*/
//<div class="text-white hover:bg-gray-500 p-3"><GrDocumentText class="inline-block mr-2 troke-current text-white-600 h-6 w-6"/>Piezas</div>
const Login = (props) => {
    const [loginScreenState, setLoginScreenState] = useState(true);
    console.log('el estado ', loginScreenState)

    const loginPostRequest = async (username, password) => {
        try {
            const resp = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/login',
                data: {
                    nombre: username,
                    contrasena: password
                }
            });
            console.log(resp)
            localStorage.setItem('token', resp.data.access_token)
            props.history.push('/operations/piezas');

        } catch (err) {
            console.log(err)
        }
    }

    /*
    const [data,setData] = useState({});
    console.log('mi data ',data)
    const loginHandler = (name,value) => {
      setData(prev => ({
        ...prev,[name]:value
      }));
    };
    */

    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >

            <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 class="font-bold text-2xl">COVID-19</h3>
                    <p class="text-gray-600 pt-2">{loginScreenState ? 'Sign in to your account. ' : 'Create an account'}</p>
                </section>

                <section class="mt-10">
                    <form class="flex flex-col" method="POST" action="#">
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" >Email</label>
                            <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" >Password</label>
                            <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                        {!loginScreenState ? <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" >Confirm password</label>
                            <input type="password" id="repeat-password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
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