import React from 'react';

const SignupForm = ({ onLoginClick, onSubmit }) => {
    return (
        <div className="flex items-center justify-center h-screen">

            <div className="max-w-md mx-auto p-4 border rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Signup Form</h2>
                <form onSubmit={onSubmit}>
                    <label className="block mb-2">
                        Email:
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </label>
                    <label className="block mb-2">
                        Password:
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </label>
                    <label className="block mb-2">
                        Confirm Password:
                        <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            type="password"
                            placeholder="Confirm your password"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Signup
                    </button>
                </form>
                <p className="mt-4">
                    Already have an account?{' '}
                    <button
                        onClick={onLoginClick}
                        className="text-blue-500 hover:underline focus:outline-none"
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
