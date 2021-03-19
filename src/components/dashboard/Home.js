import { withRouter } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import axios from '../../helpers/axiosInstance.js';
import NavBar from '../navigation/navBar';
import World from '../statistics/World';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { CountryContext } from '../../context/CountryContext';


const Home = (props) => {
    const [data, setData] = useState(null);
    const [formState, setFormState] = useState([]);
    const [countriesEndpoint, setCountriesEndpoint] = useState(null);
    const [options, setOptions] = useState([]);
    const [inputName] = useState('');
    const { country, setCountry } = useContext(CountryContext);
    const [filter, setFilter] = useState(null);
    const [countriesState, setCountriesState] = useState(null);


    const fetchStatistics = async () => {
        try {
            const res = await axios.get(props.endpoint);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const getData = async (endpoint) => {
        try {
            const res = await axios.get(endpoint);
            return res.data;
        } catch (err) {
            setOptions([])
            return null;
        }
    }

    const getCountry = async (endpoint) => {
        try {
            if (!endpoint) return;
            const res = await axios.get(endpoint);
            setOptions([])
            setCountry(res.data)
            props.history.push(`/statistics/${res.data._id}`);
        } catch (err) {
            return;
        }
    }

    useEffect(() => {
        console.log('first useEffect ')
        fetchStatistics()
    }, [])

    useEffect(() => {
        if (!filter) return;
        async function fetchApi(endpoint) {
            try {
                const res = await axios.get(endpoint);
                setOptions(res.data);

            } catch (err) {
                setOptions([]);
            }
        }
        fetchApi(countriesEndpoint);
    }, [countriesEndpoint])

    let getOptionLabel = filter === 'country' ? (option) => { return option.country } : (option) => { return option };

    console.log('filter ', filter)
    console.log('options ', options)
    console.log('getLabel ', getOptionLabel)
    console.log()
    return (
        <div class="font-sans leading-normal tracking-normal flex flex-col">
            <div class="h-12 md:h-20">
                <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow h-12 md:h-20">
                    <NavBar {...props} />
                </nav>
            </div>

            <div class="py-2 md:py-8 flex top-12 md:top-20 h-44 md:h-60 flex-col">
                <div class="py-1 md:py-2">
                    <h1 class="font-bold md:text-xl">Select a filter and search:</h1>
                </div>
                <div class="pt-2 pb-4">
                    <div class="flex justify-center">

                        <Autocomplete
                            options={options}
                            getOptionLabel={filter ? getOptionLabel : (option) => {
                                console.log('la opcion ', option)
                                return option
                            }}
                            id="combo-box-demo"
                            name={inputName}
                            autoComplete
                            includeInputInList
                            style={{ width: "40%" }}
                            renderInput={(params) => (
                                <TextField {...params} label="Search..." variant="outlined" />
                            )}
                            onChange={(e, value) => {
                                if (!filter) {
                                    return;
                                }
                                if (filter === 'country')
                                    return setFormState(value._id);
                                return setFormState(`?start=${value.start}&end=${value.end}`);
                            }}
                        />
                        <button class="bg-black hover:bg-gray-700 text-white flex-shrink font-bold py-2 px-4" onClick={() => {
                            return filter === 'country' ? getCountry(formState ? `/statistics/${formState}` : null) : getData('')
                        }}>
                            SEARCH
                        </button>

                    </div>
                </div>

                <nav class="md:w-auto flex self-center">
                    <div
                        class="text-xs md:text-base self-center cursor-pointer text-white py-2 px-2 bg-gradient-to-r from-purple-600 to-purple-500"
                        onClick={() => {
                            setCountriesEndpoint('/statistics/countries')
                            setFilter('country')
                        }}
                    >
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

                    {data && data.map((elem) => (
                        <World data={elem} />
                    ))}
                </div>
            </div>


        </div>

    )
}


export default withRouter(Home);