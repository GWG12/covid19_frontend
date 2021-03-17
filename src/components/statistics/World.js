
//import LoginInputField from './LoginInputField';
//import {useFormik} from 'formik';
//import * as Yup from 'yup'; 
//import { HiOutlineClipboardList,HiOutlinePuzzle } from "react-icons/hi";
//import axios from '../helpers/axiosInstance.js';
//import { UserContext } from './UserContext';
//import { checkPropTypes } from 'prop-types';
import { UserContext } from '../../context/UserContext';
import React, { useContext, useState, useEffect } from 'react';
import axios from '../../helpers/axiosInstance.js';
import { withRouter } from 'react-router-dom';


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
const World = (props) => {

    /*
    return (
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                        Company Name*
            </label>
                    <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Tutsplus" />
                    <div>
                        <span class="text-red-500 text-xs italic">
                            Please fill out this field.
              </span>
                    </div>
                </div>
                <div class="md:w-1/2 px-3">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                        Title*
            </label>
                    <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Software Engineer" />
                </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-full px-3">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
                        Application Link*
            </label>
                    <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://...." />
                </div>
            </div>
            <div class="-mx-3 md:flex mb-2">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
                        Location*
            </label>
                    <div>
                        <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                            <option>Abuja</option>
                            <option>Enugu</option>
                            <option>Lagos</option>
                        </select>
                    </div>
                </div>
                <div class="md:w-1/2 px-3">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
                        Job Type*
            </label>
                    <div>
                        <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Internship</option>
                        </select>
                    </div>
                </div>
                <div class="md:w-1/2 px-3">
                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="department">
                        Department*
            </label>
                    <div>
                        <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                            <option>Engineering</option>
                            <option>Design</option>
                            <option>Customer Support</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="-mx-3 md:flex mt-2">
                <div class="md:w-full px-3">
                    <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                        Button
            </button>
                </div>
            </div>
        </div>
    )
    */
    return (

        <>

            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="overflow-hidden rounded-lg shadow-lg bg-gray-100">

                    <div class="border-b-1 border-t-1 border-gray-300 shadow bg-gray-500">
                        <h1 class="text-3xl text-white font-bold">
                            World
                        </h1>
                    </div>
                    <div class="items-center justify-between leading-tight p-2 md:p-4 border-b-1 border-gray-300 shadow">
                        <h1 class="text-xl text-black font-bold">Total Population:</h1>
                        <p>1000000</p>
                    </div>
                    <div class="border-b-1 border-gray-300 shadow">
                        <div>
                            <h1 class="text-xl text-black font-bold">
                                Cases
                        </h1>
                        </div>


                        <div class="grid grid-cols-3">
                            <div class="items-center justify-between leading-tight p-2 md:p-4">
                                <p class="font-bold">Active:</p>
                                <p>1000000000</p>
                            </div>
                            <div class="items-center justify-between leading-tight p-2 md:p-4">
                                <p class="font-bold">Critical:</p>
                                <p>1000000000</p>
                            </div>
                            <div class="items-center justify-between leading-tight p-2 md:p-4">
                                <p class="font-bold">Recovered:</p>
                                <p>1000000000</p>
                            </div>
                        </div>
                    </div>
                    <div class="border-b-1 border-gray-300 shadow">
                        <div class="items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-xl text-black font-bold">Deaths:</h1>
                            <p>1000000</p>
                        </div>
                    </div>
                    <div class="border-b-1 border-gray-300">
                        <div class="items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-xl text-black font-bold">Tests:</h1>
                            <p>1000000</p>
                        </div>
                    </div>

                </div>


            </div>




        </>


    )
}

export default withRouter(World);