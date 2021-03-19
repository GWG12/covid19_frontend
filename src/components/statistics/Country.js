import { CountryContext } from '../../context/CountryContext';
import { withRouter } from 'react-router-dom';
import React, { useContext } from 'react';
import axios from '../../helpers/axiosInstance.js';
import NavBar from '../navigation/navBar';
import { useScrollTrigger } from '@material-ui/core';
import { useState, useEffect } from 'react';


const Country = (props) => {
    //const { country, setCountry } = useContext(CountryContext);
    const [country, setCountry] = useState(null)
    console.log('THE COUNTRY ', country)
    console.log('THE COUNTRY props ', window.location.pathname)

    useEffect(() => {
        console.log('country useEffect')
        async function fetchApi(endpoint) {
            try {
                const res = await axios.get(window.location.pathname);
                setCountry(res.data);

            } catch (err) {
                setCountry(null);
            }
        }
        fetchApi('oo');
    }, [country])


    return (
        <div class="font-sans leading-normal tracking-normal flex flex-col">
            <div class="h-12 md:h-20">
                <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow h-12 md:h-20">
                    <NavBar {...props} />
                </nav>
            </div>


            {country && <div class="py-2 md:py-8 flex top-12 md:top-20 h-44 md:h-60 flex-col">
                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <div class="overflow-hidden rounded-lg shadow-lg bg-gray-100">

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
                                    <p class="font-bold">Active:</p>
                                    <p>{country.cases.active}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">Critical:</p>
                                    <p>{country.cases.critical}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">Recovered:</p>
                                    <p>{country.cases.recovered}</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-3">
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">New:</p>
                                    <p>{country.cases.new}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">1M Population:</p>
                                    <p>{country.cases['1M_pop']}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">Total:</p>
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
                                    <p class="font-bold">New:</p>
                                    <p>{country.deaths.new}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">1M Population:</p>
                                    <p>{country.deaths['1M_pop']}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">Total:</p>
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
                                    <p class="font-bold">1M Population:</p>
                                    <p>{country.tests['1M_pop']}</p>
                                </div>
                                <div class="items-center justify-between leading-tight p-2 md:p-4">
                                    <p class="font-bold">Total:</p>
                                    <p>{country.tests.total}</p>
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

                    </div>


                </div>
            </div>
            }
        </div>

    )
}


export default withRouter(Country);