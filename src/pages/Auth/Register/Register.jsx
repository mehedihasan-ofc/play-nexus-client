import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useSetTitle from '../../../hooks/useSetTitle';

const Register = () => {

    const { createUser, updateUserData, setReload, setPreloader } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const navigation = useNavigation();
    useSetTitle('Register');

    if (navigation.state === 'idle') {
        setPreloader(false);
    }

    // submit function
    const handleSubmit = (event) => {
        // prevent page refresh
        event.preventDefault();

        setError('');

        // validate
        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
                handleUpdateUserData(createUser, name, photoUrl);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setError(err.message)
            })
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleUpdateUserData = (user, name, photoUrl) => {

        setError('');

        updateUserData(user, name, photoUrl)
            .then(() => {
                console.log('user updated');
                setReload(true);

            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <div className="flex justify-center items-center h-full p-8">
            <div className="bg-white shadow-md rounded-2xl p-6 w-[400px]">
                {/* error message */}
                <p className='text-red-500 font-semibold text-center mb-2'>{error}</p>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-3xl text-center font-merriweather font-bold mb-2">Sign up</h2>
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2"
                                onClick={togglePassword}
                            >
                                {showPassword ? <FaEye className='text-lg' /> : <FaEyeSlash className='text-lg' />}
                            </button>
                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="photoUrl" className="block text-gray-700 font-semibold mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoUrl"
                            className="border-gray-400 border-solid border py-2 px-3 w-full rounded-md"
                            placeholder="Enter the URL of your photo"
                            value={photoUrl}
                            onChange={(event) => setPhotoUrl(event.target.value)}
                        />
                    </div>

                    <div className='text-center mt-4'>
                        <button
                            type="submit"
                            className="btn-custom w-full"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className='text-center mt-3 font-semibold'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;