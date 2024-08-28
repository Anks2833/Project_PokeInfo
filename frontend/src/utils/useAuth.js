    import { useState, useEffect } from 'react';
    import axios from 'axios';

    const useAuth = () => {
        const [isAuth, setIsAuth] = useState(false)

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    const response = await axios.get('https://project-pokeinfo.onrender.com/api/v1/user/profile', { withCredentials: true });
                    if (response.data.isAuthenticated) {
                        setIsAuth(true);
                    } else {
                        setIsAuth(false);
                    }
                } catch (error) {
                    console.error('Authentication check failed:', error);
                    setIsAuth(false);
                }
            };
    
            checkAuth();
        }, []);

        return isAuth;
    };

export default useAuth;