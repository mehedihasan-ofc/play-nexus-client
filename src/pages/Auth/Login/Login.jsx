import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useSetTitle from '../../../hooks/useSetTitle';

const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const { signIn, signInWith, setPreloader } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const navigation = useNavigation()
    useSetTitle('Login');

    if (navigation.state === 'idle') {
        setPreloader(false);
    }

    const from = location.state?.from?.pathname || '/';

    // submit function
    const handleSubmit = (event) => {
        // prevent page refresh
        event.preventDefault();

        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleLogin = () => {
        signInWith(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    }


    return (
        <div className="flex justify-center items-center h-full p-8">
            <div className="bg-white shadow-md rounded-2xl p-6 w-[400px]">
                <p className='text-red-500 font-semibold text-center mb-2'>{error}</p>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-3xl text-center font-merriweather font-bold mb-2">Login</h2>
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

                    <div className='text-end'>
                        <p className='link link-hover'>Forget Password</p>
                    </div>

                    <div className='text-center mt-4'>
                        <button
                            type="submit"
                            className="btn-custom w-full"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className='text-center mt-3 font-semibold'>New to PlayNexus? <Link to='/register' className='text-primary'>Sign Up</Link></p>

                <div className='mt-2'>

                    <div className="divider">OR</div>

                    <div className='border p-2 rounded-full mb-2'>
                        <button onClick={handleGoogleLogin} className='flex text-blue-500 items-center justify-center w-full'>
                            <FaGoogle className='text-xl mr-3' />
                            <span className='font-semibold'>Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;