    import { useState, useEffect } from 'react';
    import axios from 'axios';

    const useAuth = () => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    const response = await axios.get('/api/v1/user/profile', { withCredentials: true });
                    if (response.status === 200) {
                        setIsAuthenticated(true);
                        // console.log(response.data);
                    } else {
                        setIsAuthenticated(false);
                    }
                } catch (error) {
                    console.error('Authentication check failed:', error);
                    setIsAuthenticated(false);
                }
            };
    
            checkAuth();
        }, []);

        return isAuthenticated;
    };

export default useAuth;