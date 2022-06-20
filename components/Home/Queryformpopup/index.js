import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function Index() {
    const [show, setshow] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        query: ""
    });
    useEffect(() => {
        setTimeout(() => {
            setshow(true);
        }, 7000);
    }, [])

    return (
        <>
            <div id="modal" className={`${show ? "flex" : "hidden"} w-screen h-screen fixed z-50 mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <div class="bg-white px-10 border-[2px] py-10 rounded-md mt-16 justify-between pb-16">

                    <div class="">
                        <div className="flex justify-between ">
                            <div class="flex items-center">
                                <h1 class="text-3xl font-light pr-2 leading-5 text-black">Any Query?</h1>
                            </div>
                            <img className="cursor-pointer" onClick={
                                () => setshow(!show)
                            } src="https://s2.svgbox.net/hero-outline.svg?ic=x&color=000" width="22" height="22" />
                        </div>

                        <p class="my-8 text-sm font-bold leading-5 text-gray-600">Let Us Know about any of the query you are facing and we will bet back to you as soon as possible.</p>
                    </div>
                    <div>
                        <div class="md:flex items-center lg:mt-0 mt-4">
                            <div class="md:w-64">
                                <label class="text-sm leading-none text-gray-800" >Name</label>
                                <input onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value
                                    })
                                } type="name" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                                    placeholder="Name" />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label class="text-sm leading-none text-gray-800" id="lastName">Phone No</label>
                                <input onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: e.target.value
                                    })
                                } type="number" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" placeholder="9717812319" />
                            </div>
                        </div>
                        <div class="md:flex items-center mt-8">
                            <div class="md:w-64">
                                <label class="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                <input onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })} type="email" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label class="text-sm leading-none text-gray-800" id="phone" >Query</label>
                                <textarea onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        query: e.target.value
                                    })} type="textarea" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" placeholder="Query" />
                            </div>
                        </div>
                        <div class="md:flex items-center mt-8">
                            <div className="bg-black cursor-pointer text-white rounded-md px-5 mt-4 py-2">
                                Submit
                            </div>
                            <div></div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
