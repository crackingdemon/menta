import { Catgdiv, Catgtitle, Linksdiv, Alink } from "./Footer.styles";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div style={{ backgroundColor: '#1c1c1e' }} className="w-screen ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mt-20 text-xl text-center md:text-2xl text-white">We are here to guide you (Contact Us) 👋🏻</h1>
                    <h1 className="mt-3 text-lg text-center text-gray-500 px-10 md:px-0">Feel free to reach out if you need help or you want to connect! Also, if you are a Developer or Designer and you want to get involved, write us at:</h1>

                    <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 mt-4 rounded-2xl">
                        💌contact.thementa@gmail.com
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 mt-4 rounded-2xl">
                        👋🏻help.thementa@gmail.com
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 mt-4 rounded-2xl">
                        👨🏻‍💻career.thementa@gmail.com
                    </button>

                    <div className="flex justify-center flex-wrap md:no-wrap mt-6">
                        <button style={{ backgroundColor: '#222121' }} className="hover:bg-gray-600 mr-4 text-white font-bold py-2 px-4 mt-4 rounded-lg">
                            🐤 Twitter
                        </button>
                        <button style={{ backgroundColor: '#222121' }} className="hover:bg-gray-600 mr-4 text-white font-bold py-2 px-4 mt-4 rounded-lg">
                            🌈 Instagram
                        </button>
                        <button style={{ backgroundColor: '#222121' }} className="hover:bg-gray-600 mr-4 text-white font-bold py-2 px-4 mt-4 rounded-lg">
                            🔴 Youtube
                        </button>
                        <button style={{ backgroundColor: '#222121' }} className="hover:bg-gray-600 mr-4 text-white font-bold py-2 px-4 mt-4 rounded-lg">
                            🎨 Tiktok
                        </button>
                        <button style={{ backgroundColor: '#222121' }} className="hover:bg-gray-600 mr-4 text-white font-bold py-2 px-4 mt-4 rounded-lg">
                            🟣 Discord
                        </button>

                    </div>

                    <h1 className="text-md mt-5 text-gray-500">©2022 - The Menta, Inc.</h1>
                    <h1 className="text-md mb-10 mt-1 text-gray-500">Terms and condition, Privacy</h1>
                </div>
            </div>
        </>
    );
}
