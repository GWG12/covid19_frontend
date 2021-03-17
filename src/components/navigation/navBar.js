
//import LoginInputField from './LoginInputField';
//import {useFormik} from 'formik';
//import * as Yup from 'yup'; 
//import { HiOutlineClipboardList,HiOutlinePuzzle } from "react-icons/hi";
//import axios from '../helpers/axiosInstance.js';
//import { UserContext } from './UserContext';
//import { checkPropTypes } from 'prop-types';
//import { UserContext } from '../context/UserContext';
import { withRouter } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import axios from '../../helpers/axiosInstance.js';
import { RiVirusLine } from "react-icons/ri";


const NavBar = (props) => {

    const [activeSession, setActiveSession] = useState(false);

    const logOutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        props.history.push('/login');
    };

    if (activeSession) {
        logOutHandler()
    }


    return (
        <div class="w-full h-full grid grid-cols-12 ">
            <div class="col-span-9 md:col-span-10 pl-3 pt-3 pb-3 flex">
                <div class="justify-self-start">
                    <div class="flex place-items-center">
                        <RiVirusLine class="inline-block mr-2 stroke-current h-7 w-7 md:h-12 md:w-12" />
                        <span class="text-gray-900 md:text-4xl no-underline hover:no-underline font-bold">Covid-19 STATS</span>
                    </div>
                </div>
            </div>
            <div
                class="col-span-3 md:col-span-2 pl-2 pr-2 bg-gradient-to-r from-blue-500 to-blue-300 md:pt-3 md:pb-3 grid place-items-center cursor-pointer"
                onClick={() => setActiveSession(true)}
            >
                <span class="md:text-xl text-white font-bold">Logout </span>
            </div>
        </div>
    )
}

export default withRouter(NavBar);





