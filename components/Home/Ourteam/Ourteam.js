import React from 'react';
import Member from './Member';

const Ourteam = () => {
    return <>

        <div className="mb-16">
            <dh-component>
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                    </div>
                </div>
                <div className="w-full mx-auto bg-gray-100 px-2 md:px-10 pt-10">

                    <div role="list" aria-label="Behind the scenes People " className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <Member />
                        <Member />
                        <Member />
                        <Member />
                        <Member />
                        <Member />
                    </div>
                </div>
            </dh-component>

        </div></>;
};

export default Ourteam;
