import React from 'react';
import { withRouter } from 'react-router-dom';


const World = (props) => {

    const data = props.data;

    return (
        <div key={data._id} class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div class="overflow-hidden rounded-lg shadow-lg bg-gray-100">

                <div class="border-b-1 border-t-1 border-gray-300 shadow bg-gray-500">
                    <h1 class="text-3xl text-white font-bold">
                        {data._id}
                    </h1>
                </div>
                <div class="items-center justify-between leading-tight p-2 md:p-4 border-b-1 border-gray-300 shadow">
                    <h1 class="text-xl text-black font-bold">Total Population:</h1>
                    <p>{data.population}</p>
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
                            <p>{data.activeCases}</p>
                        </div>
                        <div class="items-center justify-between leading-tight p-2 md:p-4">
                            <p class="font-bold">Critical:</p>
                            <p>{data.criticalCases}</p>
                        </div>
                        <div class="items-center justify-between leading-tight p-2 md:p-4">
                            <p class="font-bold">Recovered:</p>
                            <p>{data.recoveredCases}</p>
                        </div>
                    </div>
                </div>
                <div class="border-b-1 border-gray-300 shadow">
                    <div class="items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-xl text-black font-bold">Deaths:</h1>
                        <p>{data.deaths}</p>
                    </div>
                </div>
                <div class="border-b-1 border-gray-300">
                    <div class="items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-xl text-black font-bold">Tests:</h1>
                        <p>{data.tests}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(World);