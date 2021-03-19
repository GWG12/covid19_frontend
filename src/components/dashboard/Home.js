import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from '../../helpers/axiosInstance.js';
import NavBar from '../navigation/navBar';
import World from '../statistics/World';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


const Home = (props) => {
    const [data, setData] = useState(null);
    const [formState, setFormState] = useState([]);
    const [options, setOptions] = useState([]);
    const [inputName] = useState('');
    const [filter, setFilter] = useState(false);


    const fetchStatistics = async () => {
        try {
            const res = await axios.get(props.endpoint);
            setData(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const fetchCountriesList = async (endpoint) => {
        try {
            const res = await axios.get(endpoint);
            setOptions(res.data);
        } catch (err) {
            setOptions([]);
        }
    }

    const getCountry = async (endpoint) => {
        console.log('el endpoint ', endpoint)
        if (!endpoint) return;
        setOptions([])
        props.history.push(endpoint);
    }

    useEffect(() => {
        console.log('first useEffect ')
        fetchStatistics();
        fetchCountriesList('/statistics/countries');
        setFilter(true);
    }, [])


    let getOptionLabel = filter ? (option) => { return option.country } : (option) => { return option };

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
                            getOptionLabel={getOptionLabel}
                            id="combo-box-demo"
                            name={inputName}
                            autoComplete
                            includeInputInList
                            style={{ width: "40%" }}
                            renderInput={(params) => (
                                <TextField {...params} label="Search..." variant="outlined" />
                            )}
                            onChange={(e, value) => {
                                return setFormState(value._id);
                            }}
                        />
                        <button class="bg-black hover:bg-gray-700 text-white flex-shrink font-bold py-2 px-4" onClick={() => {
                            return getCountry(formState ? `/statistics/${formState}` : null);
                        }}>
                            SEARCH
                        </button>

                    </div>
                </div>

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