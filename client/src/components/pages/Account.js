import React, { useState, useEffect } from 'react';
import { logout, userData } from '../../services/api';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../styles/pages/Account.css'

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
            <main className='background-dark-light' >
                <div className='background-dark row row-cols-lg-2 row-cols-1  justify-content-around align-items-center' id='profile-container'>
                    <div className='profile-data col col-lg-4'>
                        <div class="item-one">
                            <div className="profile-image mb-3">
                                <img
                                    src='https://i.pinimg.com/originals/f4/98/16/f498165435a4eea60088a93eb72a3ff8.jpg'
                                    style={{ width: '100%', cursor: 'pointer' }}
                                />
                            </div>
                            <button type='button' className='green-BTN' onClick={handleLogout}>Logout</button>
                        </div>

                        <div class="item-two d-lg-none">
                            <div>
                                <small className='mb-1 fw-light'>Email</small>
                                <p className='fw-bold'>{user?.email}</p>
                            </div>
                            <div>
                                <small className='mb-1 fw-light'>Username</small>
                                <p className='fw-bold m-0'>{user?.username}</p>
                            </div>
                        </div>
                        <hr className='bg-light  d-lg-block d-none' />
                    </div>
                    <div className='col d-lg-none border border-1 my-2' style={{ width: "90%" }}></div>
                    <div className='col col-lg-7 text-light pb-4 profile-others d-lg-flex justify-content-around' >
                        <div className='d-flex flex-lg-column justify-content-around align-items-lg-start align-items-center' style={{ overflow: "hidden" }}>
                            <div className='mb-lg-2'>
                                <small className='mb-1 fw-light'>Profile Access:</small>
                                <p className='fw-bold m-0'>Secrecy</p>
                            </div>
                            <div className='border d-lg-none' style={{ height: "30px" }}></div>
                            <div className='mb-lg-2'>
                                <small className='mb-1 fw-light'>Gender:</small>
                                <p className='fw-bold m-0'>Male</p>
                            </div>
                        </div>

                        <div className='d-lg-flex d-none flex-lg-column justify-content-around align-items-lg-start align-items-center' style={{ overflow: "hidden" }}>
                            <div className='mb-lg-2'>
                                <small className='mb-1 fw-light'>Email:</small>
                                <p className='fw-bold m-0'>{user?.email}</p>
                            </div>
                            <div className='border d-lg-none' style={{ height: "30px" }}></div>
                            <div className='mb-lg-2'>
                                <small className='mb-1 fw-light'>Username:</small>
                                <p className='fw-bold m-0'>{user?.username}</p>
                            </div>
                        </div>
                        <div className='d-flex d-lg-none justify-content-around mt-4 profile-others-action'>
                            <button type='button' className='green-BTN' style={{ width: "40%" }}>Suggest A Novel</button>
                            <button type='button' className='green-BTN' style={{ width: "40%" }}>Power: 0</button>
                        </div>
                    </div>
                    <div className='col-12 d-lg-flex d-none profile-others-action justify-content-between pb-4'>
                        <button type='button' className='green-BTN' style={{ width: "40%" }}>Suggest A Novel</button>
                        <button type='button' className='green-BTN' style={{ width: "40%" }}>Power: 0</button>

                    </div>
                </div>
                <div className='background-dark d-flex justify-content-center align-items-center mt-4' id='advertisement'>
                    <aside className='background-dark-light text-light text-center' style={{ height: "80%", width: "80%" }}>Advertisement</aside>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Account;
