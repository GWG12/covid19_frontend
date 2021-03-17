
//import LoginInputField from './LoginInputField';
//import {useFormik} from 'formik';
//import * as Yup from 'yup'; 
//import { HiOutlineClipboardList,HiOutlinePuzzle } from "react-icons/hi";
//import axios from '../helpers/axiosInstance.js';
//import { UserContext } from './UserContext';
//import { checkPropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import React, { useContext, useState, useEffect } from 'react';
import axios from '../../helpers/axiosInstance.js';
import NavBar from '../navigation/navBar';
import World from '../statistics/World';

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
const Home = (props) => {
    const [data, setData] = useState(null);
    const fetchStatistics = async () => {
        try {
            const res = await axios.get(props.endpoint);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchStatistics();
    }, [])
    /*
    {data && data.map((elem) => (
        <div><World /></div>
    ))}
    */
    console.log('props en homeprops ', props)
    const op = [1, 2, 3, 4, 5]
    return (
        <div class="font-sans leading-normal tracking-normal flex flex-col">
            <div class="h-12 md:h-20">
                <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow h-12 md:h-20">
                    <NavBar {...props} />
                </nav>
            </div>

            <div class="py-2 md:py-8 flex top-12 md:top-20 h-44 md:h-60 flex-col">
                <div class="py-1 md:py-2">
                    <h1 class="font-bold md:text-xl">Search by:</h1>
                </div>
                <div class="pt-2 pb-4">
                    <input class="border-t-2 border-r-2 border-l-2 h-10 md:h-16 py-4 rounded-2xl w-3/4 md:w-1/2 self-center text-xl px-8 shadow-lg" type="search" placeholder="Search..." />
                </div>

                <nav class="md:w-auto flex self-center space-x-1 md:space-x-2">
                    <div class="text-xs md:text-base self-center cursor-pointer text-white py-2 px-2 bg-gradient-to-r from-purple-600 to-purple-500">
                        Country
                    </div>
                    <div class="text-xs md:text-base self-center cursor-pointer text-white py-2 px-2 bg-gradient-to-r from-gray-600 to-gray-500">
                        Country
                    </div>
                    <div class="text-xs md:text-base self-center cursor-pointer text-white py-2 px-2 bg-gradient-to-r from-green-600 to-green-500">
                        Country
                    </div>

                </nav>
            </div>
            <div class="top-64 md:top-80 bottom-0 w-full absolute flex flex-wrap space-x-4">

                <div class="flex flex-wrap -mx-1 lg:-mx-4">

                    {op.map((elem) => (
                        <World />
                    ))}
                </div>
            </div>


        </div>

    )
}


export default withRouter(Home);