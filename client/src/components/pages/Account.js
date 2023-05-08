import React, { useState, useEffect } from 'react';
import { logout, userData } from '../../services/api';
import Header from '../common/Header';


function Account() {
    const [user, setUser] = useState(null);
    const [currentTheme, setCurrentTheme] = useState();

    useEffect(() => {
        setCurrentTheme(localStorage.getItem('theme'));

        const handleStorageChange = () => {
            setCurrentTheme(localStorage.getItem('theme'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);



    useEffect(() => {
        async function fetchUserData() {
            try {
                const data = await userData();
                setUser(data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }
        fetchUserData();
    }, []);

    const handleLogout = () => {
        logout()
            .then((response) => {
                console.log(response.data); // should print 'Session ended'
                window.location.href = '/';
            })
            .catch((error) => {
                console.log('Error ending session:', error);
            });
    };

    return (
        <>
            <Header />
            <main className='mt-3'>
                <div className='row justify-content-around'>
                    <div className='col-4'>
                        <div
                            className={`profileContainer ${currentTheme ? 'border border-dark' : 'border border-light'
                                }`}
                        >
                            <img
                                src='https://i.pinimg.com/originals/f4/98/16/f498165435a4eea60088a93eb72a3ff8.jpg'
                                style={{ width: '100%', cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <p className='mb-1'>Email</p>
                            <p>{user?.email}</p>
                        </div>

                        <div>
                            <p className='mb-1'>Username</p>
                            <p>{user?.username}</p>
                        </div>
                    </div>
                </div>
            </main>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Account;
