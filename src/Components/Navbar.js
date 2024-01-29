import React from 'react'

const Navbar = () => {
    return (

        <div className="bg-blue-500 w-64 p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <nav>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="hover:underline">Home</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:underline">Profile</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:underline">Settings</a>
                    </li>

                </ul>
            </nav>
        </div>

    )
}

export default Navbar
