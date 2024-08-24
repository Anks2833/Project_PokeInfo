import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('https://project-pokeinfo.onrender.com/api/v1/user/profile', {
                    withCredentials: true
                });
                console.log('Response:', response);
                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    console.log('Authentication failed:', response.status);
                    setError(`Authentication failed: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Authentication check failed:', error);
                setError(error.message);
            }
        };

        checkAuth();
    }, []);



    return isAuthenticated;
};

export default useAuth;
