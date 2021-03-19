import { CountryContext } from '../../context/CountryContext';
import { withRouter } from 'react-router-dom';
import React, { useContext } from 'react';
import axios from '../../helpers/axiosInstance.js';
import NavBar from '../navigation/navBar';
import { useScrollTrigger } from '@material-ui/core';
import { useState, useEffect } from 'react';


const Country = (props) => {
    //const { country, setCountry } = useContext(CountryContext);
    const [country, setCountry] = useState(null);
    const [formState, setFormState] = useState({});
    const [editFlag, setEditFlag] = useState(false);
    const [cases, setCases] = useState({});
    const [deaths, setDeaths] = useState({});
    const [tests, setTests] = useState({});
    const [updateFlag, setUpdateFlag] = useState(false);
    const [display, setDisplay] = useState(false);
    console.log('THE COUNTRY ', country)
    console.log('THE COUNTRY props ', window.location.pathname)

    useEffect(() => {
        console.log('country useEffect')
        console.log('la update flag', updateFlag)
        async function fetchApi(endpoint) {
            try {
                const res = await axios.get(endpoint);
                setCountry(res.data);

            } catch (err) {
                setCountry(null);
            }
        }
        fetchApi(window.location.pathname);
    }, [])

    useEffect(() => {
        if (!updateFlag) return;
        console.log('post  useEffect')
        console.log(formState)
        async function fetchApi(endpoint) {
            try {
                const res = await axios.post(endpoint, formState);
                setCountry(res.data);

            } catch (err) {
                setCountry(null);
            }
        }
        fetchApi(window.location.pathname);
        setUpdateFlag(false)
    }, [formState])

    console.log('la edit flag ', editFlag)
    return (
        <div class="font-sans leading-normal tracking-normal flex flex-col">
            <div class="h-12 md:h-20">
                <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow h-12 md:h-20">
                    <NavBar {...props} />
                </nav>
            </div>


            {country &&
                <div class="w-full flex flex-col flex-wrap mt-10">
                    <div class="overflow-hidden rounded-lg shadow-lg bg-gray-100 self-center">

                        <div class="border-b-1 border-t-1 border-gray-300 shadow bg-gray-500">
                            <h1 class="text-3xl text-white font-bold">
                                {country.country}
                            </h1>
                        </div>
                        <div class="items-center justify-between leading-tight p-2 md:p-4 border-b-1 border-gray-300 shadow">
                            <h1 class="text-xl text-black font-bold">Total Population:</h1>
                            <p>{country.population}</p>
                        </div>
                        <div class="border-b-1 border-gray-300 shadow">
                            <div>
                                <h1 class="text-xl text-black font-bold">
                                    Cases
                        </h1>
                            </div>


                            <div class="grid grid-cols-3">
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">Active:</p>
                                    {editFlag ?
                                        <input
                                            type="number"
                                            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0"
                                            onChange={(e) => setCases({ ...cases, active: parseInt(e.target.value) })}
                                        />
                                        : <p>{country.cases.active}</p>
                                    }
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">Critical:</p>
                                    {editFlag ?
                                        <input
                                            type="number"
                                            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0"
                                            onChange={(e) => setCases({ ...cases, critical: parseInt(e.target.value) })}
                                        />
                                        : <p>{country.cases.critical}</p>
                                    }
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">Recovered:</p>
                                    {editFlag ?
                                        <input
                                            type="number"
                                            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0"
                                            onChange={(e) => setCases({ ...cases, recovered: parseInt(e.target.value) })}
                                        />
                                        : <p>{country.cases.recovered}</p>
                                    }
                                </div>
                            </div>
                            <div class="grid grid-cols-3">
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">New:</p>
                                    {editFlag ?
                                        <input
                                            type="number"
                                            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0"
                                            onChange={(e) => setCases({ ...cases, new: parseInt(e.target.value) })}
                                        />
                                        : <p>{country.cases.recovered}</p>
                                    }
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">1M Population:</p>
                                    <p>{country.cases['1M_pop']}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">Total:</p>
                                    <p>{country.cases.total}</p>
                                </div>
                            </div>
                        </div>
                        <div class="border-b-1 border-gray-300 shadow">
                            <div>
                                <h1 class="text-xl text-black font-bold">
                                    Deaths
                        </h1>
                            </div>


                            <div class="grid grid-cols-3">
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">New:</p>
                                    {editFlag ?
                                        <input
                                            type="number"
                                            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0"
                                            onChange={(e) => setDeaths({ ...deaths, new: parseInt(e.target.value) })}
                                        />
                                        : <p>{country.deaths.new}</p>
                                    }
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">1M Population:</p>
                                    <p>{country.deaths['1M_pop']}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">Total:</p>
                                    <p>{country.deaths.total}</p>
                                </div>
                            </div>
                        </div>

                        <div class="border-b-1 border-gray-300 shadow">
                            <div>
                                <h1 class="text-xl text-black font-bold">
                                    Tests
                        </h1>
                            </div>


                            <div class="grid grid-cols-2">
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">1M Population:</p>
                                    <p>{country.tests['1M_pop']}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold pb-2">Total:</p>
                                    {editFlag ?
                                        <input
                                            type="number"
                                            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0"
                                            onChange={(e) => setTests({ ...tests, total: parseInt(e.target.value) })}
                                        />
                                        : <p>{country.tests.total}</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <p class="ml-2 text-sm font-bold">
                                    Update date:
                                </p>
                                <p class="ml-2 text-sm">
                                    {new Date(country.time).toString()}
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Hola</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>
                        <div class="items-center justify-between leading-tight p-2 md:p-4 border-b-1 border-gray-300 shadow">
                            {editFlag ?
                                <>

                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8" onClick={(e) => {
                                        setEditFlag(false)
                                        //setFormState({ ...formState, e.target.value })
                                    }}>
                                        Cancel
                                    </button>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 " onClick={(e) => {
                                        setEditFlag(false)
                                        setUpdateFlag(true)
                                        setFormState({ ...formState, cases: cases, deaths: deaths, tests: tests })
                                    }}>
                                        Submit
                                    </button>
                                </>
                                : <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full" onClick={() => {
                                    setEditFlag(true)
                                }}>
                                    Edit
                                    </button>}

                        </div>

                    </div>
                </div>

            }
        </div>

    )
}


export default withRouter(Country);