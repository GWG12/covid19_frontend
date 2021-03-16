
//import LoginInputField from './LoginInputField';
//import {useFormik} from 'formik';
//import * as Yup from 'yup'; 
//import { HiOutlineClipboardList,HiOutlinePuzzle } from "react-icons/hi";
//import axios from '../helpers/axiosInstance.js';
//import { UserContext } from './UserContext';
//import { checkPropTypes } from 'prop-types';
import { UserContext } from '../context/UserContext';
import React, { useContext, useState, useEffect } from 'react';
import axios from '../helpers/axiosInstance.js';

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
    const [data, setData] = useState([]);
    async function fetchStatistics() {
        try {
            const res = await axios.get(props.endpoint);
            console.log('res home ', typeof res.data)
            //const final = JSON.parse(res.data);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchStatistics();
    }, [])

    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >

            <h1>HIla</h1>
            <button>Dale click papaw</button>
        </div>
    )
}

export default Home;